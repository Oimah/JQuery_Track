function CreateNavMenu(){
  this.eventBinding()
}

CreateNavMenu.prototype.eventBinding = function(){
  var that = this;
  $("ul#nav li").bind({
    mouseenter:that.mouseEnter,
    mouseleave:that.mouseOut
  })
}

CreateNavMenu.prototype.mouseEnter = function(){
  $(this).find("ul").addClass("display_submenu");
}

CreateNavMenu.prototype.mouseOut = function(){
  $(this).find("ul").removeClass("display_submenu");
}

$(document).ready(function(){
  new CreateNavMenu();
})