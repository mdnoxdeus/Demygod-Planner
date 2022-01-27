document.querySelector('#userinput').focus();

let input = document.querySelector("#userinput");
let ol = document.querySelector("ol");
let enter = document.querySelector("#enterButton");
let li = document.querySelectorAll('li');

//function for insert
function insertIntoList(){
	if(input.value.length > 0){
		let li = document.createElement("li");
		let button = document.createElement("button");
		button.textContent = "Delete";
		li.textContent = input.value;
		ol.appendChild(li);
		li.appendChild(button);
		button.classList.add('todobutton');
		input.value = "";
	}
}

//enter button entry
enter.addEventListener('click', insertIntoList)
input.addEventListener('keypress', function(event){
	if(event.keyCode === 13){
		insertIntoList();
	}
})

//strikethrough for li items
ol.addEventListener('click', function(event){
	event.target.classList.toggle('done');
})

//delete button
document.addEventListener('click', function(event){
	if(event.target.classList.contains('todobutton')){
		ol.removeChild(event.target.parentElement);
	}
})
