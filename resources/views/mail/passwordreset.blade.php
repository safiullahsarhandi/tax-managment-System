<h3> Hello! {{ $user->first_name }} {{ $user->last_name }}</h3>
<p>Our System has got password Reset Request for your account.</p>
<p>if request was not initiated by you please ignore this email and change your password immediately, please find out your password reset code right here : <strong>{{ $code }}</strong></p>
<br>
<strong>Email was Generated at {{ date('F jS Y h:i A') }}</strong>

<h4>Regards:</h4>
<h4>{{ config('app.name') }}</h4>
