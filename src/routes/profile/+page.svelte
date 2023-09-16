<script>
    import {auth} from "$lib/firebase/firebase.client.js";
    import {authStore} from "../../stores/authStore.js";

    let email

    authStore.subscribe((curr) =>{
        console.log('CURR',curr)
        email = curr?.currentUser?.email
    })

</script>


<section style="background-color: #eee; width: 100%; height: 100vh; text-align: center; display:flex;align-items: center;
  justify-content: center;">
    {#if ($authStore.currentUser)}
    <div class="container py-5">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                    </ol>
                </nav>

            </div>
        </div>

        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                             class="rounded-circle img-fluid" style="width: 150px;">
                        <h5 class="my-3">Peter Hoffmeister</h5>
                        <p class="text-muted mb-1">Full Stack Developer</p>
                        <p class="text-muted mb-4">Friedensstraße 15, 37339 Ecklingerode</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">E-Mail</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/">Abmelden</a>
            </div>

        </div>

    </div>

    {:else }
        <div >
            <h1>... Sie sind nicht angemeldet! ...</h1>
            <p style="text-align: center"><a href="/">Zurück zum Login</a></p>
        </div>
    {/if}
</section>