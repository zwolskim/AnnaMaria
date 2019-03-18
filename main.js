
$("document").ready(
    function()
{ 
    
    rotateTex();
    
   
});
function rotateTex()
{
    var firstTex = $(".sciana:first-child");
    firstTex.addClass("current");
    rotate();
    
}
function rotate()
{
    var current = $(".current");
    current.animate(
    {
        "opacity": 0
    },5000, function()
        {
            $(this).removeClass("current");
        }
        
    );
    current = current.next();
    if (current[0] == undefined)
        current = $(".sciana:first-child");
    current.css("opacity", 0).addClass("current").delay(200).animate({"opacity": 1.0},5000,rotate);
}