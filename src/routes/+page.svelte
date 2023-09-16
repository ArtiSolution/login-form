<script>
import LoginForm from "../components/LoginForm.svelte";
</script>

<section class="vh-100">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6 text-black">

                <div class="px-5 ms-xl-4 mt-5">
                    <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
                    <span class="h1 fw-bold mb-0"><img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png" width="200px"></span>
                </div>

                <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-2 pt-xl-0 mt-xl-n2">
                    <LoginForm></LoginForm>
                </div>

            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block">
                <img src="https://cdn.pixabay.com/photo/2022/10/08/04/20/computer-7506234_1280.jpg"
                     alt="Login image" class="w-100 vh-100 bg-image-vertical" style="object-fit: cover; object-position: left;">
            </div>
        </div>
    </div>
</section>

<style>
    .bg-image-vertical {
        position: relative;
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: right center;
        background-size: auto 100%;
    }
    @media (min-width: 1025px) {
        .h-custom-2 {
            height: 100%;
        }
    }
</style>