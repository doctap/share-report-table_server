"use strict";
// import { IStock, IStockResponse } from "../types/data-contracts";
// import { getStocks } from "./GetData"
// describe('getResponse', () => {
//   const items_page1 = getPages(1);
//   const items_page2 = getPages(2);
//   const items_page3 = getPages(3);
//   test('test 1', () => {
//     expect(getStocks(1, getData())).toEqual<IStockResponse>({
//       stocks: items_page1.stocks,
//       totalItemCount: items_page1.totalItemCount
//     });
//    });
//   test('test 2', () => {
//     expect(getStocks(2, getData())).toEqual<IStockResponse>({
//       stocks: items_page2.stocks,
//       totalItemCount: items_page2.totalItemCount
//     });
//    });
//   test('test 3', () => {
//     expect(getStocks(3, getData())).toEqual<IStockResponse>({
//       stocks: items_page3.stocks,
//       totalItemCount: items_page3.totalItemCount
//     });
//    });
// })
// function getPages(pageNumber: number): IStockResponse {
//   const sliceEnd = Math.ceil(pageNumber) * 10;
//   const data = getData();
//   return {
//     stocks: data.slice(sliceEnd - 10, sliceEnd),
//     totalItemCount: data.length
//   };
// }
// function getData (): IStock[] { 
// return [
//   {
//     symbol: 'VFC',
//     sector: 'consumernon-durables',
//     securityType: 'cs',
//     bidPrice: 21.38,
//     bidSize: 100,
//     askPrice: 21.39,
//     askSize: 100,
//     lastUpdated: 1679072686547,
//     lastSalePrice: 21.385,
//     lastSaleSize: 100,
//     lastSaleTime: 1679072674140,
//     volume: 142236
//   },
//   {
//     symbol: 'CYCCP',
//     sector: 'healthtechnology',
//     securityType: 'ps',
//     bidPrice: 0,
//     bidSize: 0,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679059800000,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'BYD',
//     sector: 'consumerservices',
//     securityType: 'cs',
//     bidPrice: 59.49,
//     bidSize: 200,
//     askPrice: 64.82,
//     askSize: 125,
//     lastUpdated: 1679072675960,
//     lastSalePrice: 59.5,
//     lastSaleSize: 85,
//     lastSaleTime: 1679072632116,
//     volume: 15821
//   },
//   {
//     symbol: 'BBUC',
//     sector: 'n/a',
//     securityType: 'n/a',
//     bidPrice: 0,
//     bidSize: 0,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679071969164,
//     lastSalePrice: 17.06,
//     lastSaleSize: 100,
//     lastSaleTime: 1679072641867,
//     volume: 297
//   },
//   {
//     symbol: 'CELU',
//     sector: 'n/a',
//     securityType: 'n/a',
//     bidPrice: 0.5451,
//     bidSize: 100,
//     askPrice: 0.6626,
//     askSize: 100,
//     lastUpdated: 1679063885692,
//     lastSalePrice: 0.5997,
//     lastSaleSize: 17,
//     lastSaleTime: 1679065214270,
//     volume: 324
//   },
//   {
//     symbol: 'COTY',
//     sector: 'consumernon-durables',
//     securityType: 'cs',
//     bidPrice: 10.93,
//     bidSize: 600,
//     askPrice: 10.94,
//     askSize: 700,
//     lastUpdated: 1679072684477,
//     lastSalePrice: 10.935,
//     lastSaleSize: 300,
//     lastSaleTime: 1679072621212,
//     volume: 49812
//   },
//   {
//     symbol: 'IJUL',
//     sector: 'miscellaneous',
//     securityType: 'et',
//     bidPrice: 0,
//     bidSize: 0,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679065632473,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'VNSE',
//     sector: 'miscellaneous',
//     securityType: 'et',
//     bidPrice: 0,
//     bidSize: 0,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679059800000,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'AHT',
//     sector: 'finance',
//     securityType: 'cs',
//     bidPrice: 3.07,
//     bidSize: 200,
//     askPrice: 3.09,
//     askSize: 100,
//     lastUpdated: 1679072682892,
//     lastSalePrice: 3.08,
//     lastSaleSize: 100,
//     lastSaleTime: 1679072515660,
//     volume: 2892
//   },
//   {
//     symbol: 'DDM',
//     sector: 'miscellaneous',
//     securityType: 'et',
//     bidPrice: 58,
//     bidSize: 100,
//     askPrice: 58.74,
//     askSize: 300,
//     lastUpdated: 1679072679136,
//     lastSalePrice: 58.89,
//     lastSaleSize: 12,
//     lastSaleTime: 1679070827228,
//     volume: 446
//   },
//   {
//     symbol: 'RFACU',
//     sector: 'n/a',
//     securityType: 'n/a',
//     bidPrice: 0,
//     bidSize: 0,
//     askPrice: 10.58,
//     askSize: 1000,
//     lastUpdated: 1679070615175,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'NLR',
//     sector: 'miscellaneous',
//     securityType: 'et',
//     bidPrice: 0,
//     bidSize: 0,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679070880971,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'CUBI-F',
//     sector: 'finance',
//     securityType: 'ps',
//     bidPrice: 0,
//     bidSize: 0,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679059800000,
//     lastSalePrice: 19.83,
//     lastSaleSize: 7,
//     lastSaleTime: 1679061302583,
//     volume: 153
//   },
//   {
//     symbol: 'FISI',
//     sector: 'finance',
//     securityType: 'cs',
//     bidPrice: 18.18,
//     bidSize: 100,
//     askPrice: 21.58,
//     askSize: 100,
//     lastUpdated: 1679072669613,
//     lastSalePrice: 19.85,
//     lastSaleSize: 99,
//     lastSaleTime: 1679072063974,
//     volume: 1707
//   },
//   {
//     symbol: 'CBRG',
//     sector: 'n/a',
//     securityType: 'n/a',
//     bidPrice: 10.39,
//     bidSize: 1700,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679059803628,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'DXLG',
//     sector: 'retailtrade',
//     securityType: 'cs',
//     bidPrice: 4.95,
//     bidSize: 100,
//     askPrice: 5.9,
//     askSize: 100,
//     lastUpdated: 1679072685516,
//     lastSalePrice: 5.44,
//     lastSaleSize: 100,
//     lastSaleTime: 1679072595026,
//     volume: 17083
//   },
//   {
//     symbol: 'LIVB',
//     sector: 'n/a',
//     securityType: 'n/a',
//     bidPrice: 10.39,
//     bidSize: 800,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679059801896,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'KTB',
//     sector: 'consumernon-durables',
//     securityType: 'cs',
//     bidPrice: 46.02,
//     bidSize: 106,
//     askPrice: 54.27,
//     askSize: 138,
//     lastUpdated: 1679072680732,
//     lastSalePrice: 49.95,
//     lastSaleSize: 7,
//     lastSaleTime: 1679072663382,
//     volume: 24464
//   },
//   {
//     symbol: 'BOAC+',
//     sector: 'n/a',
//     securityType: 'n/a',
//     bidPrice: 0,
//     bidSize: 0,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679059800000,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'LVTX',
//     sector: 'n/a',
//     securityType: 'n/a',
//     bidPrice: 1.5,
//     bidSize: 100,
//     askPrice: 1.81,
//     askSize: 100,
//     lastUpdated: 1679070812465,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'WIA',
//     sector: 'miscellaneous',
//     securityType: 'cef',
//     bidPrice: 8.64,
//     bidSize: 100,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679072587759,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'PCG-D',
//     sector: 'utilities',
//     securityType: 'ps',
//     bidPrice: 0,
//     bidSize: 0,
//     askPrice: 0,
//     askSize: 0,
//     lastUpdated: 1679059800000,
//     lastSalePrice: 0,
//     lastSaleSize: 0,
//     lastSaleTime: 0,
//     volume: 0
//   },
//   {
//     symbol: 'CVLG',
//     sector: 'transportation',
//     securityType: 'cs',
//     bidPrice: 33.3,
//     bidSize: 200,
//     askPrice: 33.57,
//     askSize: 100,
//     lastUpdated: 1679072635921,
//     lastSalePrice: 33.66,
//     lastSaleSize: 90,
//     lastSaleTime: 1679071475832,
//     volume: 1255
//   },
// ];
// }
//# sourceMappingURL=GetData.test.js.map