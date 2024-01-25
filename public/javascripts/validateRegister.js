
    const registerValidation = () => {
    const NameRegex = /^[a-zA-Z]{3,20}$/;
    const DateOfBirthRegex = /^\d{4}-\d{2}-\d{2}$/;
    const UsernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PasswordRegex = /.{6,}$/;

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let isFormValid = true;

    if (
    firstName === "" ||
    lastName === "" ||
    dateOfBirth === "" ||
    username === "" ||
    email === "" ||
    password === ""
    ) {
    alert("Please fill in all the fields.");
    isFormValid = false;
} else if (!firstName.match(NameRegex) || !lastName.match(NameRegex)) {
    alert("Please enter valid first and last names (letters, 3-20 characters).");
    isFormValid = false;
} else if (!dateOfBirth.match(DateOfBirthRegex)) {
    alert("Please enter a valid date of birth (YYYY-MM-DD format).");
    isFormValid = false;
} else if (!username.match(UsernameRegex)) {
    alert("Please enter a valid username (alphanumeric, 3-20 characters).");
    isFormValid = false;
} else if (!email.match(EmailRegex)) {
    alert("Please enter a valid email address.(example@examp.com)");
    isFormValid = false;
} else if (!password.match(PasswordRegex)) {
    alert("Please enter a valid password (at least 6 characters).");
    isFormValid = false;
}

    return isFormValid;
}
