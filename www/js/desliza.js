$(function() {      
    $("#test").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="right") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="280px";
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });