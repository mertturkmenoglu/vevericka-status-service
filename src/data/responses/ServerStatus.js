class ServerStatus {
	constructor(statusCode) {
		this.statusCode = statusCode;
	}

	ok() {
		return this.statusCode === 200;
	}
}

module.exports = ServerStatus;