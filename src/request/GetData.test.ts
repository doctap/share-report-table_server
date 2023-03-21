import { IStockResponse } from "../types/data-contracts";
import { getStocks } from "./GetData";
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getStocks', () => {
  let response: any;
  beforeEach(() => {
    response = {
      data: [
        {
          symbol: 'BOAC+',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 0,
          bidSize: 0,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679059800000,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'LVTX',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 1.5,
          bidSize: 100,
          askPrice: 1.81,
          askSize: 100,
          lastUpdated: 1679070812465,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'WIA',
          sector: 'miscellaneous',
          securityType: 'cef',
          bidPrice: 8.64,
          bidSize: 100,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679072587759,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'BOAC+',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 0,
          bidSize: 0,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679059800000,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'LVTX',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 1.5,
          bidSize: 100,
          askPrice: 1.81,
          askSize: 100,
          lastUpdated: 1679070812465,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'WIA',
          sector: 'miscellaneous',
          securityType: 'cef',
          bidPrice: 8.64,
          bidSize: 100,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679072587759,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'BOAC+',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 0,
          bidSize: 0,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679059800000,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'LVTX',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 1.5,
          bidSize: 100,
          askPrice: 1.81,
          askSize: 100,
          lastUpdated: 1679070812465,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'WIA',
          sector: 'miscellaneous',
          securityType: 'cef',
          bidPrice: 8.64,
          bidSize: 100,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679072587759,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'BOAC+',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 0,
          bidSize: 0,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679059800000,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'LVTX',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 1.5,
          bidSize: 100,
          askPrice: 1.81,
          askSize: 100,
          lastUpdated: 1679070812465,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'WIA',
          sector: 'miscellaneous',
          securityType: 'cef',
          bidPrice: 8.64,
          bidSize: 100,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679072587759,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
      ]
    };
  });

  test('getStocks', async () => {
    mockedAxios.get.mockReturnValue(response);
    const data = await getStocks(2);
    expect(data).toEqual<IStockResponse>({
      stocks: [
        {
          symbol: 'LVTX',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 1.5,
          bidSize: 100,
          askPrice: 1.81,
          askSize: 100,
          lastUpdated: 1679070812465,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          symbol: 'WIA',
          sector: 'miscellaneous',
          securityType: 'cef',
          bidPrice: 8.64,
          bidSize: 100,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679072587759,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
      ],
      totalItemCount: 12
    })
  });
});