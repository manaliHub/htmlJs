// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


function clicked(){
	
	var name=document.getElementById("nameText");
	name.value="Aditya";
	name.setAttribute("style","color:red");
	
}

function sumFunction(num1,num2){
	var sum = parseInt(num1)+parseInt(num2);
	return sum;
}