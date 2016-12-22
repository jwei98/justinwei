function sayHello() {
	var name = document.getElementById('Name').value;
	var content = document.getElementById('Hello');
	console.log(name);
	if (name == "") {
		content.innerHTML = "Please enter a name above!";
	}
	else {
		content.innerHTML = "Welcome, " + name + "!";
	}
}
