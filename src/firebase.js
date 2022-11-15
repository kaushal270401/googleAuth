import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider ,signInWithPopup} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDvbZwaiF2Sx-w1ZP-P_k0ch-LLKthrgXg",
  authDomain: "fir-auth-f6632.firebaseapp.com",
  projectId: "fir-auth-f6632",
  storageBucket: "fir-auth-f6632.appspot.com",
  messagingSenderId: "410276068379",
  appId: "1:410276068379:web:c6b39d3c64b6f002808cbe",
  measurementId: "G-XXYM3LK9W0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)

const provider=new GoogleAuthProvider()

export function signIn(){
    signInWithPopup(auth,provider).then((result)=>{
        const name=result.user.displayName
        const email=result.user.email
        const profilepic=result.user.photoURL

        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("image",profilepic)

    }).catch(error=>{
        console.log(error)
    })
}