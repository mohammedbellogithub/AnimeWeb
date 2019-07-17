$(function () {
    $("#sidebarToggle").click(function(){
        $("#sidenav").toggle("slow")
    })
});
function redirect() {
    window.open("http://www.toxicwap.com",  '_blank');
}

function nextpage() {
    window.history.forward()
}
function previouspage() {
    window.history.back()
}
document.getElementById("description") = description;

let showChar = 10 ;

let more = description.substring(0 , showChar)
function showMore() {
    if (description.length > showChar) {
        document.getElementById("description").innerHTML = more
    }
}
/* let description = document.getElementById("description");
let dLength = description.length;
let newD = description + "...."
if (dlength > 30) {
    return newD
} else {
    
} */

