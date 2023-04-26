
// Navigation section

function CollapseSideBar() {
    document.querySelector('#bx').classList.remove('bx-x')
    document.querySelector('#bx').classList.add('bx-menu')
    document.querySelector('.main').style.paddingLeft = "0px"
    document.querySelector('.main').style.transition = "all 0.8s ease"
    document.querySelector('.side-nav').classList.remove('active-side-nav')
    document.querySelector('.side-nav').classList.add('inactive-side-nav')
    document.querySelector('.btn-nav').style.top = "15px";
    document.querySelector('.btn-nav').style.right = "-40px";
}

function ExpandSideBar() {
    document.querySelector('#bx').classList.add('bx-x')
    document.querySelector('#bx').classList.remove('bx-menu')
    document.querySelector('.side-nav').classList.add('active-side-nav')
    document.querySelector('.side-nav').classList.remove('inactive-side-nav')
    document.querySelector('.btn-nav').style.top = "15px";
    document.querySelector('.btn-nav').style.right = "20px";
}

var viewPortWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewPortWidth <= 900) {
    CollapseSideBar()
    NavLinks()
    document.querySelector('.btn-nav').addEventListener('click', function () {

        if (document.querySelector('#bx').classList.contains('bx-x')) {
            CollapseSideBar()
        } else {
            ExpandSideBar()
        }
    })
}
else if (viewPortWidth <= 1280) {
    NavLinks()
    ExpandSideBar()
    console.log(viewPortWidth)
    document.querySelector('.main').style.paddingLeft = "300px"
    document.querySelector('.main').style.transition = "all 1.2s ease"
    document.querySelector('.btn-nav').addEventListener('click', function () {
        if (document.querySelector('#bx').classList.contains('bx-x')) {
            CollapseSideBar()
        }
        else {
            document.querySelector('.main').style.paddingLeft = "300px"
            document.querySelector('.main').style.transition = "all 1.2s ease"
            ExpandSideBar()
        }
    })
}
else {
    ExpandSideBar()
    console.log(viewPortWidth)
    document.querySelector('.main').style.paddingLeft = "300px"
    document.querySelector('.main').style.transition = "all 1.2s ease"
    document.querySelector('.btn-nav').style.display = "none";
}
console.log(viewPortWidth)
function NavLinks() {
    var lenOfNav = document.querySelectorAll('.nav-link').length;
    for (var i = 0; i < lenOfNav; i++) {
        document.querySelectorAll('.nav-link')[i].addEventListener('click', function () {
            document.querySelector('#bx').classList.remove('bx-x')
            document.querySelector('#bx').classList.add('bx-menu')
            document.querySelector('.main').style.paddingLeft = "0px"
            document.querySelector('.main').style.transition = "all 0.8s ease"
            document.querySelector('.side-nav').classList.remove('active-side-nav')
            document.querySelector('.side-nav').classList.add('inactive-side-nav')
            document.querySelector('.btn-nav').style.top = "15px";
            document.querySelector('.btn-nav').style.right = "-40px";
        })
    };
}
// Home page Section
// Changing Career On Home Page 
var Mycareer = document.querySelector(".web-developer")
var careers = ["Software Engineer ", "Web-Developer "]
let careersIndex = 0;
let careersString = 0
careerUpdate()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function careerUpdate() {
    Mycareer.innerHTML = " <u><b>" + careers[careersIndex].slice(0, careersString) + "</b></u>" + "|";
    careersString++
    if (careersString === careers[careersIndex].length + 1) {
        for (var j = careersString - 1; j >= 0; j--) {
            Mycareer.innerHTML = "<u><b> " + careers[careersIndex].slice(0, j) + "</b></u>" + "|";
            await sleep(100)

        }
        careersIndex++
        careersString = 0

    }
    if (careersIndex === careers.length) {
        careersIndex = 0
    }
    setTimeout(careerUpdate, 100)
}

// About Section 
// Readmore

var dots = document.querySelector('.dots');
var more = document.querySelector('.more');
var btns = document.querySelector('.read-more-btn');
document.querySelector('.read-more-btn').addEventListener('click', function () {
    if (document.getElementById('dt').style.display === "none") {
        dots.style.display = "inline";
        more.style.display = "none";
        btns.innerHTML = "Read More";
    } else {
        dots.style.display = "none";
        more.style.display = "inline";
        btns.innerHTML = "Read Less";
    }
})


// Skill Section
// Nav Bars
var all = document.querySelector('.all')
var frontend = document.querySelector('.frontend')
var backend = document.querySelector('.backend')
var database = document.querySelector('.database')
var framework = document.querySelector('.framework')
var other = document.querySelector('.other')


