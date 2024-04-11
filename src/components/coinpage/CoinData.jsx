import { useState, useEffect } from 'react';
import './coindata.css';
import {useParams} from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../UserContext';
import axios from 'axios';

const CoinData = () => {


    const [ coinData, setCoinData ] = useState();
    const [ days, setDays ] = useState(1);
    const { currency }  = useContext(DataContext);
    const { id } = useParams();
    console.log(currency, days);

    const coinApi = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

    
    const FetchApi = async () => {
        let data = await axios.get(coinApi);
        console.log(data);
        setCoinData(data.data.prices)
        console.log(coinData);
    }

    
    useEffect(() => {
        FetchApi();
    },[])

    return(
        <div className='right-content'>

        </div>
    )
}

export default CoinData;