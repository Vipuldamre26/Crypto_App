import './header.css';
import { useContext } from 'react';
import { DataContext } from './UserContext';

const Header = () => {

    const { currency, setCurrency } = useContext(DataContext);

    const changeCurrency = (value) => {
        setCurrency(value);
    }


    return (
        <div className='header'>
            <div className='header-content'>
                <div className='logo'>Crypto Info</div>
                <div className='option'>
                    <select onChange={(e) => changeCurrency(e.target.value)}>
                        <option>INR</option>
                        <option>USD</option>
                    </select>
                    <button>LOGIN</button>
                </div>
            </div>


        </div>
    )
}

export default Header;