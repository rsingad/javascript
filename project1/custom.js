// target body tag
const body = document.querySelector("body");

// creating main tag
let main = document.createElement("main");
main.className = "main";
main.id = "hero";
main.setAttribute("style", "height:100vh;width:100%;color:white;");
console.log(main);
body.appendChild(main); //append main tag in body

// create heading
let heading = document.createElement("h1");
heading.setAttribute("style", "text-align:center;");
heading.appendChild(document.createTextNode("bg-color schima switch"));
main.appendChild(heading);
//  heading creted-----------

// create main color swicher box
let colorSwicher = document.createElement("div");
colorSwicher.setAttribute(
  "style",
  "display:flex;flex-wrap:wrap;justify-content:space-around;"
);
main.appendChild(colorSwicher);
// main color swicher box creted

// color changer button creating
const clr = ["red", "black", "white", "hotpink", "aqua", "lime"];
clr.forEach((item) => {
  // array ke har item ke liye ak div create kare
  let button = document.createElement("div");
  button.setAttribute("className", "button");
  button.id = [item];
  button.setAttribute(
    `style`,
    `width:400px;height:200px;background-color:${item};margin-top:40px;font-size:1.4rem;text-align:center;`
  );
  let txt = document.createTextNode(item);
  button.appendChild(txt);
  colorSwicher.appendChild(button);
  //   div creted
  // array ke sayek item ya crested div pr click krne pr us div ki jo id hai usse body ka backgrouns color set kiya
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
  //
});

// ak dusytom div banaya jiskoa use ham add me item ko add akre ke liye karege
let add = document.createElement("div");
add.setAttribute("className", "adder");
add.id = "a";
add.setAttribute(
  `style`,
  `width:400px;height:200px;background-color:black;margin-top:40px;font-size:1.4rem;text-align:center;`
);
function addbox() {
    let c=clr[length];
    console.log(c)
  let button = document.createElement("div");
  button.setAttribute("className", "button");
  button.id = clr[clr.length-1];
  button.setAttribute(
    `style`,
    `width:400px;height:200px;background-color:${clr[clr.length-1]};margin-top:40px;font-size:1.4rem;text-align:center;`
  );
  let txt = document.createTextNode(clr[clr.length-1]);
  button.appendChild(txt);
  colorSwicher.appendChild(button);
  //   div creted
  // array ke sayek item ya crested div pr click krne pr us div ki jo id hai usse body ka backgrouns color set kiya
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
}
let txt = document.createTextNode("append a box");
add.appendChild(txt);
add.appendChild(document.createElement("br"));
let input = document.createElement("input");
input.value = "";
add.appendChild(input);
input.addEventListener("change", (e) => {
  // input.value+=e
  clr.push(e.target.value);
  addbox();
//   console.log(e.target.value);
});

colorSwicher.appendChild(add);
console.log(add);
