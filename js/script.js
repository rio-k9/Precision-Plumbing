$( document ).ready(function() {

jQuery("#wowslider-container0").wowSlider({
  effect:"basic",
  prev:"",
  next:"",
  duration:20*100,
  delay:61*100,
  width:800,
  height:600,
  autoPlay:true,
  autoPlayVideo:false,
  playPause:false,
  stopOnHover:false,
  loop:false,
  bullets:1,
  caption:true,
  captionEffect:"fade",
  controls:false,
  controlsThumb:false,
  responsive:2,
  fullScreen:false,
  gestures:2,
  onBeforeStep:0,
  images:0});


  $(".skill_div").on('mouseenter mouseleave',
    function () {
      var $this = $(this).find("img");
      var newSource = $this.data('alt-src');
      $this.data('alt-src', $this.attr('src'));
      $this.attr('src', newSource)
    }
  );



});
