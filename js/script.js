// For dropdown menu 
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-drowpdown-button");
    if(!isDropdownButton && e.target.closest("[data-drowpdown]") != null)
        return;

    let currentDropdown;
    if(isDropdownButton){
        currentDropdown = e.target.closest("[data-drowpdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-drowpdown].active").forEach(dropdown => {
        if(dropdown === currentDropdown)
            return
        dropdown.classList.remove("active");
    })
});


let textArea = document.getElementById("text-area");

// For changing font
const defaultFont = document.getElementById("SansSerif");
const TimesNewRoman = document.getElementById("TimesNewRoman");
const CourierNew = document.getElementById("CourierNew");
const SegoeUI = document.getElementById("SegoeUI");
const Georgia = document.getElementById("Georgia");

defaultFont.addEventListener("click", () => {
    textArea.style.fontFamily = "sans-serif";
});

TimesNewRoman.addEventListener("click", () => {
    textArea.style.fontFamily = "Times New Roman";
});

CourierNew.addEventListener("click", () => {
    textArea.style.fontFamily = "Courier New";
});

SegoeUI.addEventListener("click", () => {
    textArea.style.fontFamily = "Segoe UI";
});

Georgia.addEventListener("click", () => {
    textArea.style.fontFamily = "Georgia";
});


// For changing font size
const fontSize10 = document.getElementById("fontSize10");
const fontSize12 = document.getElementById("fontSize12");
const fontSize16 = document.getElementById("fontSize16");
const fontSize18 = document.getElementById("fontSize18");
const fontSize24 = document.getElementById("fontSize24");
const fontSize36 = document.getElementById("fontSize36");
const fontSize48 = document.getElementById("fontSize48");

fontSize10.addEventListener("click", () => {
    textArea.style.fontSize = "10px";
});

fontSize12.addEventListener("click", () => {
    textArea.style.fontSize = "12px";
});

fontSize16.addEventListener("click", () => {
    textArea.style.fontSize = "16px";
});

fontSize18.addEventListener("click", () => {
    textArea.style.fontSize = "18px";
});

fontSize24.addEventListener("click", () => {
    textArea.style.fontSize = "24px";
});

fontSize36.addEventListener("click", () => {
    textArea.style.fontSize = "36px";
});

fontSize48.addEventListener("click", () => {
    textArea.style.fontSize = "48px";
});


let darkMode = document.getElementById("dark");
let lightMode = document.getElementById("light");

let awit = document.getElementById("awit");
let interpreter = document.getElementById("interpreter");

let filename = document.querySelector(".file-name");
let file_Name = document.getElementById("fileName");

let textTitle0 = document.querySelectorAll(".text-title")[0];
let textTitle1 = document.querySelectorAll(".text-title")[1];
let textTitle2 = document.querySelectorAll(".text-title")[2];
let textTitle3 = document.querySelectorAll(".text-title")[3];
let textTitle4 = document.querySelectorAll(".text-title")[4];
let textOutput = document.getElementById("text-output");
let analysisOutput = document.getElementById("analysis-output");

let darkModeSettings = false;

// Dark mode
darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "#616161";
    awit.style.color = "white";
    interpreter.style.color = "white";
    filename.style.color = "white";
    file_Name.style.color = "white";
    textArea.style.backgroundColor = "rgb(40, 44, 52)";
    textArea.style.color = "white";
    textTitle0.style.color = "white";
    textTitle1.style.color = "white";
    textTitle2.style.color = "white";
    textTitle3.style.color = "white";
    textTitle4.style.color = "white";
    textOutput.style.backgroundColor = "white";
    analysisOutput.style.backgroundColor = "white";
    darkMode.style.display = "none";
    lightMode.style.display = "block";

    darkModeSettings = true; 
})


