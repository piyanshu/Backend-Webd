// There is some changes in setting up the static files because of presence of layouts
/* server ka code humne nahi likha..us code ko kisi ne pehle se hi likha hua hai 
	agar hume server ko create karna hota hai..to hum sirf epress ko as a func call kardete hain
	ab jis bande ne server ka code likha hai usne isi tarah se likha hai 
	ki agar static files, layouts use karenge to hume use batana padega ki hum static files ko konse folder se serve karenge
	ab hum app.use ke andar isliye batate hain kyunki server ke run hone se pehle 
	humare middlewares run hote hain jisse ki hum server ko pehle hi bta dete hain ki 
	humari static files, layouts konse folder main hai
*/
const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));
app.use(expressLayouts);
app.use('/', require('./routes'));


app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});