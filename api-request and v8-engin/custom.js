// xml http request ka use fatch se pahle tota tha
// xmal ke under ak readystate hoti hai
/* readyState ke under 5 trh ki state hoti hai:-
0-unsent- request send hi nhi ki hai;
1-opened-reuqest send kr di;
2--header-reseived: requset se header to aya hai pr or kuch nhi aaya;
3-loading: ;
4-done:operation compalate;
*/
// hamaaj xml ajex request bheje pr eska use abhi nhi kiya jata hai pr hame pata hona chahiye
let img=document.querySelector("img");
let h2=document.querySelector("h2");
const requestUrl = "https://randomuser.me/api/";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if(xhr.readyState===4){
    console.log(this.responseText);
    console.log(typeof (this.responseText));
    // aab ham ess string type of ke data ko json me conver karege
    const data=JSON.parse(this.responseText);//json me conver karne ke liye json ka use krte hai or .parse mathod string ko json me convert karta hai
    console.log(data)
    console.log(typeof data)//finaly data ka type object me conver ho hgaya
    var pic=data.results[0].picture.thumbnail;
    var username=data.results[0].login.username;
    console.log(`username:${username}`);
    h2.innerHTML=username;
    console.log(pic);
    img.src=pic;
  }
};
xhr.send();
//console log 

//aap ko ye janke herani hogi ki console.log/console javascript ki gideline  me nhi milata hai 
// kiya console javascript ka part hai techanicaly hai or nhi bhi;
// document.get....... bhi javascript ka part nhi hai
// console ak dev(developer) tool hai brouser ka 

// bhaut se engin hai jo javascript ko runtime envarmenet pardan krate hai 
// jese javascript nodejs ke runtime envarment ka sath run hoti hai ya brouse ke sath use hoti hai
// or nodejs javascript ki liye ak reper hai(jese choclet ka repr)
// or ess reper/nodejs/brouser jo engine ka use kate hai vo hai v8 engin
// v8 engin c++ me likha gaya hai 
// console.log bhi hame v8 engin me hi milta hai 
// or aagr ham ess v8 engin ke code ko dekhe to hame milega ki console.lg ka implementation kese toha hai
// 
// v8 ki repositery > gitnub/v8/v8 > src > ;
// gitnub/v8/v8 > src > d8 > d8-console.cc or d8-console.h
// d8-console.cc me hame console ko code dek sakte hai 



 
