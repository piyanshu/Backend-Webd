// root level URL's are /home, /contact, /about
// URL's having common part in them /users/profile, /users/create, /users/edit.
/* If all the URL's point to the users then take me to another file users.js 
	where all these profile, create and edit are to be found 
*/
const express = require('express');
const router = express.router;
/* pehle sari requests (get, post) ko app handle kar rha tha
	but jab hum router aur controller ko separate kar rahe hain to ab vahi kaam express.router module karega.
	To ab hum app ko kahenge ki tu router ko use karle aur sari requests ko router handle kar rha hoga
*/
module.exports = router;