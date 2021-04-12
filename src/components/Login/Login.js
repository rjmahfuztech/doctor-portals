import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signInUser = {
                    name: displayName,
                    email
                }
                setLoggedInUser(signInUser);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Continue with google</button>
        </div>
    );
};

export default Login;