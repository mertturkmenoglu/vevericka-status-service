const VeverickaMessageService = require('./model/VeverickaMessageService');
const VeverickaPostService = require('./model/VeverickaPostService');
const VeverickaUserInfoService = require('./model/VeverickaUserInfoService');
const VeverickaAuthService = require('./model/VeverickaAuthService');

const services = [
	new VeverickaPostService(),
	new VeverickaUserInfoService(),
	new VeverickaMessageService(),
	new VeverickaAuthService()
];

module.exports = services;