import React from "react";
import financialsData from "./financials.json";

const AnalysisEstimates = () => {
    const data = financialsData;

    if(!data){
        return <div> Loading... </div>
    }
    //const goldmanSachsValue = data.analyst_estimates["Goldman Sachs"];
    return(
        <div className="column2">
            <h3 className="heading2"> Analysis Estimates </h3>
            <div className="table-container1">
                <table>
                    <tbody>
                        <tr>
                            <th className="th1"> Company </th>
                            <th> Values </th>
                        </tr>
                        <tr>
                            <td> BofA: </td>
                            <td> 6.9 </td>
                        </tr>
                        <tr>
                            <td> CitiBank: </td>
                            <td> {data.analyst_estimates["Citibank"]} </td>
                        </tr>
                        <tr>
                            <td> Goldman Sachs: </td>
                            <td> {data.analyst_estimates["Goldman Sachs"]} </td>
                        </tr>
                        <tr>
                            <td> Morgan Stanley: </td>
                            <td> {data.analyst_estimates["Morgan Stanley"]} </td>
                        </tr>
                        <tr>
                            <td> J.P Morgan: </td>
                            <td> 8.7 </td>
                        </tr>
                        <tr>
                            <td> Moelis: </td>
                            <td> 7.0 </td>
                        </tr>
                        <tr>
                            <td> Lazard: </td>
                            <td> 9.2 </td>
                        </tr>
                        <tr>
                            <td> Evercore: </td>
                            <td> 8.8 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AnalysisEstimates;