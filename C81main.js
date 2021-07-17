var mouse_event="empty";
var last_pos_x,last_pos_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
 color="purple";
width_of_line=3;

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouse_event="mouseleave";
}
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    var current_pos_mouse_x=e.clientX-canvas.offsetLeft;
    var current_pos_mouse_y=e.clientY-canvas.offsetTop;
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    if(mouse_event="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last_pos_x"+last_pos_x+"last_pos_y"+last_pos_y);
        ctx.moveTo(last_pos_x,last_pos_y);

        console.log("current_pos_mouse_x"+current_pos_mouse_x+"current_pos_mouse_y"+current_pos_mouse_y);
        ctx.lineTo(current_pos_mouse_x,current_pos_mouse_y);
        ctx.stroke();
    }
    last_pos_x=current_pos_mouse_x;
    last_pos_y=current_pos_mouse_y;
}










function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
