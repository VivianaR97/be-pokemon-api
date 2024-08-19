import { DataSource } from 'typeorm';
import path from 'path';

export const dataSource = new DataSource({
	type: 'postgres',
	url: 'postgresql://postgres:postgres@postgres:5434/cookunity',
	entities: [path.join(__dirname, '../entities/*.{ts,js}')],
	migrationsRun: false,
	logging: true,
});

export const initDataSource = async () => {
	try {
		await dataSource.initialize();
		console.log('Connection to PostgreSQL DB has been established successfully.');
	} catch (error: any) {
		console.log(error);
		console.log(`Unable to connect to the database: ${error.message}`);
	}
};
