const asideBar = document.getElementById('aside-bar');
const addList = document.getElementById('add-list');

// add list to firebase 

addList.addEventListener('submit', (e) =>{
    e.preventDefault();
    let listName = addList.listName.value;
    firestore.collection(user+'.worklist').doc(listName).set({
        name: listName
    }).then(()=>{
        asideBar.innerHTML += `<li><button onclick="checkTable(this)" class="listBtn">${listName}</button><button onclick="deleteList(this)" data-id="${listName}" class="dropdownBtn"><i class="ti-menu"></i></button></li>`;
        addList.listName.value = '';
        firestore.collection("users").doc(user)
        .get().then(item => {
            var u = item.data();
            var mainSide = document.getElementsByClassName("main")[0];
            mainSide.innerHTML = `<div class="top-user-info" id="createTable">
            <h1>${u.compName}</h1>
            <fieldset>
            <legend>${listName}</legend>
            </fieldset>
        </div>
        <div class="preset form-group">
            <select onchange="selectStudio()" id="presetSelect" class="form-control">
                <option hidden>Select your preset</option>
                <option>Video Studio</option>
                <option>Web Developer</option>
            </select>
            <button onclick="createTable(this)" data-id="${listName}" class="btn btn-primary" id="create-table">Create</button>


        </div>
        <div id="preset-show" class="preset-show">
           
        </div>`;
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
    })


})

// put sidelist in reload

firestore.collection(user+'.worklist').get().then(snapshot =>{
    snapshot.forEach(data =>{
        asideBar.innerHTML += `<li><button onclick="checkTable(this)" class="listBtn">${data.id}</button><button onclick="deleteList(this)" data-id="${data.id}" class="dropdownBtn"><i class="ti-menu"></i></button></li>`;
         
    })
})

// delete clicked list

function deleteList(elem) {
    var list = elem.dataset.id;
    var li = elem.closest("li");
    var conf = confirm('Do you really want to delete "' + list + '" ?')
    if (conf) {
        firestore.collection(user + '.worklist').doc(list).delete()
        .then(() => {
            console.log(list + " list deleted");
            li.remove()
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

// log out

const logOut = document.getElementById('btn-log-out');

logOut.addEventListener('click', ()=>{
    let c = confirm('Do you really want to log out?');
    if(c){
        localStorage.clear();
        location.reload();
    }
    
})