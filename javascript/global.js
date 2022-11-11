// Website version
const siteVersion = '0.3.2';
document.getElementById('revision').innerHTML = "v" + siteVersion;

// Email
const email = "kwilkinsrd@gmail.com";
document.getElementById('Email').innerHTML = email;

// Site navigation
function responsiveNavigation() {
    let x = document.getElementById("siteNavigation");
    if (x.className === "nav") {
      x.className += " responsive";
    }
    else {x.className = "nav";}
}