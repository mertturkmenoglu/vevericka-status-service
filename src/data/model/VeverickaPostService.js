const AbstractService = require('./AbstractService');
const ServerStatus = require('../responses/ServerStatus');
const axios = require('axios');

class VeverickaPostService extends AbstractService {
	constructor() {
		super(
			"Vevericka Post Service",
			"https://vevericka-post-service.herokuapp.com/",
			"https://vevericka-post-service.herokuapp.com/api"
		);
	}

	async testConnection() {
		try {
			const response = await axios.get(this.endpoint);
			return new ServerStatus(response.status);
		} catch (e) {
			console.log(e);
			return new ServerStatus(500);
		}
	}
}

module.exports = VeverickaPostService;