import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from '../firebase/firebase.init'

initializeAuth();

const useFirebase = () => {

    const [user, setUser] = useState(null);

    const [error, setError] = useState('')

    const auth = getAuth();

    const signInUsingGoogle = () => {

        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message)
            })
    }

    const signInUsingGithub = () => {

        const githubProvider = new GithubAuthProvider();

        return signInWithPopup(auth, githubProvider)
            .catch(error => {
                setError(error.message)
            })
    }

    const createUser = (data) => {

        const email = data.email
        const password = data.password;

        return createUserWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setError(error.message)
            })
    }

    const passwordAuth = ({ email, password }) => {

        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                setError(error.message)
            });
    }

    const logout = () => {

        signOut(auth)
            .then(result => {
                console.log('sign out successful')
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
        createUser,
        signInUsingGoogle,
        signInUsingGithub,
        passwordAuth,
        logout
    }
};

export default useFirebase;