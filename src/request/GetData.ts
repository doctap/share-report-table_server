import { IStock, IStockResponse } from "../types/data-contracts"
import axios from 'axios';
import dotenv from 'dotenv';
import { data, testData } from "../data";

dotenv.config();

const SECRET_TOKEN = process.env.SECRET_TOKEN;

export const getStocks = async (page: number) => {
  const requiredCount = Math.ceil(page) * 10

  try {
    // const response = await axios.get(`https://cloud.iexapis.com/stable/tops?token=${SECRET_TOKEN}`);

    const psevdo = testData.slice(requiredCount - 10, requiredCount);
      return {
        stocks: psevdo,
        // stocks: response.data.slice(requiredCount - 10, requiredCount),
        // totalItemCount: response.data.length
        totalItemCount: testData.length
      }
  } catch (error) {
    throw error
  }
}