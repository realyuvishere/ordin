$(document).ready(function() {
	$('#fullpage').fullpage({
        scrollOverflow: true,
        menu: '#navb',
        recordHistory: false,
        sectionsColor: ['#111', '#222', '#333', '#222'],
        afterRender: function(){
            $(".lds-css").fadeOut("slow");
            $('.intro').delay(1000).fadeOut("slow");
            setTimeout(function(){
                $(".mainbod").css('opacity', '1');
                $(".intro").addClass("none");
            }, 2000);
            $(document).ready(function(){
                $(".thisguy").click(function(){
                    $(".eventhead").slideToggle();
                });
            });
        },
        onLeave: function(origin, destination, direction){
            var leavingSection = this;
            if(origin.index == 0){
                $(".navbar").removeClass("none");
            } else if(destination.index == 0) {
                $(".navbar").addClass("none");
            }
        },
	});
});
// Timer
var countDownDate = new Date("Aug 6, 2019 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 31));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 31)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = months + "M " + days + "D " + hours + "h " + minutes + "m " + seconds + "s "; 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Let's Roll ;)";
    }
}, 1000);
setInterval(function(){
    $("#demo").css('background-color', 'rgba(199, 4, 0, 0.83)');
    setTimeout(function(){
        $("#demo").css('background-color', 'rgba(199, 4, 0, 0.53)');
    }, 500)
}, 1000);