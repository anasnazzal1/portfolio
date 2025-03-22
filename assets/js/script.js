// navbar on scroll

let navbar = document.querySelector(".navbar");
let navItem = document.querySelectorAll(".navbar-nav li a");
let imgNav = document.querySelector(".navbar-brand img");
let btnNavbar = document.querySelector(".navbar-toggler");
let checkbox = document.getElementById("darkmode--toogle");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        navbar.classList.add("nav-af-scrol");
        for (let i = 0; i < navItem.length; i++) {
            navItem[i].classList.add("text-black");
            navItem[i].classList.remove("text-white");
        }
        imgNav.setAttribute("src", "assets/img/public/logo-2-inverted-removebg-preview.png")

        // to chek light or dRK MODE
        if (checkbox.checked) {

            navbar.classList.add("dark");
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.remove("text-black");
                navItem[i].classList.add("text-white");
            }
            imgNav.setAttribute("src", "assets/img/public/mainLogo.png")


        } else {

            navbar.classList.remove("dark");
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.add("text-black");
                navItem[i].classList.remove("text-white");
            }
            imgNav.setAttribute("src", "assets/img/public/logo-2-inverted-removebg-preview.png")


        }
        //end to chek light or dRK MODE


    }

    else {
        navbar.classList.remove("nav-af-scrol");
        for (let i = 0; i < navItem.length; i++) {
            navItem[i].classList.remove("text-black");
            navItem[i].classList.add("text-white");
        }
        imgNav.setAttribute("src", "assets/img/public/mainLogo.png")
        navbar.classList.remove("dark"); // to light and dark mode



    }
})

btnNavbar.addEventListener("click", function (e) {
    navbar.classList.add("nav-af-scrol");
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.add("text-black");
        navItem[i].classList.remove("text-white");
    }
    imgNav.setAttribute("src", "assets/img/public/logo-2-inverted-removebg-preview.png")
})
// end nav bar on scroll
// show icon to scroll to top
let iconScrollTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", function () {
    if (this.scrollY > 660) {
        iconScrollTop.classList.remove("d-none");
    }
    else {

        iconScrollTop.classList.add("d-none");
    }
})
// end icon scroll

// to change the color of section name in navbar

let sections = document.querySelectorAll("section");
let linkNav = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", function () {
    let sectionName;
    sections.forEach(function (section) {

        if (window.scrollY + 200 >= section.offsetTop && window.scrollY <= section.offsetHeight + section.offsetTop) {

            sectionName = section.id;
        }
    })

    linkNav.forEach(function (link) {

        if (link.href.includes(sectionName)) {
            link.classList.add("active--item");
        }
        else
            link.classList.remove("active--item");
    })





})
// end the change
// js for loader

let loader = document.querySelector(".loading");
window.addEventListener("load", function () {
    loader.classList.add("d-none");
})
// end loader
// start dark and light mode

let background = document.querySelector(".background");
let navbarTogglerIcon = document.querySelector(".navbar-toggler .navbar-toggler-icon");
let navbarToggler = document.querySelector(".navbar-toggler")
let resumeSection = document.querySelector(".resume--section")
console.log(resumeSection)
checkbox.addEventListener("change", function () {
    if (this.checked) {
        // for navbar
        if (window.scrollY >= 100) {
            navbar.classList.add("dark");
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.remove("text-black");
                navItem[i].classList.add("text-white");
            }
            imgNav.setAttribute("src", "assets/img/public/mainLogo.png")
            navbarTogglerIcon.classList.add("navarToggleIcon");
            navbarToggler.classList.add("navbarToggler")
        }
        // end for navbar
        // resume section
     
        document.querySelectorAll("h3").forEach(el => {
            el.classList.add("text-white");
        });
        document.querySelectorAll("h2").forEach(el => {
            el.classList.add("text-white");
        });
        document.querySelectorAll("section").forEach(el => {
            el.classList.add("dark--modeColor");
        });
        document.querySelectorAll("label").forEach(el => {
            el.classList.add("text-white");
        });
        document.querySelectorAll("p").forEach(el => {
            el.classList.add("text-white");
        });
        document.querySelectorAll("i").forEach(el => {
            el.classList.add("text-white");
        });
        document.querySelectorAll("a").forEach(el => {
            el.classList.add("text-white");
        });
        document.querySelectorAll(".info--forMe .list-group-item").forEach(el => {
            el.classList.add("bg-black");
            el.classList.add("text-white");
        });
        document.querySelectorAll(".contect-work-tab .nav-item button").forEach(el => {
          
            el.classList.add("text-white");
        });
        
        let informatiomSeton = document.querySelector(".information--section").classList.remove("dark--modeColor")
        document.querySelectorAll(".contect-resume-tab  .nav  .nav-link i").forEach(el => {
            el.classList.remove("text-white");
        });
        document.querySelectorAll(".experience--item i").forEach(el => {
            el.classList.remove("text-white");
        });
        document.querySelectorAll(".education--item i").forEach(el => {
            el.classList.remove("text-white");
        });
       
        
        // end resume section

    } else {
        // for navbar
        if (window.scrollY >= 100) {
            navbar.classList.remove("dark");
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.add("text-black");
                navItem[i].classList.remove("text-white");
            }
            imgNav.setAttribute("src", "assets/img/public/logo-2-inverted-removebg-preview.png")
            navbarTogglerIcon.classList.remove("navarToggleIcon");
            navbarToggler.classList.remove("navbarToggler")


        }
        // end for navbar

        // all section
        document.querySelectorAll("h3").forEach(el => {
            el.classList.remove("text-white");
        });
        document.querySelectorAll("h2").forEach(el => {
            el.classList.remove("text-white");
        });
        document.querySelectorAll("section").forEach(el => {
            el.classList.remove("dark--modeColor");
        });
        document.querySelectorAll("label").forEach(el => {
            el.classList.remove("text-white");
        });
        document.querySelectorAll("p").forEach(el => {
            el.classList.remove("text-white");
        });
        document.querySelectorAll("i").forEach(el => {
            el.classList.remove("text-white");
        });
       
        document.querySelectorAll(".info--forMe .list-group-item").forEach(el => {
            el.classList.remove("bg-black");
            el.classList.remove("text-white");
        });
        document.querySelectorAll(".contect-work-tab .nav-item button").forEach(el => {
          
            el.classList.remove("text-white");
        });
        document.querySelector(".download--cv").classList.add("text-white");
       
        document.querySelectorAll(".Expertise--item  a").forEach(el => {
           
            el.classList.remove("text-white");
        });
        document.querySelectorAll(".item--blog  a").forEach(el => {
           
            el.classList.remove("text-white");
        });
        document.querySelector(".the--end p").classList.add("text-white")
        // end all section

    }
});

//   end light and dark mode
