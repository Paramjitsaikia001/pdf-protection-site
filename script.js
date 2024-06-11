function sendOTP() {
    const mobile = document.getElementById('mobile').value;
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible'
    });

    firebase.auth().signInWithPhoneNumber(mobile, appVerifier)
        .then(function (confirmationResult) {
            window.confirmationResult = confirmationResult;
            alert('OTP sent to ' + mobile);
            document.getElementById('otpSection').style.display = 'block';
        }).catch(function (error) {
            console.error('Error during signInWithPhoneNumber', error);
        });
}

function verifyOTP() {
    const otp = document.getElementById('otp').value;

    confirmationResult.confirm(otp).then(function (result) {
        const user = result.user;
        alert('OTP verified. Access granted.');
        // Redirect to PDF or display it
        window.location.href = '1.pdf'; // Restrict access via further JS logic
    }).catch(function (error) {
        console.error('Error during confirmationResult.confirm', error);
        alert('Invalid OTP');
    });
}
