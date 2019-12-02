$(document).ready(function () {

  // Gets the video src from the data-src on each button

  var $videoSrc;

  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);



  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autplay=1");
  })


  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  })



  // var i = 0;
  // var txt = 'McArthur Diaz'; 
  // var speed = 50; /* The speed/duration of the effect in milliseconds */

  // function typeWriter() {
  //   if (i < txt.length) {
  //     document.getElementsByClassName("brand-heading").innerHTML += txt.charAt(i);
  //     i++;
  //     setTimeout(typeWriter, speed);
  //   }
  // }

  var app = document.getElementById('name-heading');

  var typewriter = new Typewriter(app, {
    loop: false
  })


  typewriter
    .typeString('McArthur Diaz')
    .pauseFor(1000)
    .start()
    
});