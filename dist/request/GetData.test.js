"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GetData_1 = require("./GetData");
var axios_1 = __importDefault(require("axios"));
jest.mock('axios');
var mockedAxios = axios_1.default;
describe('getStocks', function () {
    var response;
    beforeEach(function () {
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
    test('getStocks', function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockedAxios.get.mockReturnValue(response);
                    return [4 /*yield*/, (0, GetData_1.getStocks)(2)];
                case 1:
                    data = _a.sent();
                    expect(data).toEqual({
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
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=GetData.test.js.map