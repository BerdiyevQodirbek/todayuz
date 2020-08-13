var settingBtn = document.getElementById("settingsBtn");

//  setting

settingBtn.addEventListener("click", () => {
  firestore.collection("users").doc(user)
  .get().then( users => {
    var admin = users.data();
    document.getElementsByClassName("main")[0].innerHTML = `<div id="settingsSection">
      <form class="row">
        <div class="form-group col-md-6">
          <label for="" class="col-form-label">Company Name</label>
          <input type="text" autocomplete="off" class="form-control" value="${admin.compName}" id="compName">
        </div>
        <div class="form-group col-md-6">
          <label for="" class="col-form-label">Email</label>
          <input type="email" autocomplete="off" class="form-control" value="${admin.email}" id="email">
        </div>
        <div class="form-group col-md-6">
          <label for="" class="col-form-label">Name</label>
          <input type="text" autocomplete="off" class="form-control" value="${admin.name}" id="name">
        </div>
        <div class="form-group col-md-6">
          <label for="" class="col-form-label">Password</label>
          <input type="password" autocomplete="off" class="form-control" value="${admin.password}" id="psw">
        </div>
        <div class="form-group col-md-6">
          <label for="" class="col-form-label">Telephone</label>
          <input type="tel" autocomplete="off" class="form-control" value="${admin.tel}" id="tel">
        </div>
        <div class="form-group col-md-12">
            <div id="userImg">
              <span onclick="imgFile()"><i class="ti-camera"></i></span>
              <input type="file" class="form-control" title=" " id="ImgFile">
            </div>
        </div>
      </form>
    </div>`
  }).catch((err) => {
    console.log(err);
  })
})

function imgFile() {
  document.getElementById("ImgFile").click()
}