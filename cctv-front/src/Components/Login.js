import '../Styles/Login.css';
import Dashbord from './Dashboard';
import React from 'react';

const Login = () => {

   const [isLogged, setIsLogged] = React.useState(false);

    function submited(e) {
        e.preventDefault();
        console.log('SUBMITTED');
        setIsLogged(true);
        console.log(isLogged);
    }

    return (
        <form onSubmit={submited}>
            <div>
                <label>
                    <input type="text" name="username" placeholder='Identifiant'/>
                </label>
            </div>
            <div>
                <label>
                    <input type="password" name="password" placeholder='Mot de passe'/>
                </label>
            </div>
            <div className='center'>
                <input className='submit' type="submit" value="Connexion" />
            </div>
        </form>
    )
};

export default Login;