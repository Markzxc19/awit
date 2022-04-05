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

let textTitle = document.querySelector(".text-title");
let textOutput = document.getElementById("text-output");

let darkModeSettings = false;

// Dark mode
darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "#616161";
    awit.style.color = "white";
    interpreter.style.color = "white";
    textArea.style.backgroundColor = "rgb(40, 44, 52)";
    textArea.style.color = "white";
    textTitle.style.color = "white";
    textOutput.style.backgroundColor = "white";
    darkMode.style.display = "none";
    lightMode.style.display = "block";

    darkModeSettings = true; 
})


// Light mode
lightMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "#ccc";
    awit.style.color = "#444";
    interpreter.style.color = "#444";
    textArea.style.backgroundColor = "#ccc";
    textArea.style.color = "black";
    textTitle.style.color = "#444";
    textOutput.style.backgroundColor = "#ccc";
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


// For executing the code 
function executeCodes(){
    $.ajax({
        method: "POST",
        url: "/awit/compiler.php",
        data: {
            code: textArea.value
        },
        success: function(response){
            $(".text").text(response);
        }
    });
}