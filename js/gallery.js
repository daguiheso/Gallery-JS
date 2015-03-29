// Bombilla 

	function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "images/pic_bulboff.gif";
    } else {
        image.src = "images/pic_bulbon.gif";
    }
	}

// CHANGE HTML STYLES CSS 

	function myFunction() {
    var y = document.getElementById("demo");
    y.style.fontSize = "25px";           
    y.style.color = "red"; 
	}

// VALIDATE INPUT 

	function myFunctionVI() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demoVI").innerHTML = text;
	}

// MASONRY 

	var container = document.querySelector('#container');
	var msnry = new Masonry( container, {
	  // options
	  columnWidth: 20,
	  "isFitWidth": true,
	  itemSelector: '.caja'
	});
