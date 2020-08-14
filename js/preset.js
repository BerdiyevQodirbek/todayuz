// auto preset field
function selectStudio() {
    var presetSelect = document.querySelector('#presetSelect');
    var presetShow = document.querySelector('#preset-show');
    if(presetSelect.value == 'Video Studio'){
        presetShow.innerHTML = `
        <table class="table">
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
                <select class="form-control" id="progressType">
                    <option>Working on it</option>
                    <option>Done</option>
                    <option>Missing files</option>
                </select>
            </td>
            <td>
                <select class="form-control" id="finishedType">
                    <option>Uploaded</option>
                    <option>Not yet</option>
                </select>
            </td>
            <td><i class="ti-comments"></i></td>
        </tr>
    </table>
        `;
    } else if (presetSelect.value == 'Web Developer'){
        presetShow.innerHTML = `
        <table class="table">
        <tr class="thead">
            <td>Project</td>
            <td>Employer</td>
            <td>Developer</td>
            <td>Timeline</td>
            <td>Status</td>
            <td><i class="ti-comments"></i></td>
            
        </tr>
        <tr>
            <td><input type="text" id="addedAt" class="form-control"></td>
            <td>
                <select class="form-control" id="degree">
                    <option>Upwork</option>
                    <option>Fiverr</option>
                </select>
            </td>
            <td>
                <select id="engineers" class="form-control">
                    <option>Mark</option>
                    <option>Marina</option>
                    <option>Edward</option>
                </select>
            </td>
            <td><input type="date" class="form-control"></td>
            <td>
                <select id="progressType" class="form-control">
                    <option>Working on it</option>
                    <option>Done</option>
                </select>
            </td>
        
            <td><i class="ti-comments"></i></td>
        </tr>
    </table>
        
        `
    }

}
