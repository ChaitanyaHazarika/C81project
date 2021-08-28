canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
my_mouseEvent= ""

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color= document.getElementById("color").value;
    radius= document.getElementById("radius_of_circle").value;
    width= document.getElementById("width_of_line").value;
    my_mouseEvent= "mouseDown";
    
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop;

    if (my_mouseEvent== "mouseDown") {
        console.log("current posiotion of x and y -");
        console.log("x -" + current_position_of_x + " y - " + current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2* Math.PI)
        ctx.stroke()
    }
}
