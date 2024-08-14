import { DataSource } from 'typeorm';
import fs from 'fs';
import path from 'path';

const seedDataSource = new DataSource({
	type: 'postgres',
	url: 'postgresql://postgres:postgres@localhost:5434/cookunity',
	logging: true,
});

(async () => {
	try {
		await seedDataSource.initialize();

		const scriptPath = path.join(__dirname, './seed.sql');
		const sql = fs.readFileSync(scriptPath, 'utf8');

		await seedDataSource.query(sql);
		console.log('SQL script executed successfully.');

		await seedDataSource.destroy();
		console.log('Connection closed.');
	} catch (error) {
		console.error('Error executing SQL script:', error);
	}
})();
