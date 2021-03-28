function checkemail() {
    var email = document.getElementById('email').value;
    if (email != '') {
        window.location = 'verification.html';
    } else {
        document.getElementById('alert').innerHTML = 'Email is not associated with personal user account';
    }
}

function checkcode() {
    var code = document.getElementById('code').value;
    if (code != '') {
        window.location.href = 'new-password.html';
        return true;
    } else {
        alert('Please check your verification code!');
    }
}

function checkpw() {
    var pass1 = document.getElementById('password1').value;
    var pass2 = document.getElementById('password2').value;
    if (pass1 == pass2 && pass1 != '' && pass2 != '') {
        alert('change password success!');
        return true;
    } else {
        document.getElementById('alert').innerHTML = 'Your password is not recognize';
    }
}