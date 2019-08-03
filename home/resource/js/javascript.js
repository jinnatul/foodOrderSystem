/* Random Change Color */

setInterval( function() {

    var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var randomColor1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var randomColor2 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var randomColor3 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var randomColor4 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    document.getElementById("icon_1").style.color = randomColor1;
    document.getElementById("icon_2").style.color = randomColor2;
    document.getElementById("icon_3").style.color = randomColor3;
    document.getElementById("icon_4").style.color = randomColor4;
    document.getElementById("h3_color1").style.color = randomColor;
    document.getElementById("h3_color2").style.color = randomColor;
    document.getElementById("h3_color3").style.color = randomColor;
    document.getElementById("h3_color4").style.color = randomColor;

}, 1000);



/* Button scrolling */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("go_btn").style.display = "block";
  } else {
    document.getElementById("go_btn").style.display = "none";
  }
}