canvas
function uploadBackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);

}
var car1 =
car1_width= 120;
car1_height= 70;
car1_image= "car1.png"; 
car1_x=10;
car1_y=10

var car2 =
car2_width= 120;
car2_height= 70;
car2_image= "car2.png"; 
car2_x=10;
car2_y=10
function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=background_image;
    car1_imagetag=new Image();
    car1_imagetag.onload=uploadcar1;
    car1_imagetag.src=car1_image;  
    car2_imagetag=new Image();
    car2_imagetag.onload=uploadcar2;
    car2_imagetag.src=car2_image;  
}
function uploadCar1(){
    ctx.drawImage(car1_imagetag,car_x,car_y,car_width,car_height);}
    function uploadCar2(){
        ctx.drawImage(car2_imagetag,car2_x,car2_y,car2_width,car2_height);}
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){

    keyPressed=e.keyCode;
if (keyPressed=='38'){
    Car1_up();
}
if (keyPressed=='40'){
   Car1_down();
}
if (keyPressed=='37'){
    Car1_left();
}
if (keyPressed=='39'){
    Car1_right();
} 
if (keyPressed=='39'){
    Car2_up();
} 
  if (keyPressed=='83'){
    Car2_down();
} 
  if (keyPressed=='68'){
    Car2_right();
} 
  if (keyPressed=='65'){
    Car2_left();
} 

}
function Car1_up(){
    if(car1_y >=0){
        car1_y= car1_y- 10;
        console.log("when up arrow is pressed, x=" + car1_x +"y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function Car1_down(){
    if(car1_y >=500){
        car1_y= car1_y + 10;
        console.log("when down arrow is pressed, x=" + car1_x +"y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}  
    function Car1_left(){
    if(car1_x >=0){
        car1_x= car1_x - 10;
        console.log("when left arrow is pressed, x=" + car1_x +"y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }  
}
    function Car1_right(){
    if(car1_x >=500){
        car1_x= car1_x + 10;
        console.log("when right arrow is pressed, x=" + car1_x +"y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }  
}
    function Car2_up(){
        if(car2_y >=0){
            car2_y= car2_y- 10;
            console.log("when up arrow is pressed, x=" + car2_x +"y = " + car2_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }
    function Car2_down(){
        if(car2_y >=500){
            car2_y= car2_y + 10;
            console.log("when down arrow is pressed, x=" + car2_x +"y = " + car2_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }
    function Car2_left(){
        if(car2_x >=0){
            car2_x= car2_x - 10;
            console.log("when left arrow is pressed, x=" + car2_x +"y = " + car2_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }  
    }
    function Car2_right(){
        if(car2_x >=500){
            car2_x= car2_x + 10;
            console.log("when right arrow is pressed, x=" + car2_x +"y = " + car2_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        } 
    } 
if (car1_x > 700){
    console.log("car1 Won");
    document.getElementById('game_status').innerHTML = "Car 1 Won!!";
}
if (car2_x > 700){
    console.log("car2 Won");
    document.getElementById('game_status').innerHTML = "Car 2 Won!!";
}