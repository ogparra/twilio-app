// 

const fetch = require('node-fetch')
require('dotenv').config()

const acct_id = process.env.TWILIO_ACCTID;
const auth_tok = process.env.TWILIO_AUTHTOK;

const twilio = require('twilio');
const client = new twilio(acct_id, auth_tok);


// Current implementation uses callbacks
// Change implementation to use promises
let promise1 = new Promise((resolve, reject) => {
		fetch('https://talaikis.com/api/quotes/random/')
		.then(response => response.json())
		.then(json => resolve(json))
});


// on resolve this will be called 
promise1.then((data) => {
	msg = data.quote + '\n' + data.author
	client.messages.create({
	    body: msg,
	    to: '+13109560176',  // Text this number
	    from: '+14242908182' // From a valid Twilio number
	})
	.then((message) => console.log(message.sid));
});

// on reject this will be called
promise1.catch((data) => {
	console.log("Promise failed")
});



