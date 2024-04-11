import { useEffect, useState } from 'react';
import './coinpage.css';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from './UserContext';

const CoinPage = () => {

    const [ coin, setCoin ] = useState();
    const { currency } = useContext(DataContext);
    console.log(currency);

    const { id } = useParams();
    console.log(id);

    const coinApi = `https://api.coingecko.com/api/v3/coins/${id}`

    const FetchApi = async () => {
        let data = await axios.get(coinApi);
        console.log(data.data);
        setCoin(data.data)
    }

    
    useEffect(() => {
        FetchApi();
    },[])


    return (
        <div className='coinpage'>
            <div className='left-content'>
                <img src={coin?.image.large}></img>
                <strong>{coin?.name}</strong>
                <p>{coin?.description.en.split('. ')[0]}.</p>
                <span>Rank: {coin?.market_cap_rank}</span>
                <span>Current Price: <strong>{currency === 'INR' ? '₹ ' : '$ '} {coin?.market_data.current_price[(currency.toLowerCase())]}</strong></span>
                <span>Market Cap: <strong> {currency === 'INR' ? '₹ ' : '$ '} {coin?.market_data.market_cap[(currency.toLowerCase())].toString().slice(0, -6)} M</strong></span>
            </div>
            <div className='right-content'></div>
        </div>
    )
}

export default CoinPage;