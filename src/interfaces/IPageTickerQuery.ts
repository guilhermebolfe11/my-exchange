import { ParsedUrlQuery } from "querystring";

export default interface IPageTickerQuery extends ParsedUrlQuery {
    tickers?: string[] | string;
}