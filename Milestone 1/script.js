"use strict";
let exYesButton = document.getElementById('haveexperienceyes');
let exfuncDiv = document.getElementById('exfunc');
let exNoButton = document.getElementById('haveexperienceno');
function exYesButtonFunc() {
    if (exfuncDiv) {
        exfuncDiv.innerHTML = `<label id="experience">Write your Experience</label>
               <br>
               <textarea name="experience" id="experience" cols="100" rows="10">
                </textarea>`;
    }
}
function exNoButtonFunc() {
    if (exfuncDiv) {
        exfuncDiv.innerHTML = "";
    }
}
let exybf = exYesButton?.addEventListener('click', exYesButtonFunc);
let exnbf = exNoButton?.addEventListener('click', exNoButtonFunc);
let edYesButton = document.getElementById('havedegreeYes');
let edNoButton = document.getElementById('havedegreeNo');
let edFuncDiv = document.getElementById('edfunc');
function edYesButtonFunc() {
    if (edFuncDiv) {
        edFuncDiv.innerHTML = `<label for="degreee">Degree</label>
                <input type="text" id="degreee" placeholder="Enter Your Degree Name" autocomplete="off">
                <label for="institute">Insitute</label>
                <input type="text" id="institute" placeholder="Enter Your Insitute Name" autocomplete="off">`;
    }
}
;
function edNoButtonFunc() {
    if (edFuncDiv) {
        edFuncDiv.innerHTML = "";
    }
}
let edyf = edYesButton?.addEventListener('click', edYesButtonFunc);
let enyf = edNoButton?.addEventListener('click', edNoButtonFunc);
