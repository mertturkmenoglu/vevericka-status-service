const AbstractService = require('./AbstractService');
const ServerStatus = require('../responses/ServerStatus');
const axios = require('axios');

class VeverickaAuthService extends AbstractService {
	constructor() {
		super(
			"Vevericka Auth Service",
			"https://vevericka-auth-service.herokuapp.com/",
			"https://vevericka-auth-service.herokuapp.com/api"
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

module.exports = VeverickaAuthService;