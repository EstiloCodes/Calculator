const Buttons = document.querySelectorAll('span');
const Value = document.getElementById('value');
const numberofbuttons = document.querySelectorAll('span').length;
for (i=0; i<numberofbuttons; i++)
Buttons[i].addEventListener('click', function(){
 if (this.innerHTML== 'Clear'){
    Value.innerHTML = "";
 }
 

else if (this.innerHTML== '='){
    Value.innerHTML=eval(Value.innerHTML) ;

   
}
else if (this.innerHTML == '/' ) {
    if (Value.innerHTML == '') {
      Value.innerHTML = ""
    } else {
      Value.innerHTML = Value.innerHTML + this.innerHTML
    }

  }
  else if (this.innerHTML == '+' ) {
    if (Value.innerHTML == '') {
      Value.innerHTML = ""
    } else {
      Value.innerHTML = Value.innerHTML + this.innerHTML
    }

  }else if (this.innerHTML == '*' ) {
    if (Value.innerHTML == '') {
      Value.innerHTML = ""
    } else {
      Value.innerHTML = Value.innerHTML + this.innerHTML
    }

  }

else if (this.innerHTML== 'Back' ){
    Value.innerHTML = Value.innerHTML.slice(0, -1);

}

else {
    Value.innerHTML = Value.innerHTML + this.innerHTML;

}
}
 );
   
