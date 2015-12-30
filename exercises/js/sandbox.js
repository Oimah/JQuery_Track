function SandBox(){
  this.run();
}

SandBox.prototype.selectModuleDiv = function(){
  $(".module").addClass("_module");
}

SandBox.prototype.selectThirdmyListli = function(){
  $('#myList li').eq(2).addClass("_mylist_li");
}

SandBox.prototype.selectLabel = function(){
  $('.label_for_search').addClass("_label_for_search");
}

SandBox.prototype.countHiddenInput = function(){
  alert($("input:hidden").length + " hidden input are available on this page");
}

SandBox.prototype.addClassToParentForm = function(){
  $('.search_text').addClass("_search_text").parent("form").addClass("search_form");
  $("#myList .current").removeClass("current");
}
 
SandBox.prototype.preselectOptionAndFindInputButtonParentForm = function(){
  $("#specials form").find('select>option:eq(1)').prop('selected', true).parent().parent().parent().parent().find("input:submit").css({'background':'green','color':'#fff','border':'none'})
  //$("#specials form").find("input:submit").trigger("click")

}             

SandBox.prototype.addDisableClassToSlideShowliNotEqFirst = function(){
  $("#slideshow li").not(":eq(0)").addClass("disabled");
}

SandBox.prototype.addCurrentClassToSlideShowliEqFirst = function(){
  $("#slideshow li:first").addClass("current");
}


SandBox.prototype.appendAnotherHeaderToModlue = function(){
  $("div.module:last").append("<h2>Another header</h2>").append("<p>Another paragraph</p>");
}

SandBox.prototype.appendWednesdayOptionToDropDown = function(){
  $("li>select>option").eq(2).after("<option value='Wednesday'>Wednesday</option>");
}

SandBox.prototype.appendDynamicImageDiv = function(){
  $("div.module:last").after("<div class='dynamicImageDiv'></div>");
}

SandBox.prototype.appendImageToDynamicImageDiv = function(){
  $(".dynamicImageDiv").html($("ul#slideshow>li:first").find("img"));
}

SandBox.prototype.appendListItem = function(){
  var items = $("#myList li");
  for(var i=0;  i < 5; i++)
  {
    $("#myList").append("<li>New List " + (items.length + i + 1) + "</li>")
  }
}

SandBox.prototype.remove_odd_listitems = function(){
  $("#myList li").each(function() {
    var index = ($("#myList li").index(this) + 1) % 2;
    if(index === 0)
    {
      $(this).addClass("remove");
    }
  });
  $(".remove").remove();
}


SandBox.prototype.select_odd_table_row  = function(){
  $("table tbody tr").each(function() {
    var index = ($("table tbody tr").index(this) + 1) % 2;
    if(index != 0)
    {
      $(this).addClass("select_odd_table_row");
    }
  });
}

SandBox.prototype.count_all_attr = function(){
  var alt_attr_count = 0;
  $("img").each(function() {
    if($(this).prop("alt")){
      console.log($(this).prop("alt"))
      alt_attr_count++
    };
  });
  alert(alt_attr_count + " images have alt attribute")
}

SandBox.prototype.run =function(){
  this.selectModuleDiv();
  this.selectThirdmyListli();
  this.selectLabel();
  this.countHiddenInput();
  this.count_all_attr();
  this.select_odd_table_row();
  this.addClassToParentForm();
  this.preselectOptionAndFindInputButtonParentForm();
  this.addDisableClassToSlideShowliNotEqFirst();
  this.addCurrentClassToSlideShowliEqFirst();
  this.appendAnotherHeaderToModlue();
  this.appendWednesdayOptionToDropDown();
  this.appendDynamicImageDiv();
  this.appendImageToDynamicImageDiv();
  this.appendListItem();
  this.remove_odd_listitems();
  this.appendListItem();
  this.remove_odd_listitems();
  this.select_odd_table_row();
  this.count_all_attr();

}

$(document).ready(function(){
  new SandBox();
})

   
