
    const loginValidation = () => {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let isFormValid = true;

    if (username === "" || password === "") {
        isFormValid = false;
    alert("Please enter your username and password.");
    }else{
        isFormValid = true;
    }



    return isFormValid;
}


