// title
console.log("%c╔═════════════════════════╗\n%cNAME: %cJS CONSOLE\n%c╚═════════════════════════╝",
	"color: gray;",
	"color: #60A140; font-size: 20px; text-shadow: 3px 3px 0 black;",
	"color: #7194FF; font-size: 20px; text-shadow: 3px 3px 0 black;",
	"color: gray;"
);

// important tip
console.log("%c type \"exit()\" to exit", "color: #7194FF; text-shadow: 1px 1px 0 black;");

// actual interpreter
while (true) {	
	let code = prompt("code here");
	if (code != null && code != "exit()") {
		console.log("%c Input:", "color: #7194FF; font-size: 15px; text-shadow: 1px 1px 0 black;");
		console.log(code);
		console.log("%c Output:", "color: #7194FF; font-size: 15px; text-shadow: 1px 1px 0 black;");
		try {
			eval(code);
		} catch (err) {
			console.log("%c Error: " + err.message, "color: #EB4034; font-weight: bold; text-shadow: 1px 1px 0 black;");
		}
	} else if (code == null) {
		console.log("Code canceled");
	} else if (code == "exit()") {
		console.log("%c Succesfully exited IDE", "color: yellow; text-shadow: 1px 1px 0 black;");
		break;
		// this code can only run if it did not succesfully break and js kinda glitched:
		console.log("actually it did not :(");
	}
}
