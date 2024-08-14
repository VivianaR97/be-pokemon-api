import { SwaggerDefinition, Options } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'API Documentation',
		version: '1.0.0',
		description: 'Documentation for the API',
	},
	servers: [
		{
			url: 'http://localhost:3001',
			description: 'Local server',
		},
	],
};

const swaggerOptions: Options = {
	swaggerDefinition,
	apis: ['src/docs/*.doc.yaml'],
};

export default swaggerOptions;
