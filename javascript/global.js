// Website version
const siteVersion = '1.0.0';
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
