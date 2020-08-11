const asideBar = document.getElementById('aside-bar');

const addList = document.getElementById('add-list');

addList.addEventListener('submit', (e) =>{
    e.preventDefault();
    let listName = addList.listName.value;
    firestore.collection(user+'.worklist').doc(listName).set({
        name: listName
    }).then(()=>{
        asideBar.innerHTML += `<li><a href="#">${listName}</a></li>`;
        addList.listName.value = '';

    }).catch((err)=>{
        console.log(err);
    })


})

firestore.collection(user+'.worklist').get().then(snapshot =>{
    snapshot.forEach(data =>{
        asideBar.innerHTML += `<li><a href="#">${data.id}</a></li>`;
        
    })
})