//Functions
var total = 0;
function applesFcn() {
  var numApples = document.getElementById("apples").value;
    if (numApples < 0 || numApples > 99)
    {
      alert("sorry number of apples must be between 0 and 99");
    }
    else
    {	
      total = total + 0.59 * numApples;
      //alert("Total at this point is " + total);
    }
}

function orangesFcn() {
  var numOranges = document.getElementById("oranges").value;
    if (numOranges < 0 || numOranges > 99)
    {
      alert("sorry number of oranges must be between 0 and 99");
    }
    else
    {
		total += 0.49 * numOranges;
		//alert("Total at this point is " + total);
	}
}

function bananasFcn() {
var numBananas = document.getElementById("bananas").value;
	if (numBananas < 0 || numBananas > 99)
    {
      alert("sorry number of bananas must be between 0 and 99");
    }
    else
    {
    total += 0.39 * numBananas;
    //alert("Total at this point is " + total);
	}
}
/*
function finish() 
{
    total *= 1.05;
    alert("Total  is $" + total);
}*/

function totalCost(){
applesFcn();
orangesFcn();
bananasFcn();
total *= 1.05;
alert("Total is: " +total);
}