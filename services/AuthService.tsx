import { auth } from "../lib/firebase.config";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, UserCredential } from "firebase/auth";

interface AuthService {
    createUser: (email: string, password: string) => void;
    login: (email: string, password: string) => Promise<UserCredential>;
    logout: () => void;
    loginWithGoogle: () => Promise<UserCredential>;
}

export const AuthService: AuthService = {
    createUser: async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    },
    login: (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    },
    loginWithGoogle: () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    },
    logout: async () => await signOut(auth)
}