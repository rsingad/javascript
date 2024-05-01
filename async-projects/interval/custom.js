let body=document.querySelector("body");

const randomColor= function(){
    const hex="1234567890ABCDEF";
    let clr="#"
    for(let i=0;i<6;i++){
        clr+=hex[Math.floor(Math.random() * (hex.length))]
        // console.log(clr)
    }
    // body.style.backgroundColor = "clr";
    return clr;
    
}
let intervalID;
const bgchanger =function(){
    if(!intervalID){
        intervalID=setInterval((()=>{
            let x=randomColor();
            console.log(x)
            body.style.backgroundColor=x;
        }),1000)

    }
    // console.log(randomColor())
}
let start=document.querySelector("#start");
start.addEventListener("click",()=>{
    // setInterval(randomColor(),3000);  
    start.disabled=true;
    bgchanger()

})
let stop=document.querySelector("#stop");
stop.addEventListener("click",()=>{
    clearInterval(intervalID);
    start.disabled=false;
    intervalID=null;  
})