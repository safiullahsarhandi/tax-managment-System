<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

    <title>{{ config('app.name') }}</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ url('public/css/main.css') }}">
    <link rel="stylesheet" href="{{ url('public/css/vuesax.css') }}">
    <link rel="stylesheet" href="{{ url('public/css/iconfont.css') }}">
    <link rel="stylesheet" href="{{ url('public/css/material-icons/material-icons.css') }}">
    <link rel="stylesheet" href="{{ url('public/css/prism-tomorrow.css') }}">
    <link rel="stylesheet" href="{{ url('public/css/app.css') }}">
  </head>
  <body>
    <noscript>
      <strong>We're sorry but Vuesax - Vuejs Admin Dashboard Template doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
    </div>

    <!-- <script src="js/app.js"></script> -->
    <script src="{{ url('public/js/app.js') }}"></script>

  </body>
</html>
