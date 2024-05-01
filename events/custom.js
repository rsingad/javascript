let imgall=document.querySelectorAll("img");
let ul=document.querySelector("ul");
ul.addEventListener("click",(e)=>{
    console.log("unorder list")

    // e.stopPropagation()
},true)//allr ese true krte hai clg me pahle "unorde list" print hoga bad me "inner img" print hoga
imgall.forEach((item,index)=>{
    item.addEventListener("click",(e)=>{
        console.log(e.target.src)
        alert(`click ${index}`)
        let removeEl=e.target.parentNode;//tageted li element
        // e.target.parentNode.style.display="none";
        // ya
        // removeEl.remove()
        // ya
        removeEl.parentNode.removeChild(removeEl);
        //  remover* ka parentNode* UL hai or ul ka removeChild* karana hai vovo store hai *removeEl me;

        
    },false)
    // Events= type ,timestamp ,defultPrevented ,target ,toElement ,currentTarget
    // clientX ,clientY,screenX ,screenY
    // altkey ,clientkey,shiftkey ,keyCode

})
// addEventListener ke under 3 function kause kiya jata hai "event" "function" "opetional-pramanet" third 
// pramert ki valur by defult false hoti hai
var github=document.querySelector("#github");
github.addEventListener("click",(e)=>{
    // e.preventDefault();
    // e.stopPropagation();
    alert("click on github");

})
