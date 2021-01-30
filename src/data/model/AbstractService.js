class AbstractService {
	constructor(name, baseUrl, endpoint) {
		this.name = name;
		this.baseUrl = baseUrl;
		this.endpoint = endpoint;
	}

	async testConnection() {
		return new Error("AbstractService cannot be used. Override methods");
	}
}

module.exports = AbstractService;