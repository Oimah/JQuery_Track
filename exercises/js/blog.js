
function LoadBlogger(){
this.showBlog();
}

LoadBlogger.prototype.showBlog = function(){
  $("ul>li>h3>a").click(function(event){
    event.preventDefault();
     new LoadAjaxBlog(this);
    $(this).parent().parent().find("p.excerpt").slideDown("slow", function(){
      $("._current").slideUp("fast");
      $(this).addClass("_current").slideDown()
    })
  });
}

$(document).ready(function(){
  new LoadBlogger();
})
