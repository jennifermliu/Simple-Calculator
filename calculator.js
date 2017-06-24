window.onload = function()
{
  var display= document.getElementById("shownumber");
  var display_operator= document.getElementById("showoperator");
  display.innerHTML="0";
  display_operator.innerHTML="";
  var clearbutton = document.getElementById("button-clear");
  var plusbutton = document.getElementById("button-plus");
  var minusbutton = document.getElementById("button-minus");
  var dividebutton = document.getElementById("button-divide");
  var timesbutton = document.getElementById("button-times");
  var equalbutton = document.getElementById("button-equal");
  var negativebutton = document.getElementById("button-plusmn");
  var decimalbutton = document.getElementById("button-.");
  var decimalcounter =0;
  var firstnumber=0;
  var secondnumber=0;
  var operator="";
  var ready=false;
  var calagain=false;
  var clearwithout=false;
  for (var i=0; i<10; i++)
  {
    var numberbutton = document.getElementById("button-" + i);
    if (numberbutton !=null)
     {
       numberbutton.onclick= function(e)
       {
         if(ready==false)
         {
           if (display.innerHTML=="0")
           {
             display.innerHTML = e.target.id.substring(7);
           }
           else if(display.innerHTML=="Not a number")
           {
             display.innerHTML=e.target.id.substring(7);
             clearwithout=false;
           }
           else if(clearwithout==true)
           {
             display.innerHTML=e.target.id.substring(7);
             clearwithout=false;
           }
           else
           {
             display.innerHTML += e.target.id.substring(7);
           }
         }
         else
         {
           decimalcounter=0;
           display.innerHTML = e.target.id.substring(7);
           ready=false;
           display_operator.innerHTML = "";
           calagain=true;
         }
       }
     }
  }
  if (clearbutton !=null)
  {
    clearbutton.onclick= function(e)
    {
      display.innerHTML="0";
      decimalcounter=0;
      display_operator.innerHTML="";
      firstnumber=0;
      secondnumber=0;
      ready=false;
      calagain=false;
      clearwithout=false;
    }
  }
  if (negativebutton !=null)
  {
    negativebutton.onclick= function(e)
    {
      display.innerHTML = -1*(display.innerHTML);
    }
  }
  if (decimalbutton !=null)
  {
    decimalbutton.onclick= function(e)
    {
      if(decimalcounter==0)
      {
        display.innerHTML=display.innerHTML+".";
        decimalcounter++;
      }
    }
  }
  if(plusbutton !=null)
  {
    plusbutton.onclick= function(e)
    {
      display_operator.innerHTML="+";
      ready=true;
      clearwithout=false;
      if (calagain==false)
      {
        operator="plus";
        firstnumber=parseFloat(display.innerHTML);
      }
      else
      {
        if(operator=="plus")
        {
          var sum=parseFloat(firstnumber)+parseFloat(display.innerHTML);
          firstnumber=sum;
          display.innerHTML=sum;
        }
        else if(operator=="minus")
        {
          var difference=parseFloat(firstnumber)-parseFloat(display.innerHTML);
          firstnumber=difference;
          display.innerHTML=difference;
        }
        else if(operator=="times")
        {
          var product=parseFloat(firstnumber)*parseFloat(display.innerHTML);
          firstnumber=product;
          display.innerHTML=product;
        }
        else if(operator=="divide")
        {
          var difference=parseFloat(firstnumber)/parseFloat(display.innerHTML);
          firstnumber=difference;
          display.innerHTML=difference;
        }
        operator="plus";
      }
    }
  }
  if(minusbutton !=null)
  {
    minusbutton.onclick= function(e)
    {
      display_operator.innerHTML="-";
      ready=true;
      clearwithout=false;
      if (calagain==false)
      {
        operator="minus";
        firstnumber=parseFloat(display.innerHTML);
      }
      else
      {
        if(operator=="minus")
        {
          var difference=parseFloat(firstnumber)-parseFloat(display.innerHTML);
          firstnumber=difference;
          display.innerHTML=difference;
        }
        else if(operator=="plus")
        {
          var sum=parseFloat(firstnumber)+parseFloat(display.innerHTML);
          firstnumber=sum;
          display.innerHTML=sum;
        }
        else if(operator=="times")
        {
          var product=parseFloat(firstnumber)*parseFloat(display.innerHTML);
          firstnumber=product;
          display.innerHTML=product;
        }
        else if(operator=="divide")
        {
          var difference=parseFloat(firstnumber)/parseFloat(display.innerHTML);
          firstnumber=difference;
          display.innerHTML=difference;
        }
        operator="minus";
      }
    }
  }
  if(timesbutton !=null)
  {
    timesbutton.onclick= function(e)
    {
      display_operator.innerHTML="\u00d7";
      ready=true;
      clearwithout=false;
      if (calagain==false)
      {
        operator="times";
        firstnumber=parseFloat(display.innerHTML);
      }
      else
      {
        if(operator=="minus")
        {
          var difference=parseFloat(firstnumber)-parseFloat(display.innerHTML);
          firstnumber=difference;
          display.innerHTML=difference;
        }
        else if(operator=="plus")
        {
          var sum=parseFloat(firstnumber)+parseFloat(display.innerHTML);
          firstnumber=sum;
          display.innerHTML=sum;
          operator="minus";
        }
        else if(operator=="times")
        {
          var product=parseFloat(firstnumber)*parseFloat(display.innerHTML);
          firstnumber=product;
          display.innerHTML=product;
        }
        else if(operator=="divide")
        {
          var difference=parseFloat(firstnumber)/parseFloat(display.innerHTML);
          firstnumber=difference;
        }
        operator="times";
      }
    }
  }
  if(dividebutton !=null)
  {
    dividebutton.onclick= function(e)
    {
      display_operator.innerHTML="\u00f7";
      ready=true;
      clearwithout=false;
      if (calagain==false)
      {
        operator="divide";
        firstnumber=parseFloat(display.innerHTML);
      }
      else
      {
        if(operator=="minus")
        {
          var difference=parseFloat(firstnumber)-parseFloat(display.innerHTML);
          firstnumber=difference;
          display.innerHTML=difference;

        }
        else if(operator=="plus")
        {
          var sum=parseFloat(firstnumber)+parseFloat(display.innerHTML);
          firstnumber=sum;
          display.innerHTML=sum;
        }
        else if(operator=="times")
        {
          var product=parseFloat(firstnumber)*parseFloat(display.innerHTML);
          firstnumber=product;
          display.innerHTML=product;
        }
        else if(operator=="divide")
        {
          var difference=parseFloat(firstnumber)/parseFloat(display.innerHTML);
          firstnumber=difference;
          display.innerHTML=difference;
        }
        operator="divide";
      }
    }
  }
  if(equalbutton !=null)
  {
    equalbutton.onclick= function(e)
    {
      if(operator=="plus")
      {
        secondnumber=parseFloat(display.innerHTML);
        display.innerHTML=firstnumber+secondnumber;
      }
      else if(operator=="minus")
      {
        secondnumber=parseFloat(display.innerHTML);
        display.innerHTML=firstnumber-secondnumber;
      }
      else if(operator=="times")
      {
        secondnumber=parseFloat(display.innerHTML);
        display.innerHTML=firstnumber*secondnumber;
      }
      else if(operator=="divide")
      {
        secondnumber=parseFloat(display.innerHTML);
        if(secondnumber==0)
        {
          display.innerHTML="Not a number";
        }
        else
        {
          display.innerHTML=firstnumber/secondnumber;
        }
      }
      display_operator.innerHTML="";
      clearwithout=true;
      ready=false;
      operator="";
      calagain=false;
    }
  }
}
