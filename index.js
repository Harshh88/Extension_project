let navIcon = document.querySelector(".navbar-icon");
let navImg = document.querySelector(".nav-img");
let navbar = document.querySelector(".navbar");
let body = document.querySelector("body");
let heading = document.querySelector(".heading");
let mainList = document.querySelectorAll(".main-list");
let listA = document.querySelectorAll("ul li a");
let card = document.querySelectorAll(".card");
let cardHeading = document.querySelectorAll(".card-title h1");
let cardPara = document.querySelectorAll(".card-title p");
let cardBtn = document.querySelectorAll(".card-btn");
let cardBtna = document.querySelectorAll(".card-btn a");
let cardToggle = document.querySelectorAll(".card-toggle");
let toggleBtn = document.querySelectorAll(".card-toggle button");
let allBtn = document.querySelector("#allbtn");
let activeBtn = document.querySelector("#activebtn");
let inactiveBtn = document.querySelector("#inactivebtn");
let mainListA = document.querySelectorAll(".main-listA");

let backgroundFlag = true;

navIcon.addEventListener("click",()=>{
    if(backgroundFlag === true){
        body.style.background = "linear-gradient(180deg, #EBF2FC , #EEF8F9)";
        navImg.src = "images/icon-moon.svg";
        navbar.style.backgroundColor = "hsl(200, 60%, 99%)";
        navIcon.style.background = "hsl(0, 0%, 93%)";
        heading.style.color = "black";
        mainList.forEach((item)=>{
            item.style.backgroundColor = "hsl(200, 60%, 99%)";
        });
        listA.forEach((item)=>{
            item.style.color = "black";
        });
        card.forEach((item)=>{
            item.style.backgroundColor = "white";
        });
        cardHeading.forEach((item)=>{
            item.style.color = "black";
        });
        cardPara.forEach((item)=>{
            item.style.color = "hsl(240, 1%, 19%)";
        });
        cardBtn.forEach((item)=>{
            item.style.backgroundColor = "white";
        });
        cardBtna.forEach((item)=>{
            item.style.color = " black";
        });
        cardToggle.forEach((item)=>{
            item.style.backgroundColor = "hsl(226, 11%, 37%)";
        });
        toggleBtn.forEach((btn)=>{
                let state = btn.getAttribute("data-state");
                if(state === "on"){
                    btn.parentElement.style.backgroundColor = "black";
                }
            });

        if(hovered === false){
            
        }    
        backgroundFlag = false;

    }
    else{
        body.style.background = "linear-gradient(180deg, #040918, #091540)";
        navImg.src = "images/icon-sun.svg"
        navbar.style.backgroundColor = "hsl(226, 25%, 17%)";
        navIcon.style.background = "hsl(225, 23%, 24%)";
        heading.style.color = "white";
        mainList.forEach((item)=>{
            item.style.backgroundColor = "hsl(226, 25%, 17%)";
        });
        listA.forEach((item)=>{
            item.style.color = "white";
        });
        card.forEach((item)=>{
            item.style.backgroundColor = "hsl(228, 7%, 14%)";
        });
        cardHeading.forEach((item)=>{
            item.style.color = "white";
        });
        cardPara.forEach((item)=>{
            item.style.color = "hsl(226, 11%, 64%)";
        });
        cardBtn.forEach((item)=>{
            item.style.backgroundColor = "hsl(225, 23%, 24%)";
        });
        cardBtna.forEach((item)=>{
            item.style.color = "white";
        });
        cardToggle.forEach((item)=>{
            item.style.backgroundColor = "hsl(3, 71%, 56%)";
        });
        
        toggleBtn.forEach((btn)=>{
                let state = btn.getAttribute("data-state");
                if(state === "on"){
                    btn.parentElement.style.backgroundColor = "hsl(3, 47%, 53%)";
                }
            });

        backgroundFlag = true;
    }
});

