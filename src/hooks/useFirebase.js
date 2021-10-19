import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from '../firebase/firebase.init'

initializeAuth();

const useFirebase = () => {

    const [user, setUser] = useState(null);

    const [error, setError] = useState('')

    const auth = getAuth();

    const signInUsingGoogle = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const signInUsingGithub = () => {

        const githubProvider = new GithubAuthProvider();

        signInWithPopup(auth, githubProvider)
            .then(result => {

                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {

        onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])


    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub
    }
};

export default useFirebase;