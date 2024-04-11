import { useEffect, useState } from 'react';
import './coindata.css';
import { useContext } from 'react';
import { DataContext } from '../UserContext';
import { Pagination } from '@mui/lab';

const CoinData = (props) => {

    const data = props.search;
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)


    const { data2, setData2, currency } = useContext(DataContext);
    console.log(data2);


    return (
        <>
            <table>
                <tr className='heading'>
                    <th className='th'>Coin</th>
                    <th>Price</th>
                    <th>24h Change</th>
                    <th>Market Cap</th>
                </tr>

                {
                    data2.slice((page - 1) * 10, (page - 1) * 10 + 10)
                        .map((item) => {
                            return (
                                <tr>
                                    <td className='td'>
                                        <img src={item.image}></img>
                                        <div className='td1'>
                                            <strong>{(item.symbol).toUpperCase()}</strong>
                                            <span>{item.name}</span>
                                        </div>
                                    </td>
                                    <td>{currency === 'INR' ? '₹ ' : '$ '}{item.current_price}</td>
                                    <td style={{ color: item.ath_change_percentage > 0 ? 'lightgreen' : 'red' }}>{item.ath_change_percentage.toFixed(2)} %</td>
                                    <td>{currency === 'INR' ? '₹ ' : '$ '}{(item.market_cap).toString().slice(0, -6)} M</td>
                                </tr>
                            )
                        })
                }

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
            />
        </>
    )
}

export default CoinData;