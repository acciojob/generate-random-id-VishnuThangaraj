function makeid(l) {
  // write your code here
	let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	let result = "";
	
	for(let loop=0; loop<l; loop++){
		result += characters.charAt(Math.floor(Math.random()*62));
	}

	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
