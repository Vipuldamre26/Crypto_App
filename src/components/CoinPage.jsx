import { useEffect } from 'react';
import './coinpage.css';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const CoinPage = () => {

    const { id } = useParams();
    console.log(id);

    const coinApi = `https://api.coingecko.com/api/v3/coins/${id}`

    const FetchApi = async () => {
        let data = await axios.get(coinApi);
        console.log(data);
    }

    
    useEffect(() => {
        FetchApi();
    },[])


    return (
        <div>CoinPage</div>
    )
}

export default CoinPage;