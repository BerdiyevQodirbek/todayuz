// create Table

function createTable(el) {
  var typeSt = document.getElementById("presetSelect").value
  var studioName = el.dataset.id;
  var addedAt = document.getElementById("addedAt").value;
  var projectType = document.getElementById("projectType").value;
  var studioType = document.getElementById("studioType").value;
  var engineers = document.getElementById("engineers").value;
  var deadline = document.getElementById("deadline").value;
  var progressType = document.getElementById("progressType").value;
  var finishedType = document.getElementById("finishedType").value;
  var currDate = Date.now()
  firestore.collection(user+'.worklist').doc(studioName).update({
      check: currDate 
  }).then(() => {
    var tableRef = firestore.collection("tables").doc(studioName).collection(typeSt).doc("Row-" + currDate)
    if (typeSt == "Video Studio") {
        tableRef.set({
            date: currDate,
            addedAt,
            projectType,
            studioType,
            engineers,
            deadline,
            progressType,
            finishedType
          }).then(() => {
            var mainSide = document.getElementsByClassName("main")[0];
            mainSide.innerHTML = `
            <div class="top-user-info" id="createTable">
                    <h1>Company</h1>
                    <fieldset>
                        <legend id="studioName">${studioName}</legend>
                    </fieldset>
                </div>
        
                <div class="main-table">
                    <table class="table" id="table">
                      <thead>
                        <tr class="thead">
                            <td>Date</td>
                            <td>Type</td>
                            <td>Studio</td>
                            <td>Editor</td>
                            <td>Timeline</td>
                            <td>Status</td>
                            <td>Upload</td>
                            <td><i class="ti-comments"></i></td>
                        </tr>
                      </thead>
                      <tbody id="tbody">
                        <tr>
                          <td><input type="text" id="addedAt" class="form-control"></td>
                          <td>
                            <select class="form-control" id="projectType">
                                <option>Wedding</option>
                                <option>BM</option>
                            </select>
                          </td>
                          <td>
                            <select class="form-control" id="studioType">
                                <option>Cinemamax studios</option>
                                <option>Robinson studios</option>
                                <option>Creative studio</option>
                            </select>
                          </td>
                          <td>
                            <select class="form-control" id="engineers">
                                <option>John Doe</option>
                                <option>Marina</option>
                                <option>Edward</option>
                            </select>
                          </td>
                          <td><input type="date" class="form-control" id="deadline"></td>
                          <td>
                            <select onchange="change(this)" class="form-control" id="progressType">
                                <option>Working on it</option>
                                <option>Done</option>
                                <option>Missing files</option>
                            </select>
                          </td>
                          <td>
                            <select onchange="upload(this)" class="form-control" id="finishedType">
                                <option>Uploaded</option>
                                <option>Not yet</option>
                            </select>
                          </td>
                          <td><i class="ti-comments"></i></td>
                        </tr>
                      </tbody>  
                    </table>
                    <button onclick="addNewRow()" class="btn btn-light add-row" id="add-row">Add Row</button>
                </div>`;
            // console.log("working");
          }).catch((err) => {
            console.log("Error is: " + err.message);
          })
      console.log("video");
    } else if(typeSt == "Web Developer") {
      console.log("web");
    } else {
      console.log("studio");
    }
      console.log("Added");
  }).catch((err) => {
      console.log(err);
  })
}

// studio preset field

function checkTable(elem) {
    var mainSide = document.getElementsByClassName("main")[0];
    firestore.collection(user+'.worklist').doc(elem.innerText).get().then(data => {
        var row = data.data().check
        var tableRef = firestore.collection("tables").doc(elem.innerText).collection("Video Studio").doc("Row-" + row)
    tableRef.get().then(tables => {
        if (tables.data() != undefined) {
            firestore.collection("users").doc(user)
            .get().then(item => {
                var u = item.data();
                mainSide.innerHTML = `
            <div class="top-user-info" id="createTable">
                    <h1>${u.compName}</h1>
                    <fieldset>
                        <legend id="studioName">${elem.innerText}</legend>
                    </fieldset>
                </div>

                <div class="main-table">
                    <table class="table" id="table">
                      <thead>
                        <tr class="thead">
                            <td>Date</td>
                            <td>Type</td>
                            <td>Studio</td>
                            <td>Editor</td>
                            <td>Timeline</td>
                            <td>Status</td>
                            <td>Upload</td>
                            <td><i class="ti-comments"></i></td>
                        </tr>
                      </thead>
                      <tbody id="tbody">
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
                                <select onchange="change(this)" class="form-control" id="eStatus">
                                    <option selected hidden>Change status</option>
                                    <option>Working on it</option>
                                    <option>Done</option>
                                    <option>Missing files</option>
                                </select>
                            </td>
                            <td>
                                <select onchange="upload(this)" class="form-control" id="eUpload">
                                    <option selected hidden>Change status</option>
                                    <option>Uploaded</option>
                                    <option>Not yet</option>
                                </select>
                            </td>
                            <td><i class="ti-comments"></i></td>
                        </tr>
                      </tbody>  
                    </table>
                    <button onclick="addNewRow()" class="btn btn-light add-row" id="add-row">Add Row</button>
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
                <legend id="studioName">${elem.innerText}</legend>
                </fieldset>
            </div>
            <div class="preset form-group">
                <select onchange="selectStudio()" id="presetSelect" class="form-control">
                    <option hidden>Select your preset</option>
                    <option>Video Studio</option>
                    <option>Web Developer</option>
                </select>
                <button onclick="createTable(this)" data-id="${elem.innerText}" class="btn btn-primary" id="create-table">Create</button>
    
    
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
    }).catch((err) => {
        console.log(err);
    })
}



//add row Behruz

var addRow = document.getElementById('add-row');
function addNewRow() {
  var tbody = document.getElementById('tbody');
  tbody.innerHTML += `
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
      <select onchange="change(this)" class="form-control">
          <option selected hidden>Change status</option>
          <option>Working on it</option>
          <option>Done</option>
          <option>Missing files</option>
      </select>
  </td>
  <td>
      <select onchange="upload(this)" class="form-control">
          <option selected hidden>Change status</option>
          <option>Uploaded</option>
          <option>Not yet</option>  
      </select>
  </td>
  <td><i class="ti-comments"></i></td>
</tr>
  `
}
