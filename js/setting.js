var settingBtn = document.getElementById("settingsBtn");

//  setting

settingBtn.addEventListener("click", () => {
    document.getElementsByClassName("main")[0].innerHTML = `<div id="settingsSection">
    <form class="row">
        <div class="form-group col-md-6">
          <label for="" class="col-form-label">Company Name</label>
          <input type="text" autocomplete="off" class="form-control" id="compName">
        </div>
        <div class="form-group col-md-6">
          <label for="" class="col-form-label">Email</label>
          <input type="email" autocomplete="off" class="form-control" id="email">
        </div>
        <div class="form-group col-md-6">
          <label for="" class="col-form-label">Name</label>
          <input type="text" autocomplete="off" class="form-control" id="name">
        </div>
        <div class="form-group col-md-6">
          <label for="" class="col-form-label">Password</label>
          <input type="password" autocomplete="off" class="form-control" id="psw">
        </div>
        <div class="form-group col-md-6">
          <label for="" class="col-form-label">Tel</label>
          <input type="tel" autocomplete="off" class="form-control" id="tel">
        </div>
        <div class="form-group col-md-12">
            <div id="userImg">
                <input type="file" class="form-control" title=" " id="ImgFile">
            </div>
        </div>
      </form>
</div>`
})