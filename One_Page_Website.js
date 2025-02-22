//get the modal
var modal = document.getElementById("myModal");

//Get the image and insert it inside the modal
   var img = document.getElementById("myImg");
   var modalImg = document.getElementById("img01");
   var captionText = document.getElementById("caption");

   //function to open modal
   function openModal() {
    document.getElementById("myModal").style.display = "block";
   }
   //function to close modal
   function closeModal() {
    document.getElementById("myModal").style.display = "none";
   }

   //function to change the iamge in the modal
   function currentSlide(n) {
    var img = document.getElementsByTagName("img")[n-1];
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
   }