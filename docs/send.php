<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Agencia Crash | Contacto</title>
    <link rel="icon" type="image/png" href="../assets/logo-light.svg">
    <link rel="preconect" href="https://cdn.jsdelivr.net/">
    <link rel="dns-prefetch" href="https://cdn.jsdelivr.net/">
    <link rel="preconect" href="https://unpkg.com/">
    <link rel="dns-prefetch" href="https://unpkg.com/">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="../styles/index.css">
    <link rel="stylesheet" href="../styles/contact.css">
    <link rel="stylesheet" href="../styles/tablet.css" media="screen and (min-width: 576px)">
    <link rel="stylesheet" href="../styles/desktop.css" media="screen and (min-width: 992px)">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>

<body id="page-top" class="hidden body">

    <div class="preloader-container" id="preloader">
        <div class="preloader-animation">
            <div class="loader"></div>
            <div class="loader2"></div>
        </div>
    </div>


    <!-- Header -->
    <header class="header" id="Header">
        <div id="nav-bar"></div>
        <div class="nav-bar bg-ac-blue">
            <div class="container">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <a href="../index.html">
                            <img loading="lazy" src="../assets/logo-light.svg" class="nav-bar-logo" alt="logo blanco agencia crash">
                            <p class="header__text-logo"> agencia crash</p>
                        </a>
                    </div>
                    <div class="col d-flex align-items-end">
                        <div class="container-red">
                            <button class="btn menu-btn" id="menu-btn">
                                <div class="menu-btn-ham1"></div>
                                <div class="menu-btn-ham2"></div>
                                <div class="menu-btn-ham3"></div>
                            </button>
                            <div class="wrapper" id="wrapper">
                                <div class="wrapper-header text-white">
                                </div>
                                <div class="nav-bar__header text-center">
                                    <p><a href="../index.html">HOLA
                                            <img loading="lazy" src="../assets/boat-icon.png" alt="icono de bote de papel">
                                        </a> ¿NAVEGAMOS? </p>
                                </div>
                                <div class="container h-50">
                                    <div class="col h-50">
                                        <ul class="nav-bar-menu-container">
                                            <li class="nav-bar-menu-link"><a href="./about.html" class="nav-bar-menu__link">Nosotras </a>
                                            </li>
                                            <li class="nav-bar-menu-link"><a href="./services.html" class="nav-bar-menu__link">Servicios
                                                </a></li>
                                            <li class="nav-bar-menu-link"><a href="./portfolio.html" class="nav-bar-menu__link">Trabajos </a>
                                            </li>
                                            <li class="nav-bar-menu-link"><a href="./contact.html" class="nav-bar-menu__link underline-blue">Contacto</a>
                                            </li>
                                            <li class="nav-bar-menu-link"><a href="./about.html#bonus" class="bonus" class="nav-bar-menu__link">Bonus ◊ © ± ¦</a>
                                            </li>
                                            <div class="nav-bar-menu__logo">
                                                <img loading="lazy" src="../assets/logo-azul-fem.svg" alt="logo-azul-fem">
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- /Header -->

    <section id="Contact-main">
        <div class="header-secondary-contact">
        </div>
        <div class="container pt-5 mb-5">
            <div class="row ">
                <div class="col-10 offset-1 col-md-5">
                    <h2 class="section-title">¡Bien! sos curiosx como nosotras</h2>
                    <p class="section-subtitle">Para conquistar el mundo digital trabajando juntxs, podemos empezar por conocernos. </p>
                    <p class="section-text">Contanos ¿En qué podemos ayudarte?</p>
                    <div class="mb-5 container-contact-media">
                        <img src="../assets/icons8-plane-65.png" alt="">
                    </div>
                </div>


                <div class="col-10 offset-1 col-md-5 ">
                    <h1>

                        <?php
                        if (isset($_POST["nombre"]) && isset($_POST["email"]) && isset($_POST["comentario"])) {
                            $to = "agenciacrashh@gmail.com";
                            $subject = "Mensaje Enviado";
                            $contenido .= "Nombre: " . $_POST["nombre"] . "\n";
                            $contenido .= "Email: " . $_POST["email"] . "\n\n";
                            $contenido .= "Comentario: " . $_POST["comentario"] . "\n\n";
                            $header = "From: info@agenciacrash.com\nReply-To:" . $_POST["email"] . "\n";
                            $header .= "Mime-Version: 1.0\n";
                            $header .= "Content-Type: text/plain";
                            if (mail($to, $subject, $contenido, $header)) {
                                echo "Tu mensaje ha sido enviado! Gracias por contactarnos! Te responderemos a la brevedad!";
                            } else {
                                echo "Ooops! Algo salió mal en el envío. Inténtalo nuevamente.";
                            }
                        }
                        ?> 
                    </h1>

                </div>
            </div>
        </div>
    </section>


    <!-- Footer -->
    <footer id="Footer" class="footer h-50 bg-ac-blue">
        <div class="container">
            <div class="row pt-5 d-flex align-items-center">
                <div
                    class="col-10 offset-1 col-md-4 d-flex align-items-center justify-content-md-start justify-content-center footer__border">
                    <h5 class="footer_title">Agencia Crash</h5>
                </div>
                <div class="col-10 offset-1 col-md-2 offset-md-0 d-flex justify-content-center align-items-center">
                    <a href="../index.html">
                        <img loading="lazy" class="logo-footer pb-2" src="../assets/logo-fem-light.png" alt="logo-fem-light">
                    </a>
                </div>
                <div
                    class="col-10 offset-1 col-md-4 offset-md-0 d-flex align-items-center justify-content-md-end justify-content-center footer__border">
                    <h6 class="footer_direction"><img loading="lazy" src="../assets/iconmedia/location.png" alt="icon-location">Buenos
                        Aires, Argentina</h6>
                </div>

                <div class="col-10 col-md-5 offset-1 p-0 d-flex align-items-center justify-content-center justify-content-md-start">
                    <h6 class="text-decoration-underline">#ContenidoEnMovimiento</h6>
                </div>
                <div class="col-10 col-md-5 offset-1 offset-md-0 p-0 d-flex align-items-center justify-content-center justify-content-md-end footer__icons">
                    <a href=""><img loading="lazy" src="../assets/iconmedia/icon-wp.png" alt="icon-whatsapp"></a>
                    <a href="https://www.linkedin.com/in/agencia-crash-460252212/"><img loading="lazy" src="../assets/iconmedia/icon-linkedin.png" alt="icon-linkedin"></a>
                    <a href="https://www.instagram.com/agenciacrash/"><img loading="lazy" src="../assets/iconmedia/icon-ig.png" alt="icon-ig"></a>
                    <a href="mailto:agenciacrashh@gmail.com"><img loading="lazy" src="../assets/iconmedia/icon-mail.png" alt="icon-mail"></a>

                </div>
            </div>
            <div class="row text-center">
                <p class="pt-4">Agencia Crash © 2021</p>
            </div>
        </div>
        </div>
    </footer>
    <!-- /Footer -->

    <script>
        var bodyPage = document.querySelector(".body")
        window.onload = function() {
            document.querySelector(".preloader-container").style.display = "none";
            bodyPage.classList.remove("hidden");
        };
    </script>
    <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script async src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <!--  -->
    <script async src="../js/index.js"></script>
</body>

</html>