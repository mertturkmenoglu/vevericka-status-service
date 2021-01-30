const AbstractService = require('./AbstractService');
const ServerStatus = require('../responses/ServerStatus');
const axios = require('axios');

class VeverickaUserInfoService extends AbstractService {
	constructor() {
		super(
			"Vevericka User Info Service",
			"https://user-info-service.herokuapp.com/",
			"https://user-info-service.herokuapp.com/"
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

module.exports = VeverickaUserInfoService;