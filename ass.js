if (localStorage.getItem("koko") === null) {
    localStorage.setItem("koko", "[]")
}


function display() {

    let info1 = document.getElementById("info1").value;
    let info2 = document.getElementById("info2").value;
    let info3 = document.getElementById("info3").value;
    let info4 = document.getElementById("info4").value;
    let info5 = document.getElementById("info5").value;
    let info6 = document.getElementById("info6").value;


    console.log(info1)
    console.log(info2)
    console.log(info3)
    console.log(info4)
    console.log(info5)
    console.log(info6)

    let newObj = {
        info1,
        info2,
        info3,
        info4,
        info5,
        info6
    }
    console.log(newObj)

    let secondArr = JSON.parse(localStorage.getItem("koko"));
    let newArr = [...secondArr, newObj];
    localStorage.setItem("koko", JSON.stringify(newArr))


    if (info1 == "" || info2 == "" || info3 == "" || info4 == "" || info5 == "" || info6 == ""){
        alert("input can not be empty")

    } else if (secondArr.some(secondArr => secondArr.info3 === info3)){
        alert("Email exists")

    } else if (info5 !== info6){
        alert("Passwords do not match")
        
    } else if(info5.length <= 7){
        alert("password can not be less than 8 characters")

    } else{
        alert("sign up successfull")
        window.location.href = "login.html"
    }

}
// console.log(tom)

function displayTwo() {
    let tom = document.getElementById("tom").value;
    let tim = document.getElementById("tim").value;

    let newARR = localStorage.getItem("koko");
    let secondArr = JSON.parse(newARR);
    console.log(secondArr, 33)
    console.log(tom)
    console.log(tim)

    for (let i = 0; i < secondArr.length; i++) {

        if (secondArr[i].info3 === tom && secondArr[i].info6 === tim) {
            alert("success")
            window.location.href = "dashboard.html"
        } 
    } 
}

function hide(){
    let tim = document.getElementById("tim");

    if(tim.type ==='password'){
        tim.type = "text";      
    } else{
        tim.type = "password"; 
    }
}

//     const editBtn = (i) => {
//     let newARR = localStorage.getItem("koko");
//     let secondArr = JSON.parse(newARR);

//     let firstName = prompt("Enter your first name", secondArr[i].info1);
//     let lastName = prompt("Enter your last name", secondArr[i].info2);
//     let emailKey = prompt("Enter your email", secondArr[i].info3);
//     let phoneNum = prompt("Enter your Tel Number", secondArr[i].info4);
//     let passwordKey = prompt("Enter your password", secondArr[i].info5)

//     let newInfo = {
//         firstName,
//         lastName,
//         emailKey,
//         phoneNum,
//         passwordKey
//     }
//     secondArr.splice(i, 1, newInfo);
//     localStorage.setItem("koko", JSON.stringify(secondArr))

// }

