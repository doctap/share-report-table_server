import { IStock, IStockResponse } from "../types/data-contracts"
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_TOKEN = process.env.SECRET_TOKEN;

export const getStocks = async (page: number) => {
  const sliceEnd = Math.ceil(page) * 10

  try {
    const response = await axios.get(`https://cloud.iexapis.com/stable/tops?token=${SECRET_TOKEN}`);
    return {
      stocks: response.data.slice(sliceEnd - 10, sliceEnd),
      totalItemCount: response.data.length
    }    
  } catch (error) {
    throw error
  }

}