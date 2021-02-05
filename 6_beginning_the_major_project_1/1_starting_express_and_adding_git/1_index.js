/* To set up the directory structure. We can setup the structure very scalable
scalable means whenever we have large files we can split it into smaller files 
and place them in right folder or in right directory
Everything is distributed in a manner that any new developer or 
any new member working on it if he wants to find something he can fetch  
*/
const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
/* When we can use the variables in a string. This is known as interpolation
	but we can backticks */
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});
// We can use the git as soon as possible so that you can track all the changes
// We can create the different branches for different features
/* There are lot of chances when we can write node instead of nodemon
 	so when we can run our server the changes dont reflect.
 	So go to package.json inside scripts write - "start": "nodemon index.js" 
 */ 
 /*
 The folder node modules is quite heavier. Everytime i can do npm install 'library'.
The library is installed in this folder and everytime i want to push some changes i can push these installed libraries
So we dont want to push these libraries we want to push only the code which i can change
so we have to ignore. If someone wants to pull the code he just do npm and install
 */