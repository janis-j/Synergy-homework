<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <!-- Styles -->
        <style>

        </style>

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
            .b-example-divider {
            height: 3rem;
            background-color: rgba(0, 0, 0, .1);
            border: solid rgba(0, 0, 0, .15);
            border-width: 1px 0;
            box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
            }

            .form-control-dark {
            color: #fff;
            background-color: var(--bs-dark);
            border-color: var(--bs-gray);
            }
            .form-control-dark:focus {
            color: #fff;
            background-color: var(--bs-dark);
            border-color: #fff;
            box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
            }

            .bi {
            vertical-align: -.125em;
            fill: currentColor;
            }

            .text-small {
            font-size: 85%;
            }

            .dropdown-toggle {
            outline: 0;
            }

        </style>
    </head>
    <body>
        <h1>This is React</h1>
        <div id="app">
        </div>
    </body>

    <footer>
        <!-- common scripts -->
        <script src="{{mix('js/app.js')}}"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </footer>
</html>
