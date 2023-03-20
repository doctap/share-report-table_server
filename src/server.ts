import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';
import { checkJwt } from './middleware/checkJwt';
import upload from './middleware/upload'
import axios from 'axios';
import { DB } from './db';

dotenv.config();

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
// `https://cloud.iexapis.com/stable/tops?token=${SECRET_TOKEN}`
app.use(helmet());
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get("/", async (req: Request, res) => {

	const page = req.query.page;

	const sliceEnd = Math.ceil(Number(page)) * 10

	const items = DB.slice(sliceEnd - 10, sliceEnd)

	// try {
	// 	const response = await axios.get(`https://cloud.iexapis.com/stable/stock/twtr/chart/5y?token=${SECRET_TOKEN}`)
	// 	const length = response.data.length;
	// 	const items = response.data.slice(sliceEnd - 10, sliceEnd)

	// 	res.send({ stocks: items, totalItemCount: length });
	// } catch (error) {
	// 	console.error(error)
	// 	res.sendStatus(401).send(error)
	// }

	

	res.send({ stocks: items, totalItemCount: DB.length });
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port} 🚀`);
});