// Light mode
lightMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "#ccc";
    awit.style.color = "#444";
    interpreter.style.color = "#444";
    filename.style.color = "#444";
    file_Name.style.color = "#444";
    textArea.style.backgroundColor = "#ccc";
    textArea.style.color = "black";
    textTitle0.style.color = "#444";
    textTitle1.style.color = "#444";
    textTitle2.style.color = "#444";
    textTitle3.style.color = "#444";
    textTitle4.style.color = "#444";
    textOutput.style.backgroundColor = "#ccc";
    analysisOutput.style.backgroundColor = "#ccc";
    lightMode.style.display = "none";
    darkMode.style.display = "block";

    darkModeSettings = false;
})


// For File menu Open
const fileOpen = document.getElementById("file-open");
let fileName = document.getElementById("fileName");

fileOpen.addEventListener('change', ()=> {
    const reader = new FileReader();

    reader.onload = function(){
        textArea.value = reader.result
    }

    reader.readAsText(fileOpen.files[0]);
    
    fileName.innerHTML = fileOpen.files[0].name;
});


// For File menu Save
const fileSave = document.getElementById("file-save");

fileSave.addEventListener('click', ()=> {
    if(fileName.innerHTML === ""){
        // console.log("Save file");
        return;
    }else {
        var blob = new Blob(
                [textArea.value], 
                {type: "text/plain;charset=utf-8"}
            );
    
        saveAs(blob, "Awit.awit");
    }
});


// For File menu Save as
const fileSaveAs = document.getElementById("file-save-as");

fileSaveAs.addEventListener('click', ()=> {
    var blob = new Blob(
            [textArea.value], 
            {type: "text/plain;charset=utf-8"}
        );

    saveAs(blob, "Awit.awit");
});


// For File menu New
const fileNew = document.getElementById("file-new");

fileNew.addEventListener('click', ()=> {
    textArea.value = "";
    fileName.innerHTML = "";
});





// For expand view more
let showTextOutputContainer = document.getElementById("show-text-output");
let showAnalysisOutputContainer = document.getElementById("show-analysis-output");

const btnViewTextOutput = document.getElementById("view-text-output");
const btnCloseTextOutput = document.getElementById("close-text-output");
let showText = document.getElementById("show-text");

btnViewTextOutput.addEventListener('click', ()=> {
    textEditor.style.display = "none";
    showText.style.display = "flex";

    if(darkModeSettings){
        showTextOutputContainer.style.backgroundColor = "white";
        showAnalysisOutputContainer.style.backgroundColor = "white";
    }
});

btnCloseTextOutput.addEventListener('click', ()=> {
    textEditor.style.display = "block";
    showText.style.display = "none";
});


const btnViewAnalysisOutput = document.getElementById("view-analysis-output");
const btnCloseAnalysisOutput = document.getElementById("close-analysis-output");
let showAnalysis = document.getElementById("show-analysis");

btnViewAnalysisOutput.addEventListener('click', ()=> {
    textEditor.style.display = "none";
    showAnalysis.style.display = "flex";

    if(darkModeSettings){
        showTextOutputContainer.style.backgroundColor = "white";
        showAnalysisOutputContainer.style.backgroundColor = "white";
    }
});

btnCloseAnalysisOutput.addEventListener('click', ()=> {
    textEditor.style.display = "block";
    showAnalysis.style.display = "none";
});


const btnViewGraphOutput = document.getElementById("view-graph-output");
const btnCloseGraphOutput = document.getElementById("close-graph-output");
let showGraph = document.getElementById("show-graph");

btnViewGraphOutput.addEventListener('click', ()=> {
    textEditor.style.display = "none";
    showGraph.style.display = "flex";
});

btnCloseGraphOutput.addEventListener('click', ()=> {
    textEditor.style.display = "block";
    showGraph.style.display = "none";
});






// For About page
const aboutPage = document.getElementById("about-page");
const btnClose = document.querySelector(".close-button");
let logo = document.querySelector(".logo-container");
let textEditor = document.querySelector(".container");
let modalContainer = document.querySelector(".modal-container");

aboutPage.addEventListener('click', ()=> {
    logo.style.display = "none";
    textEditor.style.display = "none";
    modalContainer.style.display = "flex";
});

btnClose.addEventListener('click', ()=> {
    logo.style.display = "flex";
    textEditor.style.display = "block";
    modalContainer.style.display = "none";
});