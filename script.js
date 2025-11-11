const texts = [
    "Find Alumni Mentors to guide your career.",
    "Discover Exclusive Jobs and Internships.",
    "Join Events and Reunions worldwide.",
    "Contribute through Donations and Support.",
    "Grow together with Community Networking."
];

let index = 0;
const changingText = document.getElementById("changing-text");

function changeText() {
    // naya text lagao
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length;

    // animation reset karne ke liye pehle hatao
    changingText.style.animation = "none";
    changingText.offsetHeight; // reflow trigger
    // fir dobara lagao
    changingText.style.animation = "slideUpFade 0.8s ease forwards";
}

// Start me bhi ek baar run karo
changeText();

// Har 3 sec me change karo
setInterval(changeText, 3000);


//========================== Changing text done =============================


// Selecting navigation tab links one by one
const home = document.querySelector('.nav-tabs .home');
const alumni = document.querySelector('.nav-tabs .alumni');
const events = document.querySelector('.nav-tabs .events');
const donations = document.querySelector('.nav-tabs .donatitions'); // note: spelling 'donatitions' in HTML
const job = document.querySelector('.nav-tabs .job');
const mentorship = document.querySelector('.nav-tabs .mentorship');

// Selecting login and signup links
const signup = document.querySelector('.login-signup .signup');
const login = document.querySelector('.login-signup .login');


// hero section to footer selection maincontainer 

const homemain = document.querySelector('#home-main');
const signuppage = document.querySelector('#signup-page');
const loginpage = document.querySelector('#login-page');



// alumni tab button event listner
home.addEventListener("click", function (details) {
    details.preventDefault;
    homemain.style.display = "initial"
    signuppage.style.display = "none"
    loginpage.style.display = "none"
})


// alumni tab button event listner
alumni.addEventListener("click", function (details) {
    details.preventDefault;
    homemain.style.display = "none"
    signuppage.style.display = "none"
    loginpage.style.display = "none"

})


//  events tab button event listner
events.addEventListener("click", function (details) {
    details.preventDefault;
    homemain.style.display = "none"
    signuppage.style.display = "none"
    loginpage.style.display = "none"
})


//  donations tab button event listner
donations.addEventListener("click", function (details) {
    details.preventDefault;
    homemain.style.display = "none"
    signuppage.style.display = "none"
    loginpage.style.display = "none"
})


//  jobs tab button event listner
job.addEventListener("click", function (details) {
    details.preventDefault;
    homemain.style.display = "none"
    signuppage.style.display = "none"
    loginpage.style.display = "none"
})


//  mentorship tab button event listner
mentorship.addEventListener("click", function (details) {
    details.preventDefault;
    homemain.style.display = "none"
    signuppage.style.display = "none"
    loginpage.style.display = "none"
})



//  signup tab button event listner
signup.addEventListener("click", function (details) {
    details.preventDefault;
    homemain.style.display = "none"
    signuppage.style.display = "initial"
    loginpage.style.display = "none"
})


//  login tab button event listner
login.addEventListener("click", function (details) {
    details.preventDefault;
    homemain.style.display = "none"
    signuppage.style.display = "none"
    loginpage.style.display = "initial"
})

























document.addEventListener('DOMContentLoaded', function () {
    // Get all tab buttons and form panels
    const tabs = document.querySelectorAll('.tab-button');
    const forms = document.querySelectorAll('.form-panel');

    // Get file input and file name display
    const uploadPhotoInput = document.getElementById('upload-photo');
    const fileNameSpan = document.getElementById('file-name');

    // Function to handle tab switching
    function switchTab(targetFormId) {
        // Update tabs
        tabs.forEach(tab => {
            if (tab.dataset.form === targetFormId) {
                tab.classList.add('tab-active');
                tab.classList.remove('tab-inactive');
            } else {
                tab.classList.add('tab-inactive');
                tab.classList.remove('tab-active');
            }
        });

        // Update forms
        forms.forEach(form => {
            if (form.id === 'form-' + targetFormId) {
                form.classList.remove('hidden');
            } else {
                form.classList.add('hidden');
            }
        });
    }

    // Add click event listeners to all tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.form);
        });
    });

    // Listen for changes on the file input
    if (uploadPhotoInput) { // Check if the element exists
        uploadPhotoInput.addEventListener('change', function () {
            if (this.files && this.files.length > 0) {
                fileNameSpan.textContent = this.files[0].name; // Display selected file name
            } else {
                fileNameSpan.textContent = 'Upload Your Photo'; // Reset if no file chosen
            }
        });
    }

    // Set the initial state (Alumni tab is active)
    switchTab('alumni'); // MODIFIED: 'students' se 'alumni' kiya gaya
});