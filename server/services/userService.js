export function passwordCharConstrain(password) {
    let flag;

    if(password.length < 6 || password.length > 32){
        flag = false;
    } else {
        flag = true;
    }

    return flag;
}

export function nameCharConstrain(name) {
    let flag;

    if(name.length < 2){
        flag = false;
    } else {
        flag = true;
    }
    return flag;
}