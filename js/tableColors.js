const eStatus = document.getElementById('eStatus');

eStatus.addEventListener('change', (e)=>{
    e.preventDefault();
    if(eStatus.value == 'Missing files'){
        eStatus.style = 'background-color: #e63946; color: #fff;'
    }else if(eStatus.value == 'Working on it'){
        eStatus.style = 'background-color: #ff9f1c; color: #fff;'
    }else if(eStatus.value == 'Done'){
        eStatus.style = 'background-color: #0ead69; color: #fff;'
    }
})

const eUpload = document.getElementById('eUpload');

eUpload.addEventListener('change', (e)=>{
    e.preventDefault();
    if(eUpload.value == 'Not yet'){
        eUpload.style = 'background-color: #e63946; color: #fff;'
    }else if(eUpload.value == 'Uploaded'){
        eUpload.style = 'background-color: #0582ca; color: #fff;'
    }
})

