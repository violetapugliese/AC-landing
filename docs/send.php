<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Agencia Crash | Contacto</title>
    <link rel="icon" type="image/png" href="./assets/logo-light.svg">
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
                            <img src="../assets/logo-light.svg" class="nav-bar-logo" alt="logo blanco agencia crash">
                            <p class="header__text-logo"> agencia crash</p>
                        </a>
                    </div>
                    <div class="col d-flex align-items-end">
                        <div class="container-red">
                            <button type="button" class="btn-dark-mode btn" id="darkMode">
                                <img src="../assets/darkMood.svg" width="24" alt="darkmood boton" class="img-dark-mode">
                            </button>
                            <button class="btn menu-btn" id="menu-btn">
                                <div class="menu-btn-ham1"></div>
                                <div class="menu-btn-ham2"></div>
                                <div class="menu-btn-ham3"></div>
                            </button>
                            <div class="wrapper" id="wrapper">
                                <div class="wrapper-header text-white">
                                </div>
                                <div class="nav-bar__header text-center">
                                    <p><a href="./index.html">HOLA
                                            <img src="../assets/boat-icon.png" alt="icono de bote de papel">
                                        </a> ¿NAVEGAMOS? </p>
                                </div>
                                <div class="container h-50">
                                    <div class="col h-50">
                                        <ul class="nav-bar-menu-container">
                                            <li class="nav-bar-menu-link"><a href="../index.html#About" class="nav-bar-menu__link">Nosotras </a>
                                            </li>
                                            <li class="nav-bar-menu-link"><a href="./services.html" class="nav-bar-menu__link">Servicios
                                                </a></li>
                                            <li class="nav-bar-menu-link"><a href="../index.html#Gallery" class="nav-bar-menu__link">Trabajos </a>
                                            </li>
                                            <li class="nav-bar-menu-link"><a href="./contact.html" class="nav-bar-menu__link">Contacto</a>
                                            </li>
                                            <li class="nav-bar-menu-link"><a href="../index.html" class="bonus" class="nav-bar-menu__link">Bonus ◊ © ± ¦</a>
                                            </li>
                                            <div class="nav-bar-menu__logo">
                                                <img src="../assets/logo-azul-fem.svg" alt="logo-azul-fem">
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
                            $to = "violeta.pugliese@gmail.com";
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
            <div class="row pt-4">
                <div class="col-10 text-center offset-1 ">
                    <a href="../index.html">
                        <img class="logo-footer pb-2" src="../assets/logo-light.svg" alt="logo agencia crash color claro">
                    </a>
                </div>
                <hr>
                <div class="col-10 offset-1 col-md-5 d-flex flex-column justify-content-center">
                    <p class="section-text mb-0">¿Te gustaría ser parte de Agencia Crash?</p>
                    <p class="section-text"><a href=""><span>Completá este formulario</span></a> para conocernos</p>
                </div>

                <div class="col-10 offset-1 col-md-5 d-flex align-items-center justify-content-center ">
                    <a href=""><img src="../assets/iconmedia/icons8-gmail-50.svg" alt="icon gmail"></a>
                    <a href=""><img src="../assets/iconmedia/icons8-linkedin-50.svg" alt="icon linkedin"></a>
                    <a href=""><img src="../assets/iconmedia/icons8-whatsapp-50.svg" alt="icon whatsapp"></a>
                </div>
            </div>
            <hr>
            <div class="row text-center">
                <p class="pt-4"> © Agencia Crash - 2021</p>
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
    <script async src="../js/index.js"></script>
    <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script async src="https://unpkg.com/aos@next/dist/aos.js"></script>
</body>

</html>