let all_btn = [".html", ".css", ".javascript", ".sass", ".bootstrap", ".python", ".django", ".node-js", ".java",".cpp",".figma",".react",".git",".firebase",".sqlite",".mysql",".bash"];
let front_btn = [".html", ".css", ".javascript",".sass", ".bootstrap",".react"];
let back_btn = [".django", ".node-js", ".java",".react"];
let database_btn = [".mysql",".sqlite",".firebase"];
let framework_btn = [".bootstrap", ".django",".react"];
let other_btn = [".python",".cpp",".git",".figma",".bash"];
all.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "inline";
        document.querySelector(all_btn[i]).style.display = "flex";
        all.style.borderBottom = "2px solid #E9AB0F";
        all.style.borderLeft = "2px solid #E9AB0F";
        all.style.borderTop = "1px solid white";
        all.style.borderRight = "1px solid white";

        frontend.style.border = "0";
        backend.style.border = "0";
        database.style.border = "0";
        framework.style.border = "0";
        other.style.border = "0";


    }
})
frontend.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "none";
    }
    for (var i = 0; i < front_btn.length; i++) {
        document.querySelector(front_btn[i]).style.display = "inline";
        document.querySelector(front_btn[i]).style.display = "flex";
        all.style.border = "0";
        frontend.style.borderBottom = "2px solid #E9AB0F";
        frontend.style.borderLeft = "2px solid #E9AB0F";
        frontend.style.borderTop = "1px solid white";
        frontend.style.borderRight = "1px solid white";

        backend.style.border = "0";
        database.style.border = "0";
        framework.style.border = "0";
        other.style.border = "0";
    }
})
backend.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "none";
    }
    for (var i = 0; i < back_btn.length; i++) {
        document.querySelector(back_btn[i]).style.display = "inline";
        document.querySelector(back_btn[i]).style.display = "flex";
        all.style.border = "0";
        frontend.style.border = "0";
        backend.style.borderBottom = "2px solid #E9AB0F";
        backend.style.borderLeft = "2px solid #E9AB0F";
        backend.style.borderTop = "1px solid white";
        backend.style.borderRight = "1px solid white";
        database.style.border = "0";
        framework.style.border = "0";
        other.style.border = "0";
    }
})
database.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "none";
    }
    for (var i = 0; i < database_btn.length; i++) {
        document.querySelector(database_btn[i]).style.display = "inline";
        document.querySelector(database_btn[i]).style.display = "flex";
    }
    all.style.border = "0";
    frontend.style.border = "0";
    backend.style.border = "0";
    database.style.borderBottom = "2px solid #E9AB0F";
    database.style.borderLeft = "2px solid #E9AB0F";
    database.style.borderTop = "1px solid white";
    database.style.borderRight = "1px solid white";
    framework.style.border = "0";
    other.style.border = "0";
})
framework.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "none";
    }
    for (var i = 0; i < framework_btn.length; i++) {
        document.querySelector(framework_btn[i]).style.display = "inline";
        document.querySelector(framework_btn[i]).style.display = "flex";
        all.style.border = "0";
        frontend.style.border = "0";
        backend.style.border = "0";
        database.style.border = "0";
        framework.style.borderBottom = "2px solid #E9AB0F";
        framework.style.borderLeft = "2px solid #E9AB0F";
        framework.style.borderTop = "1px solid white";
        framework.style.borderRight = "1px solid white";
        other.style.border = "0";
    }
})
other.addEventListener('click', function () {
    for (var i = 0; i < all_btn.length; i++) {
        document.querySelector(all_btn[i]).style.display = "none";
    }
    for (var i = 0; i < other_btn.length; i++) {
        document.querySelector(other_btn[i]).style.display = "inline";
        document.querySelector(other_btn[i]).style.display = "flex";
    }
    all.style.border = "0";
    frontend.style.border = "0";
    backend.style.border = "0";
    database.style.border = "0";
    framework.style.border = "0";
    other.style.borderBottom = "2px solid #E9AB0F";
    other.style.borderLeft = "2px solid #E9AB0F";
    other.style.borderTop = "1px solid white";
    other.style.borderRight = "1px solid white";
})


// Contact section
var firebaseConfig = {
    apiKey: "AIzaSyCiNGPos6w1-1Xq_3wyYXDDTfS4RZV46Z8",
    authDomain: "contact-form-4cb2b.firebaseapp.com",
    projectId: "contact-form-4cb2b",
    storageBucket: "contact-form-4cb2b.appspot.com",
    messagingSenderId: "600476167799",
    appId: "1:600476167799:web:6be083ecd02aa10c44e072",
    measurementId: "G-P35B8V5WM5"
};
firebase.initializeApp(firebaseConfig);

// Reference message Collection
var messageRef = firebase.database().ref('message');

function getElements(id) {
    return document.getElementById(id).value;
}
document.querySelector("#ContactForm").addEventListener('submit', function(event) {
    event.preventDefault();

    var name = getElements("name");
    var email = getElements("email");
    var subject = getElements("subject");
    var message = getElements("txt-area");
    var submit = getElements("submit")
    saveMessage(name, email, subject, message);
    setTimeout(() => {
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("subject").value = ""
        document.getElementById("txt-area").value = ""

    }, 1000)

    setTimeout(() => {
        document.querySelector('#submit').setAttribute("value", "Submit");
        document.querySelector('#submit').style.backgroundColor = "#0B58A9";
    }, 2000)
    document.querySelector('#submit').setAttribute("value", "Sent");
    document.querySelector('#submit').style.backgroundColor = "green";
})



// Save message to firebase
function saveMessage(name, email, subject, message) {
    var newmessageRef = messageRef.push();
    newmessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
}
