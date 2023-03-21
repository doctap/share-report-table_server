import { IStock, IStockResponse } from "../types/data-contracts"
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_TOKEN = process.env.SECRET_TOKEN;

export const getStocks = async (page: number) => {
  const requiredCount = Math.ceil(page) * 10

  try {
    const response = await axios.get(`https://cloud.iexapis.com/stable/tops?token=${SECRET_TOKEN}`);

    if (response.data.length - (requiredCount + 10)) {
      return {
        stocks: response.data.slice(requiredCount - 10, requiredCount),
        totalItemCount: response.data.length
      }
    } else {
      throw {
        response: {
          statusText: 'Page Not Found',
          status: 404
        }
      }
    }
  } catch (error) {
    throw error
  }

}