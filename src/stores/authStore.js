import {writable} from "svelte/store";
import {auth} from "$lib/firebase/firebase.client.js";
import {signInWithEmailAndPassword,signOut,sendPasswordResetEmail,updateEmail,updatePassword} from "firebase/auth"
import {async} from "rxjs";

export const authStore = writable({
    isLoading: true,
    currentUser: null
})

export const authHandlers = {
    login: async (email, password) => {
        await signInWithEmailAndPassword(auth,email,password)
    },
    logout: async () => {
        await signOut(auth)
    },
}