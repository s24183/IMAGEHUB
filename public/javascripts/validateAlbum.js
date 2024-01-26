


let addUpdateAlbumValidation = () => {
    const Alname = /^[a-zA-Z]{3,20}$/;
    const Address = /^https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9]+-[a-zA-Z0-9]+(\?.*)?$/;

    const album = document.getElementById("albumName").value;
    const address = document.getElementById("Address").value;

    let succeedForm = false;



    while(!succeedForm) {

        if (album === ""   || address === "") {
            alert("Please enter your information");
            succeedForm = false;

        } else if (!album.match(Alname)) {
            alert("Please only letter for album");
            succeedForm = false;
        } else if (!address.match(Address)) {
            alert("Please characters");
            succeedForm = false;
        } else {
            succeedForm = true;

        }
        return succeedForm;

    }

}


