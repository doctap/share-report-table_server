import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';
import { getStocks } from './request/GetData';
import { data } from './data';
import { IStockResponse } from './types/data-contracts';

const app = express();
const port = process.env.PORT ?? 5000;
const SECRET_TOKEN = process.env.SECRET_TOKEN;
app.use(express.urlencoded({ extended: true }));

const corsOptions: CorsOptions = {
	credentials: true,
	optionsSuccessStatus: 200,
	origin: ['http://localhost:3000'],
	methods: ['GET', 'POST', 'DELETE'],
}

app.use(helmet());
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get("/", async (req: Request, res) => {
	const page = Number(req.query.page);
	
	await getStocks(page)
		.then(response => {
			res.send(response)
	}).catch(error => {
			res.sendStatus(error.response.status).send(error.response.statusText)
	})
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port} 🚀`);
});