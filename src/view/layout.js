export function layout(){
    return `
            <div>
                <input type="text" id="searchTerm" />
            </div>
            <div>
                <div id="spinner"></div>
                <div id="results"></div>
            </div>`
}

export function waitSpinner(){
    var spinner = document.getElementById("spinner");
    spinner.style.cssText="display:block; border: 16px solid #f3f3f3; border-top: 16px solid #3498db;  border-radius: 50%; width: 120px; height:120px; position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);  animation: spin 2s linear infinite";
}

export function removeSpinner(){
    var spinner = document.getElementById("spinner");
    spinner.style.cssText="display:none";
}