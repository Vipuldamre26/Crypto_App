import { useEffect, useRef, useState } from 'react';
import './homecontent.css';
import { useContext } from 'react';
import { DataContext } from '../UserContext';
import CoinTable from './CoinTable';

const HomeContent = () => {

    const ref = useRef('');
    const [ search, setSearch ] = useState('');

    const { data2, setData2 } = useContext(DataContext);


    // ************************************************************************

    
    const getSearch = () => {
        setSearch(ref.current.value);
    }
    
    // console.log(data);

    // ************************************************************************


    return (
        <div className='homecontent'>
            <div className='home-main'>
                <strong>Cryptocurrency Prices by Market Cap</strong>
                <input onChange={getSearch} ref={ref}  type='text' placeholder='Search For a Crypto Currency'></input>
                <CoinTable search={search} />
            </div>
        </div>
    )
}

export default HomeContent;