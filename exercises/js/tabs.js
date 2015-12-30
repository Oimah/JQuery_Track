var prevTabText;

function CreateTab(){
this.run();
}

CreateTab.prototype.tabButtons = function(){
  $("div.module h2").each(function(){
    $(".dynamicUl").append("<li class="+ $(this).text().toLowerCase() +">" + $(this).text() + "</li>")
  })
  $("#blog p.excerpt ").hide();
}

CreateTab.prototype.eventsBinding = function(){
var that = this;
  $(".dynamicUl>li").bind({click: that.tabFunction})
  $(".dynamicUl>li:first").trigger("click");
}


CreateTab.prototype.tabFunction = function(){
  var tabtext =  $(this).text().toLowerCase();
  $(this).addClass("current")
  $("."+ prevTabText).removeClass("current");
  if(prevTabText !== null || prevTabText !==undefined || prevTabText !=="")
  {
    $("#" + prevTabText).addClass("hide");
  }
  $("#" + tabtext).removeClass("hide");
  prevTabText = tabtext;
}

CreateTab.prototype.showBlog = function(){
  $("ul>li>h3>a").click(function(event){
    event.preventDefault();
     new LoadAjaxBlog(this);
    $(this).parent().parent().find("p.excerpt").slideDown("slow", function(){
      $("._current").slideUp("fast");
      $(this).addClass("_current").slideDown()
    })
  });
}

CreateTab.prototype.run = function(){
  this.tabButtons();
  this.eventsBinding();
  this.showBlog();
}

$(document).ready(function(){
  new CreateTab();
})


