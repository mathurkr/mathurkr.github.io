// document.getElementById("myName").addEventListener("mouseover",(e)=>{
//     document.getElementById("myName").innerHTML("कबि माथुर");
// });

function getAge(){
    let today = new Date();
    let bday = new Date("June 11, 1998");
    let age = today.getFullYear()-bday.getFullYear();
    let month = today.getMonth()-bday.getMonth();
    if (month<0 || (month===0 && today.getDate()< bday.getDate())){
        age--;
    }
    return age;

}
document.getElementById("age").innerHTML=getAge();