// if(backgroundFlag === true){
//     mainList.forEach((item)=>{
//             item.addEventListener("mouseover",()=>{
//                 item.style.backgroundColor = "hsl(3, 47%, 53%)";
//                 item.style.transform = "scale(1.1)";
//             });
//             item.addEventListener("mouseout",()=>{
//                 item.style.backgroundColor = "";
//                 item.firstElementChild.style.color = "";
//                 item.style.transform = "scale(1)";
//             });
//         });
// }else{
//     mainList.forEach((item)=>{
//             item.addEventListener("mouseover",()=>{
//                 item.style.backgroundColor = "black";
//                 item.firstElementChild.style.color = "white";
//                 item.style.transform = "scale(1.1)";
//             });
//             item.addEventListener("mouseout",()=>{
//                 item.style.backgroundColor = "";
//                 item.firstElementChild.style.color = "";
//                 item.style.transform = "scale(1)";
//             });
//         });
// }

toggleBtn.forEach((btn)=>{
    btn.style.transition = "left 0.0s ease";

    btn.addEventListener("click",()=>{
        let state = btn.getAttribute("data-state");
        let toggleParent = btn.parentElement;

        if(state === "off"){
            btn.style.left = "1.3rem";
            btn.setAttribute("data-state", "on");
            toggleParent.style.backgroundColor = "hsl(3, 47%, 53%)";
            if(backgroundFlag === false){
                toggleParent.style.backgroundColor = "black";
            }
        }else{
            btn.style.left = "0";
            btn.setAttribute("data-state", "off");
            toggleParent.style.backgroundColor = "hsl(3, 71%, 56%)";
            if(backgroundFlag === false){
                toggleParent.style.backgroundColor = "hsl(226, 11%, 37%)";
            }
        }
    });
});


cardBtn.forEach((btn)=>{
    btn.addEventListener("click",(evt)=>{
        let currentCard = btn.closest(".card");
        currentCard.remove();
    });
})

let hovered = true;
let activeHover = true;
let inactiveHover = true;

inactiveBtn.addEventListener("click",()=>{
    if(backgroundFlag === false){
        if(inactiveHover === false){
            inactiveBtn.style.backgroundColor = "white";
            inactiveBtn.firstElementChild.style.color = "black";
            toggleBtn.forEach((item)=>{
                    let state2 = item.getAttribute("data-state");
                    if(state2 === "on" || state2 === "off"){
                        item.closest(".card").style.display = "inline-block";
                    }
                });
            inactiveHover = true;
        }else if(inactiveHover === true){
            inactiveBtn.style.backgroundColor = "black";
            inactiveBtn.firstElementChild.style.color = "white";
            allBtn.style.backgroundColor = "white";
            allBtn.firstElementChild.style.color = "black";
            activeBtn.style.backgroundColor = "white";
            activeBtn.firstElementChild.style.color = "black";
            toggleBtn.forEach((item)=>{
                    let state2 = item.getAttribute("data-state");
                    if(state2 === "on"){
                        item.closest(".card").style.display = "none";
                    }else if(state2 === "off"){
                        item.closest(".card").style.display = "inline-block";
                    }
                });
            // inactiveHover = false;
        }
    }
    else if(backgroundFlag === true){
        if(inactiveHover === true){
                inactiveBtn.style.backgroundColor = "hsl(3, 47%, 53%)";
                allBtn.style.backgroundColor = "hsl(226, 25%, 17%)";
                activeBtn.style.backgroundColor = "hsl(226, 25%, 17%)";
                toggleBtn.forEach((item)=>{
                    let state2 = item.getAttribute("data-state");
                    if(state2 === "on"){
                        item.closest(".card").style.display = "none";
                    }else if(state2 === "off"){
                        item.closest(".card").style.display = "inline-block";
                    }
                });
                // inactiveHover = false;
            }
            else if(inactiveHover === false){
                inactiveBtn.style.backgroundColor = "hsl(226, 25%, 17%)";
                toggleBtn.forEach((item)=>{
                    let state2 = item.getAttribute("data-state");
                    if(state2 === "on" || state2 === "off"){
                        item.closest(".card").style.display = "inline-block";
                    }
                });
                inactiveHover = true;
            }
    }
})

