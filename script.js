/*function greeting(name) {
if (name == "") {
	/*var a = document.createElement("P");
	var b = document.createTextNode("Greetings person who will not type their name!");
	a.appendChild(b);
	document.getElementById("newGreeting")*/
	/*document.getElementById("newGreeting").innerHTML = "Greetings person who will not type their name!";

}
else {
	document.appendChild();
}
}*/
function greeting() {

if (document.getElementById('quickName').value) { document.getElementById('newGreeting').innerHTML = 
                    document.getElementById("quickName").value;
                                                        }
    else {
      document.getElementById('newGreeting').innerHTML = "No input message.";
    }}
    /*function showInput() {
       if (document.getElementById('user_input').value) { document.getElementById('display').innerHTML = 
                    document.getElementById("user_input").value;
                                                        }
    else {
      document.getElementById('display').innerHTML = "No input message."
    }}*/