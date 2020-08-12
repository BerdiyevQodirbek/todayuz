const asideBar = document.getElementById('aside-bar');

const addList = document.getElementById('add-list');

addList.addEventListener('submit', (e) =>{
    e.preventDefault();
    let listName = addList.listName.value;
    firestore.collection(user+'.worklist').doc(listName).set({
        name: listName
    }).then(()=>{
        asideBar.innerHTML += `<li><button>${listName}</button></li>`;
        addList.listName.value = '';

    }).catch((err)=>{
        console.log(err);
    })


})

firestore.collection(user+'.worklist').get().then(snapshot =>{
    snapshot.forEach(data =>{
<<<<<<< HEAD
        asideBar.innerHTML += `<li><a href="#">${data.id}</a></li>`;
        var mainSide = document.getElementsByClassName("main")[0];
=======
        asideBar.innerHTML += `<li><button class="listBtn">${data.id}</button><button class="dropdownBtn"><i class="ti-menu"></i></button></li>`;
>>>>>>> c4b78f9097c1ffee436f41c11f848911d2133c0f
        
    })
})



// log out

const logOut = document.getElementById('btn-log-out');

logOut.addEventListener('click', ()=>{
    let c = confirm('Do you really want to log out?');
    if(c){
        localStorage.clear();
        location.reload();
    }
    
})