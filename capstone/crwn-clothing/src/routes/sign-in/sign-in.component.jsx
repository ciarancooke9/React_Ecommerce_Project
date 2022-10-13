import { sinInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleuser = async () => {
        const {user} = await sinInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
           <h1>Sign In</h1>
           <button onClick={logGoogleuser}>Sign-in with Google</button>
        </div>
    );
};

export default SignIn;