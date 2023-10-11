var tl=gsap.timeline()
tl.from("#nav",{
   opacity:0,
   delay:0.3
})
tl.from("#nav h1,#nav-part2 h3 , #nav h4" ,{
   y:-80,
   opacity:0,
   duration:1,
   delay:0.5,
   stagger:0.3
})
tl.from(".left h1,.left span img",{
   x:-500,
   opacity:0,
   duration:1,
   stagger:0.5
})
tl.from(".right img",{
   scale:2,
   opacity:0,
   duration:0.5

})


gsap.from("#page2 .box",{
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.5,
  scrollTrigger:{
   trigger:"#page2 .box",
   scroller:"body",
   //markers:true,
   start:"top 70%",
  }
})