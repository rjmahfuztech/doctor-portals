import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import loginBg from '../../images/loginBg.png';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = {
                    name: displayName,
                    email
                }
                setLoggedInUser(signInUser);
                setVerifyToken();
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }

    const setVerifyToken = () => {
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function(error) {
            console.log(error);
          });
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="row w-75">
                <div className="col-md-5 pt-5 pb-5">
                    <button onClick={handleGoogleSignIn}>Continue with google</button>
                </div>
                <div className="col-md-7">
                    <img src={loginBg} className="w-100 image-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;