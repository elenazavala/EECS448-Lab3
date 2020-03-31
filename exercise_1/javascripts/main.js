function passwordValidator()
{
    var passwrd1 = document.getElementById("pass1").value;
    var passwrd2 = document.getElementById("pass2").value;

    if(passwrd1.length<8)
    {
        alert("Passwords must be at least 8 characters long.");
    }else if( passwrd1 != passwrd2)
    {
        alert("Passwords must match with eachother.");

    }else if( passwrd1 == passwrd2)
    {
        alert("Success. Your password is valid.");
    }
}