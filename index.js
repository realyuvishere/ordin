$(document).ready(function() {
	$('#fullpage').fullpage({
        scrollOverflow: true,
        menu: '#navb',
        recordHistory: false,
        sectionsColor: ['#000', '#111', '#222', '#333']
	});
});
function loader(){
    document.getElementById("intro").style.display = "none";
    document.getElementById("mainbod").style.display = "block";
}
// Set the date we're counting down to
var countDownDate = new Date("Aug 6, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time	
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Let's Go";
    }
}, 1000);
$(window).scroll(function() {
if ($(this).scrollTop() > 100){  
    $('.navbar').addClass("navbar-hover")
  } else {
    $('.navbar').removeClass("navbar-hover")
  }
});