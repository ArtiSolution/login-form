<script>
    import {onMount} from "svelte";
    import {auth} from "$lib/firebase/firebase.client.js";
    import {authStore} from "../stores/authStore.js";
    import LoginForm from "../components/LoginForm.svelte";

    onMount(()=> {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user)
            authStore.update((curr) => {
                return {...curr, isLoading: false, currentUser:user}
            })
        })
    })
</script>
<main>

<slot></slot>
</main>

