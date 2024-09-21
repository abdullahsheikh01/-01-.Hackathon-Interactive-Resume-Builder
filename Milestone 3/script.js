"use strict";
let exYesButton = document.getElementById('haveexperienceyes');
let exfuncDiv = document.getElementById('exfunc');
let exNoButton = document.getElementById('haveexperienceno');
function exYesButtonFunc() {
    if (exfuncDiv) {
        exfuncDiv.innerHTML = `<label for="experience">Write your Experience</label>
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
                <input type="text" id="degree" placeholder="Enter Your Degree Name" autocomplete="off" required>
                <label for="institute">Insitute</label>
                <input type="text" id="institute" placeholder="Enter Your Insitute Name" autocomplete="off" required>`;
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
// App Work
let formSection = document.getElementById("form-section");
let form = document.getElementById("Form");
let resumeSection = document.getElementById('resume-section');
form.addEventListener('submit', (event) => {
    event?.preventDefault();
    let formData = {
        namee: document.getElementById('name'),
        fnamee: document.getElementById('fatherName'),
        birthDate: document.getElementById('birthDate'),
        email: document.getElementById('email'),
        number: document.getElementById('number'),
        photo: document.getElementById('photo').files?.[0],
        experience: document.getElementById('experience'),
        degree: document.getElementById('degree'),
        institute: document.getElementById('institute'),
        skills: document.getElementById('skills'),
        rb: document.querySelector('input[name="gender"]:checked')
    };
    let resumeData = {
        name: formData.namee.value,
        fname: formData.fnamee.value,
        birthDate: formData.birthDate.value,
        email: formData.email.value,
        number: formData.number.value,
        photo: formData.photo,
        skills: formData.skills.value,
        gender: formData.rb ? formData.rb.value : "No Gender Selected",
        degree: formData.degree?.value || "",
        institute: formData.institute?.value || "",
        experience: formData.experience?.value || ""
    };
    formSection.style.display = "none";
    resumeSection.style.display = "flex";
    const resume = `
             <div class = "resume-div">
             <center>
                 <img src="" alt="Person's Image" id="resumePhoto">
             </center>
             <center><h1 class="name-head">${resumeData.name}</h1></center>
             <p id="resumeGender" class="resumePara">Gender: ${resumeData.gender}</p>
             <p id="resumeFatherName" class="resumePara">Father Name: ${resumeData.fname}</p>
             <p id="resumeBirthDate" class="resumePara">Date of Birth: ${resumeData.birthDate}</p>
             <p id="resumeEmail" class="resumePara">Email: ${resumeData.email}</p>
             <p id="resumePhone" class="resumePara">Phone Number: ${resumeData.number}</p>
             ${resumeData.degree && resumeData.institute ? `
             <h1 class="resumeHeading">Education</h1>
             <p id="resumeEducation" class="resumePara">${resumeData.degree} from ${resumeData.institute} 
             ` : ""}
             ${resumeData.experience ? `<h1 class="resumeHeading">Work Experience</h1>
             <p id="resumeEducation" class="resumePara">${resumeData.experience}`
        : ""}
             <h1 class="resumeHeading">Skills</h1>
             <p id="resumeSkills" class="resumePara">${resumeData.skills}</p>
             </div>`;
    if (resumeSection) {
        resumeSection.innerHTML = resume;
        if (formData.photo) {
            const reader = new FileReader();
            reader.onload = function (e) {
                resumePhoto.src = e.target?.result;
            };
            reader.readAsDataURL(formData.photo);
            reader.readAsDataURL(formData.photo);
        }
    }
    else {
        console.error('Some Thing Fishy');
    }
});
