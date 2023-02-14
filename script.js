var display=document.getElementById("display");
var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
var b3=document.getElementById("b3");
var b4=document.getElementById("b4");
var b5=document.getElementById("b5");
var b6=document.getElementById("b6");
var b7=document.getElementById("b7");
var b8=document.getElementById("b8");
var b9=document.getElementById("b9");
var b0=document.getElementById("b0");

var bdot=document.getElementById("b.");
var badd=document.getElementById("b+");
var bsub=document.getElementById("b-");
var bmul=document.getElementById("bX");
var bdiv=document.getElementById("bdiv");
var bequals=document.getElementById("b=");
var bac=document.getElementById("bac");
var bback=document.getElementById("bback");



var op1=0;
var op2=0;
var operator=null;
var result=0;
var op=false;
var maxlen=10;

/Digits/
b0.addEventListener("click",function(){
   if(display.innerText.length>=maxlen){

   }
   else if(display.innerText==""||op){
      display.innerText="0";
      op=false;
   }
   else{
   display.innerText+="0";}  
});

b1.addEventListener("click",function(){
   if(display.innerText.length>=maxlen){

   }
   else if(display.innerText==""||op){
      display.innerText="1";
      op=false;
   }
   else{
   display.innerText+="1";}  
});

b2.addEventListener("click",function(){
   if(display.innerText.length>=maxlen){

   }
   
   else if(display.innerText==""||op){
      display.innerText="2";
      op=false;
   }
   else{
   display.innerText+="2";}  
});

b3.addEventListener("click",function(){
   if(display.innerText.length>=maxlen){

   }
   else if(display.innerText==""||op){
      display.innerText="3";
      op=false;
   }
   else{
   display.innerText+="3";}  
});

b4.addEventListener("click",function(){
   if(display.innerText.length>=maxlen){

   }
   else if(display.innerText==""||op){
      display.innerText="4";
      op=false;
   }
   else{
   display.innerText+="4";} 
});

b5.addEventListener("click",function(){
   if(display.innerText.length>=maxlen){

   }
   else if(display.innerText==""||op){
      display.innerText="5";
      op=false;
   }
   else{
   display.innerText+="5";} 
});

b6.addEventListener("click",function(){
   if(display.innerText.length>=maxlen){

   }
   else if(display.innerText==""||op){
      display.innerText="6";
      op=false;
   }
   else{
   display.innerText+="6";} 
});

b7.addEventListener("click",function(){
   if(display.innerText.length>=maxlen){

   }
   else if(display.innerText==""||op){
      display.innerText="7";
      op=false;
   }
   else{
   display.innerText+="7";} 
});

b8.addEventListener("click",function(){
   if(display.innerText.length>=maxlen){

   }
   else if(display.innerText==""||op){
      display.innerText="8";
      op=false;
   }
   else{
   display.innerText+="8";} 

});

b9.addEventListener("click",function(){
   if(display.innerText.length>=maxlen){

   }
   else if(display.innerText==""||op){
      display.innerText="9";
      op=false;
   }
   else{
   display.innerText+="9";} 
});

bdot.addEventListener("click",function(){
   display.innerText+="."; 
});

/Operations/
bac.addEventListener("click",function(){
   op1=0;
   op2=0;
   display.innerText="";
});


badd.addEventListener("click",function(){
   op1=parseFloat(display.textContent);
   operator='+';
   op=true;
   display.innerText=op1+"+";
   
});

bsub.addEventListener("click",function(){
   op1=parseFloat(display.textContent);
   operator='-';
   op=true;
   display.innerText=op1+"-";
});

bmul.addEventListener("click",function(){
   op1=parseFloat(display.textContent);
   operator='*';
   op=true;
   display.innerText=op1+"*";
});

bdiv.addEventListener("click",function(){
   op1=parseFloat(display.textContent);
   operator='/';
   op=true;
   display.innerText=op1+"/";
});




/Final Calculation/ 
bequals.addEventListener("click",function(){
op2=parseFloat(display.textContent);   
result=eval(op1+""+operator+""+op2);
result=result.toPrecision(10);

display.innerText=result;
op=true;
});

/Back Space/
bback.addEventListener("click",function(){
display.innerText=display.innerText.slice(0,display.innerText.length-1);
}); 

/Dark Edition/
var dark=document.getElementById("flexSwitchCheckDefault");
dark.addEventListener("click",function(){
var body=document.getElementById("container");
display.classList.toggle("dark-edition");
var button=document.querySelectorAll(".dark");
button.classList.add("dark-edition");
body.classList.toggle("dark-edition");
});