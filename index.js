$(document).ready(function() {
	$('#fullpage').fullpage({
        scrollOverflow: true,
        menu: '#navb',
        recordHistory: false,
        sectionsColor: ['rgba(0,0,0,0)', '#222', '#111', '#222', '#333'],
        afterRender: function(){
            $(".lds-css").fadeOut("slow");
            $('.intro').delay(1000).fadeOut("slow");
            setTimeout(function(){
                $(".mainbod").css('opacity', '1');
                $(".intro").addClass("none");
            }, 2000);
            $(document).ready(function(){
                $(".thisguy").click(function(){
                    $("table").slideToggle();
                });
            });
            particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
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
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "; 
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