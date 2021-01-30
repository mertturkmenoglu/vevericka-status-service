const services = require('../data/serviceRegistry');

const root = async (req, res) => {
	return res.status(200).json({
		data: {
			message: "Vevericka Status Service API v1"
		}
	});
}

const getServices = async (req, res) => {
	return res.json({
		data: {
			services: services.map(s => s.name)
		}
	});
}

const getServiceByName = async (req, res) => {
	const name = req.query.name;
	console.log('Name', name);

	if (name === undefined) {
		return res.status(400).json({
			data: {
				error: {
					message: "Please specify a service name",
					status_code: 400
				}
			}
		});
	}

	const filtered = services.filter(s => s.name === name);

	if (filtered.length !== 1) {
		return res.status(400).json({
			data: {
				error: {
					message: "Please specify a valid service name",
					status_code: 400
				}
			}
		});
	}

	const s = filtered[0];

	return res.json({
		data: {
			service: s
		}
	});
}

const getStatuses = async (req, res) => {
	const responses = await Promise.all(services.map(s => s.testConnection()))
	const statuses = responses.map((resp, i) => ({ name: services[i].name, status_code: resp.statusCode }))

	return res.status(200).json({
		data: {
			statuses
		}
	})
}

module.exports = {
	root,
	getServices,
	getServiceByName,
	getStatuses
}