console.log("page loaded...");

var profile = document.querySelector("#profile");

console.log(profile);

function changeName() {
    profile.innerText = "Laurie Mack";
        console.log(profile.innerText);
}

var requestSpan = document.querySelector("#request");
var connectionsSpan = document.querySelector("#connections");


function acceptRequest(id) {
    var element=document.querySelector(id);
        element.remove();
        requestSpan.innerText--;
        connectionsSpan.innerText++;
}



function deniedRequest(id) {
    var element = document.querySelector(id);
        element.remove();
        requestSpan.innerText--;
            
}



// function approvedRequest() {
//     var approve = document.querySelector(".phil");
//         approve.remove();
//             console.log(approve);
// }



// function rejectRequest() {
//     var reject = document.querySelector(".phil");
//         reject.remove();
//             console.log(reject);
// }