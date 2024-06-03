const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const signin = require('./Routes/signin');

const Sendverification = require('./Routes/Sendverification');

const Login = require('./Routes/Login');

const verify = require('./Routes/verify');

const sendotp = require('./Routes/sendotp');
const verifyotp = require('./Routes/verifyotp');



const Emailgenotp= require('./Routes/Emailgenotp');
const Emailverifyotp= require('./Routes/Emailverifyotp');
const path = require('path')


app.use(express.static(path.join(__dirname, '/client/build')));

console.log('...........') 


//sign up
app.use('/signin', signin);

//send email
app.use('/Sendverification', Sendverification);

//email verification
app.use('/verify', verify);

//user login

app.use('/Login',Login);

app.use('/send-otp',sendotp);
app.use('/verify-otp',verifyotp);


app.use('/sendotpp', Emailgenotp);


app.use('/verifyotpp', Emailverifyotp);
  
    

 
  
  app.listen(5000, () => {console.log('Loading')
})

  