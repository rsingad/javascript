let images = [
  {
    categary: "books",
    productname: "c language book",
    prize: 317,
    photo:
      "https://th.bing.com/th?id=OIP.dp78FZl9yCrjnV_eUkMHNAHaQ8&w=153&h=350&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    categary: "books",
    productname: "javaScropt",
    prize: 299,
    photo:
      "https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1598158772928-2LW4G11DVYY7VWFH6EOO/javascript-the-definitive-edition-mockup",
  },
  {
    categary: "books",
    productname: "python",
    prize: 359,
    photo:
      "https://th.bing.com/th/id/OIP.tVIqnGRhlGy9uz7yPkrQYwAAAA?rs=1&pid=ImgDetMain",
  },
  {
    categary: "cloth",
    productname: "checks red shirt",
    prize: 499,
    photo:
      "https://th.bing.com/th/id/OIP.5HZGk8xsKy56lty1DGNmgQHaJ2?w=1020&h=1356&rs=1&pid=ImgDetMain",
  },
  {
    categary: "cloth",
    productname: "black & white lines shirt",
    prize: 370,
    photo:
      "https://i.pinimg.com/originals/a9/fb/84/a9fb849a0884e392387be08922dbf825.jpg",
  },
  {
    categary: "cloth",
    productname: "black jeans",
    prize: 799,
    photo:
      "https://i5.walmartimages.com/asr/04d5851e-bee7-4e23-ae11-80e6e124998b_1.80341b8a3d4178d70363c2e56a0b0a80.jpeg",
  },
  {
    categary: "cloth",
    productname: "yellow t-shirt",
    prize: 644,
    photo:
      "https://images.asos-media.com/products/puma-essentials-t-shirt-in-yellow/12109676-1-yellow?$n_640w$&wid=513&fit=constrain",
  },
  {
    categary: "cloth",
    productname: "green lineing shirt",
    prize: 400,
    photo:
      "https://th.bing.com/th/id/OIP.gChmyJl-6hZXvzjzViRJ1QHaJ4?rs=1&pid=ImgDetMain",
  },
  {
    categary: "shoes",
    productname: "campus",
    prize: 299,
    photo:
      "https://n2.sdlcdn.com/imgs/b/f/6/Campus-White-Sports-Shoes-SDL047146606-1-32044.jpg",
  },
  {
    categary: "shoes",
    productname: "puma",
    prize: 4939,
    photo:
      "https://th.bing.com/th/id/OIP.Zc0SK5K8pFkJFsbHxtb4xAHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
  },
  {
    categary: "shoes",
    productname: "redTape",
    prize: 3099,
    photo:
      "https://shoebrands.in/store/wp-content/uploads/2020/11/Red-tape-sport-shoes.jpg",
  },
  {
    categary: "shoes",
    productname: "sport",
    prize: 799,
    photo:
    "https://th.bing.com/th/id/OIP.H-6bVtU0CS4-0SIYqOBLFQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    categary: "shoes",
    productname: "addidas",
    prize: 2299,
    photo:
      "https://th.bing.com/th/id/OIP.eDPNgb3w3WIwj6L3JC5uMQHaIW?rs=1&pid=ImgDetMain",
  },
  {
    categary: "home",
    productname: "1bhk kothi",
    prize: 50000,
    photo:
      "https://th.bing.com/th/id/R.11f1956448225572fd63bd499e5bcdff?rik=ytHQ7%2fznb26kAw&riu=http%3a%2f%2fthehousedesignhub.com%2fwp-content%2fuploads%2f2021%2f02%2fsamrudhi-Dev-1BHK-copy-1024x682.jpg&ehk=TgL6KBLAERBsFn%2f%2bI3V%2f4dbpPbTqvYhNzXmuKNI1nKw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    categary: "home",
    productname: "2bhk kothi",
    prize: 80000,
    photo:
      "https://happho.com/wp-content/uploads/2022/07/image01.jpg",
  },
  {
    categary: "home",
    productname: "laguagry banglo",
    prize: 500000,
    photo:
      "https://img.iproperty.com.my/my-iproperty/premium/1200x630-fit/w-n1c231181a21-449e-48da-984f-1e35a3d81a29_866x1154.jpeg",
  },
  {
    categary: "home",
    productname: "1bhk flat",
    prize: 30000,
    photo:
      "https://th.bing.com/th/id/OIP.YconY4asGiQzIBk1IPxIsgAAAA?rs=1&pid=ImgDetMain",
  },
];
let myCard=(items)=>(`
<div class="card">
    <div class="cardimg">
      <img
        src="${items.photo}"
        alt=""
      />
    </div>
    <div class="cardbody">
        <h3>${items.productname}</h3>
        <h2><sup><code></code>$</sup>${items.prize}</h2>
    </div>
  </div>
`);
let main = document.querySelector("#main");
images.forEach((item, index) => {
  main.innerHTML +=myCard(item);
});
