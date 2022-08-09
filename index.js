function myfun() {
    var email = document.getElementById('email').value;
    var pattern = /^[A-Za-z._]+@([A-Za-z.]+\.)+[A-Za-z.]{2,4}$/;

    if (pattern.test(email)) {
        document.getElementById('valid').innerHTML = "validate";
    } else {
        document.getElementById('valid').innerHTML = "Not validate";

    }


    var num = document.getElementById('num').value;
    var numpat = /^[0-9]{10}$/;

    if (numpat.test(num)) {
        document.getElementById('val').innerHTML = "validate";
    } else {
        document.getElementById('val').innerHTML = "Not validate";



    }
    var vali = document.getElementById('vali');
    var date = document.getElementById('date');

    var today = new Date();
    var birthDate = new Date(date.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;

    }
    if (age >= 18) {
        vali.innerHTML = "VALID";
    } else {
        vali.innerHTML = "not valid";
    }
    return false;
}