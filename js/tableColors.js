
function change(select) {
    var eStatus = select
    if(eStatus.value == 'Missing files'){
        eStatus.style = 'background-color: #e63946; color: #fff;'
        console.log("miss");
    }else if(eStatus.value == 'Working on it'){
        eStatus.style = 'background-color: #ff9f1c; color: #fff;'
    }else if(eStatus.value == 'Done'){
        eStatus.style = 'background-color: #0ead69; color: #fff;'
    } else {
        eStatus.style = 'background-color: white; color: black;'
    }
}


function upload(select) {
    var eUpload = select;
    if(eUpload.value == 'Not yet'){
        eUpload.style = 'background-color: #e63946; color: #fff;'
    }else if(eUpload.value == 'Uploaded'){
        eUpload.style = 'background-color: #0582ca; color: #fff;'
    }
}

