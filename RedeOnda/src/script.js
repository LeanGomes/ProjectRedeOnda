
function showRegister() {
    
    document.getElementById("show-Register").style.display = "block";
    document.getElementById("show-Login").style.display = "none";
   
    document.getElementById("span-Login").style.color = "rgba(130, 130, 131, 0.795)"
    document.getElementById("span-Register").style.color = "black"
}

function showLogin() {

    //document.getElementById("show-Register").style.display = "none";
    document.getElementById("show-Login").style.display = "block";
    
    document.getElementById("show-Register").style.display = "none";
    document.getElementById("span-Register").style.color = "rgba(130, 130, 131, 0.795)"
    document.getElementById("span-Login").style.color = "black"
    

}

document.getElementById('span-Register').addEventListener('click', showRegister);
document.getElementById('span-Login').addEventListener('click', showLogin);

