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