activeBtn.addEventListener("click",()=>{
    if(backgroundFlag === false){
        if(activeHover === false){
            activeBtn.style.backgroundColor = "white";
            activeBtn.firstElementChild.style.color = "black";
            toggleBtn.forEach((item)=>{
                    let state2 = item.getAttribute("data-state");
                    if(state2 === "off" || state2 === "on"){
                        item.closest(".card").style.display = "inline-block";
                    }
                });
            activeHover = true;
        }else if(activeHover === true){
            activeBtn.style.backgroundColor = "black";
            activeBtn.firstElementChild.style.color = "white";
            allBtn.style.backgroundColor = "white";
            allBtn.firstElementChild.style.color = "black";
            inactiveBtn.style.backgroundColor = "white";
            inactiveBtn.firstElementChild.style.color = "black";
            toggleBtn.forEach((item)=>{
                    let state2 = item.getAttribute("data-state");
                    if(state2 === "off"){
                        item.closest(".card").style.display = "none";
                    }else if(state2 === "on"){
                        item.closest(".card").style.display = "inline-block";
                    }
                });
            // activeHover = false;
        }
    }
    else if(backgroundFlag === true){
        if(activeHover === true){
                activeBtn.style.backgroundColor = "hsl(3, 47%, 53%)";
                allBtn.style.backgroundColor = "hsl(226, 25%, 17%)";
                inactiveBtn.style.backgroundColor = "hsl(226, 25%, 17%)";
                toggleBtn.forEach((item)=>{
                    let state2 = item.getAttribute("data-state");
                    if(state2 === "off"){
                        item.closest(".card").style.display = "none";
                    }else if(state2 === "on"){
                        item.closest(".card").style.display = "inline-block";
                    }
                });
                // activeHover = false;
            }
            else if(activeHover === false){
                activeBtn.style.backgroundColor = "hsl(226, 25%, 17%)";
                toggleBtn.forEach((item)=>{
                    let state2 = item.getAttribute("data-state");
                    if(state2 === "off" || state2 === "on"){
                        item.closest(".card").style.display = "inline-block";
                    }
                });
                activeHover = true;
            }
    }
});

allBtn.addEventListener("click",(evt)=>{
    if(backgroundFlag === false){
        if(hovered === false){
            allBtn.style.backgroundColor = "white";
            allBtn.firstElementChild.style.color = "black";
            // activeBtn.style.backgroundColor = "white";
            // activeBtn.firstElementChild.style.color = "black";
            // inactiveBtn.style.backgroundColor = "white";
            // inactiveBtn.firstElementChild.style.color = "black"
            hovered = true;
        }
        else if(hovered === true){
            allBtn.style.backgroundColor = "black";
            allBtn.firstElementChild.style.color = "white";
            activeBtn.style.backgroundColor = "white";
            activeBtn.firstElementChild.style.color = "black";
            inactiveBtn.style.backgroundColor = "white";
            inactiveBtn.firstElementChild.style.color = "black"
            toggleBtn.forEach((item)=>{
                    let state2 = item.getAttribute("data-state");
                    if(state2 === "off" || state2 === "on"){
                        item.closest(".card").style.display = "inline-block";
                    }
                });
            // hovered = false;
        }
    }else if(backgroundFlag === true){
            if(hovered === true){
                allBtn.style.backgroundColor = "hsl(3, 47%, 53%)";
                activeBtn.style.backgroundColor = "hsl(226, 25%, 17%)";
                inactiveBtn.style.backgroundColor = "hsl(226, 25%, 17%)";
                toggleBtn.forEach((item)=>{
                    let state2 = item.getAttribute("data-state");
                    if(state2 === "off" || state2 === "on"){
                        item.closest(".card").style.display = "inline-block";
                    }
                })
                // hovered = false;
            }
            // else if(hovered === false){
            //     allBtn.style.backgroundColor = "hsl(226, 25%, 17%)";
            //     hovered = true;
            // }
    }
});

// function showOnlyOn(){
//     toggleBtn.forEach((btn)=>{
//         if(btn.getAttribute("data-state") === "on"){
//             btn.style.display = "inline-block";
//         }else{
//             btn.style.display = "none";
//         }
//     });
// }