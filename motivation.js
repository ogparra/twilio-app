// Author: Oscar Parra
// Last Modified: 10/28 

// Credentials are stored in the .env file

require('dotenv').config()

const acct_id = process.env.TWILIO_ACCTID;
const auth_tok = process.env.TWILIO_AUTHTOK;

const twilio = require('twilio');

const client = new twilio(acct_id, auth_tok);

client.messages.create({
    body: 'Hey Oscar, this message was sent using the Twilio API',
    to: '+13109560176',  // Text this number
    from: '+14242908182' // From a valid Twilio number
})
.then((message) => console.log(message.sid));