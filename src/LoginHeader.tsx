import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';
import React, { useState } from 'react';
import logout from './images/logout.png';
import './LoginHeader.css';

type ProfileObj = {
    googleId: string;
    imageUrl: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string;
};

function LoginHeader() {
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? localStorage.getItem('loginData')
            : undefined
    );

    function loginFailed() {
        alert('[ Login failed ]');
    }

    async function loginSuccess(
        data: GoogleLoginResponse | GoogleLoginResponseOffline
    ) {
        if ('tokenId' in data) {
            setLoginData(JSON.stringify(data.profileObj));
            localStorage.setItem('loginData', JSON.stringify(data.profileObj));
            loggedIn();
        }
    }

    function loggedIn() {
        let itemObj: ProfileObj = JSON.parse(loginData as string);
        return (
            <>
                <h3>Welcome {itemObj.name}</h3>
                <img src={itemObj.imageUrl} width="60px" height="60px" />
                <a href="" onClick={handleLogout}>
                    <img src={logout} width="60px" height="60px" />
                </a>
            </>
        );
    }

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
    };

    return (
        <div className="loginHeaderMain">
            {loginData ? (
                loggedIn()
            ) : (
                <>
                    <GoogleLogin
                        className="loginButton"
                        clientId="643013230576-vttmopqtfrakm3f57dump5cqjem3g2bj.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onFailure={loginFailed}
                        onSuccess={loginSuccess}
                        cookiePolicy={'single_host_origin'}
                    ></GoogleLogin>
                </>
            )}
        </div>
    );
}

export default LoginHeader;
