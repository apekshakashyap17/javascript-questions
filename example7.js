// prompt the user to enter the full name. Generate a username for them ased on their input. Start username with 2 followed by their full name and ending with the fullname length.


let username = prompt("enter your fullname without spaces");

let newname = "@" + username + username.length;

console.log(newname);






