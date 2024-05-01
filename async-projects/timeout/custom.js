// setTimeout(() => {
//   console.log("ramesh");
// }, 2000);
const sayhellow=function(){
    console.log(`hellow ramesh`)
}
setTimeout(sayhellow,2000)

const chandeText=function(){
    document.querySelector("h1").innerHTML="kiya dek raha hai kaliye";
}


// stop toime out function
function stoptimeout(){
    clearTimeout(changeme)
    console.log("stop")
}
const changeme=setTimeout(chandeText,3000);
document.querySelector("#stop").addEventListener("click",stoptimeout)
