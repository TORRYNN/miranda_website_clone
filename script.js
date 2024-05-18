const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var t1=gsap.timeline({
    onStart: function() {
        document.querySelector("#nav").style.visibility = "hidden";
    },
    onComplete: function() {
        document.querySelector("#nav").style.visibility = "visible";
    }
})

t1.to("#pageone",{
    y:"100vh",
    duration:0,
    scale:0.3,
  
})

t1.to("#pageone",{
    y:"-90vh",
    duration:1,
    delay:1,

})
t1.to("#pageone",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:.7,

})


