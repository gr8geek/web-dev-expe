function images_load(){
    document.getElementById("pic0").style.backgroundImage="url("+"https://images.metadata.sky.com/pd-image/085e8709-aa09-498a-96ec-5a6beb9b869b/16-9"+")";
    document.getElementById("pic1").style.backgroundImage="url("+"https://www.denofgeek.com/wp-content/uploads/2018/10/tom-and-jerry-warner-bros.jpg?fit=670%2C377"+")";
    document.getElementById("pic2").style.backgroundImage="url("+"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQty8-UpxEupB4K_KTlI8eAAc0PHRnDZFeKmldv4jxr2fgjeODH&usqp=CAU"+")";
}
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
    video.style.display=none;
  }
}
