const AbstractService = require('./AbstractService');
const ServerStatus = require('../responses/ServerStatus');
const axios = require('axios');

class VeverickaMessageService extends AbstractService {
	constructor() {
		super(
			"Vevericka Message Service",
			"https://vevericka-message-service.herokuapp.com/",
			"https://vevericka-message-service.herokuapp.com/"
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

module.exports = VeverickaMessageService;