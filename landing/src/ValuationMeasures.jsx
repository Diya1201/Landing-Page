import React from "react";
import financialsData from "./financials.json";
//import './design.css';

const ValuationMeasures = () => {
    const data = financialsData;

    if (!data) {
        return <div> Loading... </div>
    }

    return (
        <div className="column1">
            <h3 className="heading1"> Valuation Measures </h3>
            <div className="table-container">
                <table>
                    <tbody>
                        <tr>
                            <th> </th>
                            <th> As of 6/7/24</th>
                        </tr>
                        <tr>
                            <td> Market Cap :</td>
                            <td> {data.market_ap} </td>
                        </tr>
                        <tr>
                            <td> Shares Outstanding :</td>
                            <td> {data.shares_outstanding} </td>
                        </tr>
                        <tr>
                            <td> P/E Ratio :</td>
                            <td> {data.pe_ratio} </td>
                        </tr>
                        <tr>
                            <td> P/S Ratio :</td>
                            <td> {data.ps_ratio} </td>
                        </tr>
                        <tr>
                            <td> P/B Ratio :</td>
                            <td> {data.pb_ratio} </td>
                        </tr>
                        <tr>
                            <td> PEG Ratio :</td>
                            <td> {data.peg_ratio} </td>
                        </tr>
                        <tr>
                            <td> Current Ratio :</td>
                            <td> {data.current_ratio} </td>
                        </tr>
                        <tr>
                            <td> Debt to Equity Ratio :</td>
                            <td> {data.debt_to_equity_ratio} </td>
                        </tr>
                        <tr>
                            <td> EPS :</td>
                            <td> {data.eps} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ValuationMeasures;
