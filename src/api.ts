import axios from 'axios';

const api_endpoint = process.env.API_ENDPOINT!;

const http = axios.create({
	baseURL: api_endpoint,
	headers: {
		'Content-Type': 'application/json'
	}
});

export default http;
