<!doctype html>
<html lang="de">
<head>
    <title>MatheRechner</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/styles.css" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="assets/rechner.jpg" />
    </head>

  <body id="page-top">
       <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div class="container px-4">
            <a class="navbar-brand" href="#page-top">Rechner</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#Rechner">Rechner</a></li>
                    <!--<li class="nav-item"><a class="nav-link" href="#about">Theorie</a></li>-->
                    <li class="nav-item"><a class="nav-link" href="#Pythagoras">Pythagoras</a></li>
                    <li class="nav-item"><a class="nav-link" href="#Sinus">Sinus</a></li>
                    <li class="nav-item"><a class="nav-link" href="#Cosinus">Cosinus</a></li>
                    <li class="nav-item"><a class="nav-link" href="#Tangenssatz">Tangenssatz</a></li>
                </ul>
            </div>
        </div>
    </nav>
     <!-- Header-->
    <header class="bg-primary bg-gradient text-white">
        <div class="container px-4 text-center">
            <h1 class="fw-bolder">Der Rechner</h1>
            <p class="lead">Das, wobei unsere Berechnungen versagen, nennen wir Zufall.<br> -Albert Einstein</p>
            <!--      <a class="btn btn-lg btn-light" href="#about">Start scrolling!</a>-->
        </div>
    </header>
    <section id="Rechner">
        <h2>Rechner</h2>
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8">
                    <form action ="calc.process1.php" method ="POST">
                        <lable>Wählen Sie aus, was Sie berechnen möchten: </lable>
                            <select name = "dropdown">
                                <option></option>
                                <option value = "Addition">Addition</option>
                                <option value = "Pythagoras">Pythagoras</option>
                                <option value = "Sinus">Sinus</option>
                                <option value = "Cosinus">Kosinus</option>
                                <option value = "Tangenssatz">Tangenssatz</option>
                            </select><br><br>

                                Seite a: <input type ="number" name = "sideA" ><br><br>
                                Seite b/Ankathete: <input type ="number" name = "sideB" ><br><br>
                                Seite c: <input type ="number" name = "sideC" ><br><br>

                                Sinus: <input type ="number" name = "sinus" ><br><br>
                                Cosinus: <input type ="number" name = "cosinus" ><br><br>
                                        <input type ="submit" value = "berechnen"/>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Pythagoras-->
    <section id="Pythagoras">
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8">
                    <h2>Pythagoras</h2>
                    <p class="lead">Der Satz des Pythagoras erklärt den mathematischen Zusammenhang von den beiden
                        Katheten und der Hypotenuse in einem rechtwinkligen Dreieck.
                        <br> Die Definition beschreibt ihn wie
                        folgt:
                        <br> a² + b² = c²
                    </p>
                    <img src="assets/pythagoras.png" height="500px" width="500px">
                    <br>
                    <br>
                    <ul>
                        <li>c² = a² + b²</li>
                        <li>c = √a² + b² &#10149; c = √a² + b²</li>
                        <li>a² = c² - b² &#10149; a = √c² - b² </li>
                        <li>b² = c² - a² &#10149; c= √c² - a² </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- Sinus section-->
    <section id="Sinus">
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8">
                    <img src="assets/sincos.png" height="250px" width="600px">
                    <h2>Sinus</h2>
                    <p class="lead">Bei der Sinusfunktion wird dem Winkel im rechtwinkligen Dreieck das Verhältnis der
                        Gegenkathete zur Hypotenuse zugeordnet.<br>Das Verhältnis nennt man Sinuswert oder kurz Sinus.
                    </p>
                    <img src="assets/Sinus.jpg" height="300px" width="400px">
                    <ul>
                        <li>Es gilt:</li>
                        <li>Die Seite <b>b</b> ist die Ankathete zu .</li>
                        <li>Die Seite <b>a</b> ist die Gegenkathete zu .</li>
                        <li> Die Seiteb <b>c</b> ist die Hypotenuse.</li>
                    </ul>
                    <ul>
                        <li>sin(α)= Gegenkathete/Hypotenuse</li>
                    </ul>

                </div>
            </div>
        </div>
    </section>
     <!-- Cosinus section-->
     <section id="Cosinus">
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8">
                    <h2>Cosinus</h2>
                    <p class="lead">Mit dem Cosinus kannst du fehlende Winkel oder Seiten in einem rechtwinkligen
                        Dreieck bestimmen.<br>Dabei ist der Cosinus das Verhältnis zweier Seiten: der Ankathete und
                        Hypotenuse des Dreiecks.</p>
                    <ul>
                        <li>cos(α)= Ankathete/Hypotenuse</li>

                    </ul>

                </div>
            </div>
        </div>
    </section>
    <!-- Tangenssatz section-->
    <section id="Tangenssatz">
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8">
                    <h2>Tangenssatz</h2>
                    <p class="lead">In der Trigonometrie stellt der Tangenssatz eine
                        Beziehung zwischen den drei Seiten eines ebenen Dreiecks und dem Tangens der halben Summe bzw.
                        der halben
                        Differenz zweier Winkel des Dreiecks her.</p>
                    <ul>
                        <li>tan(α)=sin/cos</li>

                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container px-4">
            <p class="m-0 text-center text-white">Copyright &copy; Sinthella Anpalagan, Jaspreet Singh, Ryan Carpio &
                Arian Furrer, Daniel Widter 2021</p>
        </div>
    </footer>
    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="js/scripts.js"></script>
</body>
    </html>
