import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const DataContext = createContext();

const UserContext = ({ children }) => {



    const [ data1, setData1 ] = useState([]);
    const [ data2, setData2 ] = useState([]);
    const [ currency, setCurrency ] = useState('INR');
    const [ user, setUser ] = useState(null);


    let api1 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

    let api2 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

    

    const FetchApi1 = async () => {
        let data1 = await axios.get(api1);
        setData1([...data1.data]);
    }
    

    const FetchApi2 = async () => {
        let data2 = await axios.get(api2);
        setData2([...data2.data]);
    }


    useEffect(() => {
        FetchApi1();
        FetchApi2();
    },[currency])



    
    return (
        <DataContext.Provider value={ { data1, setData1, data2, setData2, currency, setCurrency } }>
            {children}
        </DataContext.Provider>
    )
}

export default UserContext;
