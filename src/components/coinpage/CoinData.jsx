import { useState, useEffect, useRef } from 'react';
import './coindata.css';
import {useParams} from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../UserContext';
import axios from 'axios';
import { Chart, Line } from 'react-chartjs-2';
import chartDays from './Data';
// import Chart from 'chart.js/auto';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    elements
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const CoinData = () => {



    const [ coinData, setCoinData ] = useState([]);
    const [ flag, setFlag ] = useState(true);
    const [ days, setDays ] = useState(1);
    const { currency }  = useContext(DataContext);
    const { id } = useParams();

    const chartLabels = coinData.length !== 0 && coinData.map((coin) => {
        let date = new Date(coin[0]);
        // console.log(date);
        let time = date.getHours() > 12
            ? `${date.getHours() - 12}:${date.getMinutes()} PM`
            : `${date.getHours()}:${date.getMinutes()} AM`;
        return days === 1 ? time : date.toLocaleDateString();
    })

    // console.log(coinData.map((coin) => coin[1]));



    const lineData = {
        labels: chartLabels,
        datasets: [
            {
                labels: `Price ( Past ${days} Days ) in ${currency}`,
                data: coinData.map((coin) => coin[1]),
                borderColor: "#EEBC1D",
                pointBorderColor: 'aqua',
                // backgroundColor: 'aqua',
            }
        ]
    }

    const options = {
        plugins: {
            legend: true
        },
        elements:{
            point: {
                radius: 2.5,
            }
        }
        // scales: {
        //     y:{
        //         min: , 
        //         max: 6
        //     }
        // }
    }


    // console.log(currency, days);



    const coinApi = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

    
    const FetchApi = async () => {
        try {
            const response = await axios.get(coinApi);
            setCoinData(response.data.prices);
            // console.l,og(response.data.prices);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    useEffect(() => {
        FetchApi();
    },[coinApi])

    // console.log(coinData);


    const setButton = (index, value) => {
        setDays(value);
    }





    return(              
        <div className='right-content'>
            <Line
                style={{ width: '100%' }}
                data={lineData}
                options={options}
            ></Line>

            <div className='btns'>
                {
                    chartDays.map((item, index) => {
                        console.log(item.label)
                        return(
                            <button key={item.value} onClick={() => setButton(index, item.value)} flag = { item.value === days } style={{ backgroundColor: flag ? 'gold' : '', border: !flag ? 'gold' : '' }}  >{item.label}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CoinData;


