import {
    getFirestore, collection, addDoc, doc
  }from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

  import {
    getStorage, ref, uploadBytesResumable, getDownloadURL
}from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";

  var certificateDB = getFirestore();
const certificateCollection = collection(certificateDB,"Certificate");

var studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    var name = document.getElementById("studentName").value;
    var file = document.getElementById("certificate").files[0];
    var storageRef = ref(getStorage(), 'Certificate/'+file.name);
    var uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
    function(snapshot){
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, function(error) {
      console.log(error);
    }, function() {
      getDownloadURL(uploadTask.snapshot.ref).then(function(downloadURL) {
        console.log('File available at', downloadURL);
        var fileUrl = downloadURL;
        addDoc(certificateCollection, {
          studentName: name,
          image:fileUrl,
  
      }).then(function(docRef) {
        studentForm.reset();
    alert("Certificate added successfully");
    location.reload();
          console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
      console.error('Error adding document: ', error);
          // Optionally, you can display an error message to the user here
      });
      });
    }
    );
   
});