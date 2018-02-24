var parent = document.body;

var X, Y;

var colors = ["#3CC157", "#2AA7FF", "#FF4444", "#FCBC0F", "#F88051"];
var confetti_elements = [],
	number_of_elements = 20;

function mouse(e) {
	X = e.pageX;
	Y = e.pageY;
}

function confetti() {
	parent.innerHTML = "";
	confetti_elements = [];
	for (var i = 0; i < number_of_elements; i++)
	{
		var confetti_element = document.createElement("div");
			confetti_element.className = "confetti";

			confetti_element.style.background = colors[Math.floor(Math.random() * colors.length)];

			confetti_element.style.left = X + "px";
			confetti_element.style.top = Y + "px";

		var angle = Math.random() * (0, -180);
			confetti_element.style.transform = "rotate(" + angle + "deg)";

		var transparency = 1;

		var range = Math.random() * (2 - -2) + -2,
			speed = Math.random() * (0, 2);

		confetti_elements_info = [X, Y, range, transparency, speed];

		confetti_elements.push(confetti_elements_info);
		parent.appendChild(confetti_element);
	}
	pops();
}

var pop_interval;

function pops() {

	var posX, posY, transparency;
	var confetti_element = document.getElementsByClassName("confetti");

	function pop_movement(){
		for (var i = 0; i < confetti_elements.length; i++)
		{
			if (transparency < 0) {
				confetti_elements.splice(i, 1);
				parent.removeChild(confetti_element[i]);
			} else{
				posX = confetti_elements[i][0] + confetti_elements[i][2],
				posY = confetti_elements[i][1] - confetti_elements[i][4];

				transparency = confetti_elements[i][3] - 0.01;

				confetti_element[i].style.left = posX + 'px';
		       	confetti_element[i].style.top  = posY + 'px';

		       	confetti_element[i].style.opacity  = transparency;
		            

		       	confetti_elements[i][0] = posX;
		       	confetti_elements[i][1] = posY;
		       	confetti_elements[i][3] = transparency;
			}

		}
	}

	clearInterval(pop_interval); 
    pop_interval = setInterval(pop_movement, 10);
}

document.onmousemove = mouse;
document.onclick = confetti;