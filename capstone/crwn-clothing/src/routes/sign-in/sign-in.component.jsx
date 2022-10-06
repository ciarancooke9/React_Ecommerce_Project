import { sinInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleuser = async () => {
        const response = await sinInWithGooglePopup();
        console.log(response);
    }

    return (
        <div>
           <h1>Sign In</h1>
           <button onClick={logGoogleuser}>Sign-in with Google</button>
        </div>
    );
};

export default SignIn;