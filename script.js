

gsap.to(".img-container",{
  ease:Expo.easeOut,
  stagger:2,
  width: "100%",
  duration:1.5
})

gsap.to(".text h1",{
  ease:Expo.easeOut,
  stagger:2,
  top:"0%",
  duration:1.5
})
gsap.to(".text h1",{
  ease:Expo.easeOut,
  top:"-100%",
  stagger:2,
  delay:2
})