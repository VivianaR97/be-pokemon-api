import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import express from 'express';
import cors from 'cors';
import { initDataSource } from './config/database';
import router from './routes';
import swaggerOptions from './config/swagger';

const app = express();
const swaggerSpec = swaggerJsdoc(swaggerOptions);

init();

async function init() {
	try {
		// DB Initialization
		initDataSource();

		app.use(cors());
		app.use(express.json());
		app.use(router);
		app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
		app.listen(3001, () => {
			console.log('Express App Listening on Port 3001');
		});
	} catch (error) {
		console.error(`An error occurred: ${JSON.stringify(error)}`);
		process.exit(1);
	}
}
