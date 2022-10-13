import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { sinInWithGooglePopup, createUserDocumentFromAuth, sinInWithGoogleRedirect, auth, } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const redirectFunction = async () => {
        const response = await getRedirectResult(auth);
        if( response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    };

    useEffect(() => {
        redirectFunction();
        console.log('rdirect triggered');
    }, []);

    const logGoogleUser = async () => {
        const {user} = await sinInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const logGoogleRedirectUser = async () => {
        const {user} = await sinInWithGoogleRedirect();
        console.log({ user });
    }

    return (
        <div>
           <h1>Sign In</h1>
           <button onClick={logGoogleUser}>Sign-in with Google</button>
           <button onClick={logGoogleRedirectUser}>Sign-in with Google Redirect</button>
           <SignUpForm />
        </div>
    );
};

export default SignIn;