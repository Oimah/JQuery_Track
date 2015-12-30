var labeltext;

function CreateInputHint(){
this.eventBinding();
}

CreateInputHint.prototype.eventBinding = function(){
  var that = this;
  $(".input_text").addClass("hint").val(labeltext)
  $(".label_for_search").remove();
  $(".input_text").bind({
    focus:that.removeHint,
    blur:that.addHint
  })
}

CreateInputHint.prototype.removeHint = function(){
  if( $(this).val() === labeltext){
  $(this).val("").removeClass("hint");
  }
}

CreateInputHint.prototype.addHint =function(){
  if( $(this).val() === null || $(this).val() === undefined ||  $(this).val() === "" ){
    $(this).val(labeltext).addClass("hint");
  }
}

$(document).ready(function(){
  labeltext = $(".label_for_search").text();
  new CreateInputHint();
})


