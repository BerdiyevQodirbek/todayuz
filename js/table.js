// studio preset field

function checkTable(elem) {
    var mainSide = document.getElementsByClassName("main")[0];
    var tableRef = firestore.collection("tables").doc(elem.innerText)
    tableRef.get().then(tables => {
        if (tables.data() != undefined) {
            firestore.collection("users").doc(user)
            .get().then(item => {
                var u = item.data();
                mainSide.innerHTML = `<div class="top-user-info" id="createTable">
                <h1>${u.compName}</h1>
                <fieldset>
                <legend>${elem.innerText}</legend>
                </fieldset>
            </div>
            <div class="preset form-group">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
            </div>
            <div id="preset-show" class="preset-show">
               
            </div>`;
            }).catch((err) => {
                console.log(err);
            })
        } else {
            firestore.collection("users").doc(user)
            .get().then(item => {
                var u = item.data();
                mainSide.innerHTML = `<div class="top-user-info" id="createTable">
                <h1>${u.compName}</h1>
                <fieldset>
                <legend>${elem.innerText}</legend>
                </fieldset>
            </div>
            <div class="preset form-group">
                <select onchange="selectStudio()" id="presetSelect" class="form-control">
                    <option hidden>Select your preset</option>
                    <option>Video Studio</option>
                    <option>Web Developer</option>
                </select>
                <button onclick="createTable()" class="btn btn-primary" id="create-table">Create</button>
    
    
            </div>
            <div id="preset-show" class="preset-show">
               
            </div>`;
            }).catch((err) => {
                console.log(err);
            })
        }
    }).catch((err) => {
        console.log(err);
    })

}



//add row Behruz

const addRow = document.getElementById('add-row');
const table = document.getElementById('table');
addRow.addEventListener('click', (e)=>{
  e.preventDefault();
  table.innerHTML += `
  <tr>
  <td><input type="text" class="form-control" placeholder="Type event date"></td>
  <td>
      <select class="form-control">
          <option selected hidden>Select type</option>
          <option>Wedding</option>
          <option>BM</option>
      </select>
  </td>
  <td>
      <select class="form-control">
          <option selected hidden>Select studio</option>
          <option>Cinemamax studios</option>
          <option>Robinson studios</option>
          <option>Creative studio</option>
      </select>
  </td>
  <td>
      <select class="form-control">
          <option selected hidden>Select editor</option>
          <option>John Doe</option>
          <option>Marina</option>
          <option>Edward</option>
      </select>
  </td>
  <td><input type="date" class="form-control"></td>
  <td>
      <select class="form-control">
          <option selected hidden>Change status</option>
          <option>Working on it</option>
          <option>Done</option>
          <option>Missing files</option>
      </select>
  </td>
  <td>
      <select class="form-control">
          <option selected hidden>Change status</option>
          <option>Uploaded</option>
          <option>Not yet</option>
      </select>
  </td>
  <td><i class="ti-comments"></i></td>
</tr>
  `
})
