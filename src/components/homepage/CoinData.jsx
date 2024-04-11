import { useEffect, useState } from 'react';
import './coindata.css';
import { useContext } from 'react';
import { DataContext } from '../UserContext';
import { Pagination } from '@mui/lab';
import { useNavigate } from 'react-router-dom';

const CoinData = ({ search }) => {

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const { data2, currency } = useContext(DataContext);
    // console.log(data);
    // console.log(search);

    // ************************************************************************


    useEffect(() => {
        filterData();
        if (search === '') {
            setData(data2);
        }
        else {
            setData(filterData());
        }
        // console.log(search);
    }, [search])

    // console.log(data);
    // ************************************************************************



    const filterData = () => {
        let newData = [...data2];
        console.log(newData);
        // console.log(newData);
        let filterdData = newData.filter((item) => {
            // console.log(item.name.toLowerCase().includes(search.toString()));
            return item.name.toLowerCase().includes(search.toString())
        });
        // console.log(filterdData);
        return filterdData;
    }

    // ************************************************************************



    return (
        <div className='table'>
            <table>
                <thead>
                    <tr className='heading'>
                        <th className='th'>Coin</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Market Cap</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        !data ? <p>Loading...</p> : data?.slice((page - 1) * 10, (page - 1) * 10 + 10)
                            .map((item) => {
                                return (
                                    <tr key={item.id} onClick={() => navigate(`./coin/${item.id}`)}>
                                        <td className='td'>
                                            <img src={item.image}></img>
                                            <div className='td1'>
                                                <strong>{(item.symbol).toUpperCase()}</strong>
                                                <span>{item.name}</span>
                                            </div>
                                        </td>
                                        <td>{currency === 'INR' ? '₹ ' : '$ '}{item.current_price}</td>
                                        <td style={{ color: item.price_change_percentage_24h > 0 ? 'lightgreen' : 'red' }}>{item.price_change_percentage_24h > 0 ? '+' : ''}{item.price_change_percentage_24h.toFixed(2)} %</td>
                                        <td>{currency === 'INR' ? '₹ ' : '$ '}{(item.market_cap).toString().slice(0, -6)} M</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>

            </table>
            <Pagination
                style={{
                    padding: 20,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'white'

                }}
                count={(data2?.length / 10).toFixed(0)}
                color="primary"

                onChange={(_, value) => {
                    console.log(value);
                    setPage(value);
                    window.scroll(0, 450);
                }}
            />
        </div>
    )
}

export default CoinData;