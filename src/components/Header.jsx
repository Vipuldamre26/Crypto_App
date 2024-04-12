import './header.css';
import { useContext } from 'react';
import { DataContext } from './UserContext';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed up 
    //         const user = userCredential.user;
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // ..
    //     });



    const { currency, setCurrency } = useContext(DataContext);

    const changeCurrency = (value) => {
        setCurrency(value);
    }


    // const handleLogin = () => {
    //     return(
    //     <Modal>
    //         <ModalDialog>
    //             <ModalClose />
    //             <Typography>Modal title</Typography>
    //         </ModalDialog>
    //     </Modal>

    //     )
    // }


    return (
        <div className='header'>
            <div className='header-content'>
                <div style={{ cursor: 'pointer' }} className='logo' onClick={() => navigate('/')}>Crypto Info</div>
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