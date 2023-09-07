import {
    getFirestore, collection,getDocs, 
  }from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
   
var certificateDB = getFirestore();
const certificateCollection = collection(certificateDB,"Certificate");

getDocs(certificateCollection).then((querySnapshot) => {
    var carouselData = [];
    var carouselInner = document.querySelector('.carousel-inner');
    var carouselIndicators = document.querySelector('.carousel-indicators');
    var i = 0;
    querySnapshot.forEach((doc) => {
        // carouselData.add({imageUrl:doc.data().image,caption:doc.data().studentName});
        // var item = carouselData[i];

        // Create carousel item
        var carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        // Add image
        var img = document.createElement('img');
        img.src = doc.data().image;
        img.alt = doc.data().studentName;
        img.width = 2000;
        img.height = 500;

        // Add caption
        var caption = document.createElement('div');
        caption.classList.add('carousel-caption');
        caption.innerText = doc.data().studentName;
        // caption.style = 'color: black;font-weight: bold';

        // Add indicators
        var indicator = document.createElement('li');
        indicator.setAttribute('data-target', '#dynamicCarousel');
        indicator.setAttribute('data-slide-to', i);
        

        // Set the first item as active
        if (i === 0) {
            carouselItem.classList.add('active');
            indicator.classList.add('active');
        }

        carouselItem.appendChild(img);
        carouselItem.appendChild(caption);
        carouselInner.appendChild(carouselItem);
        carouselIndicators.appendChild(indicator);
        i++;
    });
    

   
  });
   


    
