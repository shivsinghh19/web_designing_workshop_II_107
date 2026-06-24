function getStarted() {
    let email = document.getElementById("email").value;

    if(email === ""){
        document.getElementById("message").innerHTML =
        "Please enter your email!";
    }
    else{
        document.getElementById("message").innerHTML =
        "Welcome to Netflix, " + email;
    }
}

document.getElementById("signin").addEventListener("click", function(){
    alert("Sign In Button Clicked!");
});