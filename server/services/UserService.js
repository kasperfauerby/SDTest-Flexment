function passwordLength(password) {
    let check;

    if(password.length >= 6 || password.length <= 32){
        check = true;
    } else {
        check = false;
    }
    return check;
}

function nameLength(name) {
    let check;

    if(name.length >= 2){
        check = true;
    } else {
        check = false;
    }
    return check;
}