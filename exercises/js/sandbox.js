function SandBox(){
  this.run();
}

//Select all of the div elements that have a class of “module”.
SandBox.prototype.selectModuleDiv = function(){
 var module_div = $("div.module");
}

SandBox.prototype.selectThirdmyListli = function(){
  $('#myList li').eq(2).addClass("_mylist_li");
}

//Select the list item inside #myList that has a class of “current” and remove that class from it; add a class of “current” to the next list item.
SandBox.prototype.removecurrent= function(){
var current = $('#myList li.current').removeClass("current").next("li").addClass("_mylist_li")
}

//Select the label for the search input using an attribute selector.
SandBox.prototype.selectLabel = function(){
  $('.label_for_search').addClass("_label_for_search");
}

//Figure out how many elements on the page are hidden
SandBox.prototype.countHiddenInput = function(){
  var hiddeninputs = $("input:hidden").length ;
}

//Select the search input text box, then traverse up to the form and add a class to the form.
SandBox.prototype.addClassToParentForm = function(){
  $('.search_text').addClass("_search_text").parent("form").addClass("search_form");
  $("#myList .current").removeClass("current");
}
 
//Select the select element inside #specials; traverse your way to the submit button. 
SandBox.prototype.preselectOptionAndFindInputButtonParentForm = function(){
  $("#specials form").find('select>option:eq(1)').prop('selected', true).parent().parent().parent().parent().find("input:submit").css({'background':'green','color':'#fff','border':'none'})
  //$("#specials form").find("input:submit").trigger("click")

}             

//Select the first list item in the #slideshow element; add the class “current” to it, and then add a class of “disabled” to its sibling elements.
SandBox.prototype.addDisableClassToSlideShowliNotEqFirst = function(){
  $("#slideshow li").eq(0).addClass("current").not(":eq(0)").addClass("disabled");
}

/*
SandBox.prototype.addCurrentClassToSlideShowliEqFirst = function(){
  $("#slideshow li:first").addClass("current");
}
*/

//Add another h2 and another paragraph to the last div.module
SandBox.prototype.appendAnotherHeaderToModlue = function(){
  $("div.module:last").append("<h2>Another header</h2>").append("<p>Another paragraph</p>");
}

//Add another option to the select element; give the option the value “Wednesday” 
SandBox.prototype.appendWednesdayOptionToDropDown = function(){
  $("li>select>option").eq(2).after("<option value='Wednesday'>Wednesday</option>");
}

//Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
SandBox.prototype.appendDynamicImageDiv = function(){
  $("div.module:last").after("<div class='dynamicImageDiv'></div>");
  $(".dynamicImageDiv").html($("ul#slideshow>li:first").find("img"));
}

/*
SandBox.prototype.appendImageToDynamicImageDiv = function(){
  $(".dynamicImageDiv").html($("ul#slideshow>li:first").find("img"));
}
*/

//Add five new list items to the end of the unordered list #myList.
SandBox.prototype.appendListItem = function(){
  var items = $("#myList li");
  for(var i=0;  i < 5; i++)
  {
    $("#myList").append("<li>New List " + (items.length + i + 1) + "</li>")
  }
}

//Remove the odd list items
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

//Select all of the odd table rows in the table body.
SandBox.prototype.select_odd_table_row  = function(){
  $("table tbody tr").each(function() {
    var index = ($("table tbody tr").index(this) + 1) % 2;
    if(index != 0)
    {
      $(this).addClass("select_odd_table_row");
    }
  });
}

//Figure out how many image elements on the page have an alt attribute.
//Select all of the image elements on the page; log each image’s alt attribute.
SandBox.prototype.count_all_attr = function(){
  var alt_attr_count = 0;
  $("img").each(function() {
    if($(this).prop("alt")){
      console.log($(this).prop("alt"))
      alt_attr_count++
    };
  });
  //alert(alt_attr_count + " images have alt attribute")
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

   
