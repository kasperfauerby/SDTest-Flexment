export function calculateStartIndex(pageLimit, page){
    return (Number(page) - 1) * pageLimit;
}

/*
export function addToLikeArray(array, userId){


    if(index === -1){
        array.push(userId);
    } else {
        array = array.filter((id) => id !== String(userId));
    }
}

const index = task.likes.findIndex((id) => id === String(req.userId));

if(index === -1){
    task.likes.push(req.userId);
} else {
    task.likes = task.likes.filter((id) => id !== String(req.userId));
}*/

export function convertStringToArray(string) {
    return string.split(", ");
}
