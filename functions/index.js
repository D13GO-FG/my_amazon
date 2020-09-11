const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51HPy7oDdTlCGY2f4EybfzwkmHMcUgXQlBXJhGLfDJwd76v3SrC4ovhQzyc9c8XDDP4gV9ERNYoWRXrDUcdGmnQ3a00HHtK6N6R'
);

//api

//app config
const app = express();
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//api routes
app.get('/', (request, response) => response.status(200).send('Hello world'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payment Request Recieved BOOM!!! for this amount >>>', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd',
	});

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});
//listen command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/clone-835c9/us-central1/api
