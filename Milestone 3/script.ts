let exYesButton = document.getElementById('haveexperienceyes');
let exfuncDiv = document.getElementById('exfunc');
let exNoButton = document.getElementById('haveexperienceno');
function exYesButtonFunc(){
    if(exfuncDiv){
        exfuncDiv.innerHTML=`<label for="experience">Write your Experience</label>
               <br>
               <textarea name="experience" id="experience" cols="100" rows="10">
                </textarea>`
    }
}
function exNoButtonFunc(){
    if(exfuncDiv){
        exfuncDiv.innerHTML = "";
    }
}
let exybf = exYesButton?.addEventListener('click',exYesButtonFunc);
let exnbf = exNoButton?.addEventListener('click',exNoButtonFunc)

let edYesButton : null |HTMLElement = document.getElementById('havedegreeYes');
let edNoButton : null |HTMLElement = document.getElementById('havedegreeNo');
let edFuncDiv :null | HTMLElement = document.getElementById('edfunc');
function edYesButtonFunc():void{
    if(edFuncDiv){
        edFuncDiv.innerHTML =`<label for="degreee">Degree</label>
                <input type="text" id="degree" placeholder="Enter Your Degree Name" autocomplete="off" required>
                <label for="institute">Insitute</label>
                <input type="text" id="institute" placeholder="Enter Your Insitute Name" autocomplete="off" required>`
    }
};
function edNoButtonFunc(){
    if(edFuncDiv){
        edFuncDiv.innerHTML = "";
    }
}
let edyf : void | undefined = edYesButton?.addEventListener('click',edYesButtonFunc);
let enyf : void | undefined = edNoButton?.addEventListener('click',edNoButtonFunc);

// App Work
let formSection = document.getElementById("form-section") as HTMLElement;
let form = document.getElementById("Form") as HTMLFormElement;
let resumeSection = document.getElementById('resume-section') as HTMLElement;
form.addEventListener('submit',(event)=>{
    event?.preventDefault();
    let formData = {
        namee:document.getElementById('name')as HTMLInputElement,
        fnamee:document.getElementById('fatherName') as HTMLInputElement,
        birthDate : document.getElementById('birthDate') as HTMLInputElement,
        email:document.getElementById('email') as HTMLInputElement,
        number:document.getElementById('number') as HTMLInputElement,
        photo:(document.getElementById('photo') as HTMLInputElement).files?.[0],
        experience:document.getElementById('experience') as HTMLTextAreaElement,
        degree:document.getElementById('degree') as HTMLInputElement,
        institute:document.getElementById('institute') as HTMLInputElement,
        skills:document.getElementById('skills') as HTMLTextAreaElement,
        rb: document.querySelector('input[name="gender"]:checked') as HTMLInputElement
        };
        let resumeData = {
            name : formData.namee.value,
            fname: formData.fnamee.value,
            birthDate: formData.birthDate.value,
            email: formData.email.value,
            number: formData.number.value,
            photo: formData.photo,
            skills:formData.skills.value,
            gender: formData.rb?formData.rb.value:"No Gender Selected",
            degree: formData.degree?.value|| "",
            institute : formData.institute?.value || "",
            experience: formData.experience?.value || ""
                };
    formSection.style.display = "none";
    resumeSection.style.display = "flex"
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
             ${resumeData.degree && resumeData.institute?`
             <h1 class="resumeHeading">Education</h1>
             <p id="resumeEducation" class="resumePara">${resumeData.degree} from ${resumeData.institute} 
             `:""}
             ${resumeData.experience?`<h1 class="resumeHeading">Work Experience</h1>
             <p id="resumeEducation" class="resumePara">${resumeData.experience}`
            :""}
             <h1 class="resumeHeading">Skills</h1>
             <p id="resumeSkills" class="resumePara">${resumeData.skills}</p>
             </div>`;
             if(resumeSection){
                resumeSection.innerHTML = resume;
                if (formData.photo) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        resumePhoto.src = e.target?.result as string;
                    };
                    reader.readAsDataURL(formData.photo);
                    reader.readAsDataURL(formData.photo);
                }
            }
            else{
                console.error('Some Thing Fishy')
            }
          });