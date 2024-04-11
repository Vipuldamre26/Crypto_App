import { useRef, useState } from 'react';
import CoinData from './CoinData';
import './homecontent.css';

const HomeContent = () => {

    const ref = useRef('');
    const [ search, setSearch ] = useState('');


    const getSearch = () => {
        setSearch(ref.current.value);
    }


    return (
        <div className='homecontent'>
            <div className='home-main'>
                <strong>Cryptocurrency Prices by Market Cap</strong>
                <input onChange={getSearch} ref={ref}  type='text' placeholder='Search For a Crypto Currency'></input>
                <CoinData search={search} />
            </div>
        </div>
    )
}

export default HomeContent;