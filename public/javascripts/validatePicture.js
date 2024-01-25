let addUpdatePictureValidation = () => {
    const Address = /^https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9]+-[a-zA-Z0-9]+(\?.*)?$/;
    const name = /^[a-zA-Z]{3,20}$/;

    const picture = document.getElementById("PictureName").value;
    const address = document.getElementById("Address").value;

    let succeedForm = false;



    while(!succeedForm) {

        if (picture === ""   || address === "") {
            alert("Please enter your information");
            succeedForm = false;

        } else if (!picture.match(name)) {
            alert("Please only letter for album");
            succeedForm = false;
        }else if (!address.match(Address)) {
            alert("Please enter an image address");
            succeedForm = false;
        } else {
            succeedForm = true;

        }
        return succeedForm;

    }

}




