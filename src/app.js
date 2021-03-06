const express = require('express');
const app = express();
const dotenv = require('dotenv');
const routes = require('./routes/routes');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config();

app.use(express.json());
app.use(morgan('[:date[web]] || :method :url  || Status: :status || Response time: :response-time ms'));
app.use(cors());


app.get('/', (req, res) => {
	return res.status(200).json({
		data: {
			message: "Vevericka Status Service"
		}
	});
})

app.use('/api/v1', routes);

app.use('*', (req, res) => {
	return res.status(404).json({
		data: {
			error: {
				message: "Route not found",
				status_code: 404
			}
		}
	});
})

const PORT = process.env.PORT || 2121;
app.listen(PORT, () => {
	console.log(`Server started listening on port ${PORT}`);
})