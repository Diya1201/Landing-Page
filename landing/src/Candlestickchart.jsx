import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, 
         CategoryScale, 
         LinearScale, 
         TimeScale, 
         BarElement, 
         Title, 
         Tooltip, 
         Legend 
        } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const CandlestickChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            label: '',
            data: [],
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1
        }]
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY';
            const symbol = 'AAPL';
            const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

            try {
                const response = await axios.get(url);
                const rawData = response.data['Time Series (Daily)'];
                
                if (!rawData) {
                    console.error('No price data found in the API response');
                    setLoading(false);
                    return;
                }

                const formattedData = Object.keys(rawData).map((date) => ({
                    x: new Date(date),
                    y: [
                        parseFloat(rawData[date]['1. open']),
                        parseFloat(rawData[date]['2. high']),
                        parseFloat(rawData[date]['3. low']),
                        parseFloat(rawData[date]['4. close'])
                    ]
                })).reverse();

                setChartData({
                    labels: formattedData.map((entry) => entry.x),
                    datasets: [{
                        label: 'Apple Stock Price',
                        data: formattedData,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                });
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch stock data:', error);
                setLoading(false);
            }
        }
        getData();
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 16 // Increase legend font size
                    }
                }
            },
            title: {
                display: true,
                text: 'Apple Stock Candlestick Chart',
                font: {
                    size: 20 // Increase title font size
                }
            },
            tooltip: {
                titleFont: { size: 14 }, // Increase tooltip title font size
                bodyFont: { size: 12 }, // Increase tooltip body font size
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                },
                ticks: {
                    font: {
                        size: 14 // Increase x-axis font size
                    },
                    color: '#000' // Set x-axis tick color
                },
                grid: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.2)' // Customize grid line color
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14 // Increase y-axis font size
                    },
                    color: '#000' // Set y-axis tick color
                },
                grid: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.2)' // Customize grid line color
                }
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (chartData.datasets[0].data.length === 0) {
        return <div>No data available</div>;
    }

    return <Bar data={chartData} options={options} />;
}

export default CandlestickChart;
