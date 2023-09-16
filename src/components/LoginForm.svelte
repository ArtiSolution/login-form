<script>
    import {authHandlers, authStore} from "../stores/authStore.js";
    import {goto} from "$app/navigation";

    let password = '';
    let email = '';
    $: error = '';
    authHandlers.logout()

    async function handleSubmit() {
        if (!email || !password){
            error = 'Bitte E-Mail und Passwort eingeben!'
        }else{
            try {
                await authHandlers.login(email, password)
            }catch (err) {
                switch (err.code) {
                    case "auth/invalid-email":
                        error="E-Mail Adresse nicht korrekt."
                    case "auth/invalid-login-credentials":
                        error="Benutzer und Passwort passen nicht zusammen!"
                }
            }
        }
        if ($authStore.currentUser){
            goto("/profile")
        }
    }

    function onkeydown(e)
    {
        let pressed = e.key
        if (pressed=="Enter") {
            handleSubmit()
        }
    }


</script>

<div class="loginForm">
    <form style="width: 23rem;">

        <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Anmelden</h3>

        <div class="form-outline mb-4">
            <input on:keydown="{onkeydown}" bind:value="{email}" type="email" id="form2Example18" class="form-control form-control-lg" />
            <label class="form-label" for="form2Example18">E-Mail Adresse</label>
        </div>

        <div class="form-outline mb-4">
            <input on:keydown="{onkeydown}" bind:value="{password}" type="password" id="form2Example28" class="form-control form-control-lg" />
            <label class="form-label" for="form2Example28">Passwort</label>
        </div>

        <div class="pt-1 mb-4">
            <button class="btn btn-info btn-lg btn-block" type="button" on:click="{handleSubmit}" >Login</button>
        </div>

        {#if (error!='')}
            <div class="alert alert-danger">{error}</div>
        {/if}

    </form>
</div>

<style>
    .btn{
        width: 100%;
        color: #fff;
        box-shadow: 0 4px 9px -4px #54b4d3;
        background-color: #54b4d3;
        border: none;
        transition: background-color 1s;
    }
    .btn:hover{
        background-color: #50abc8;
    }
</style>