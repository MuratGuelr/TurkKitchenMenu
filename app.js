const menu = [
  {
    id: 1,
    title: "Mantı",
    category: "Turkey",
    price: 10.99,
    img:
      "https://i.lezzet.com.tr/images-xxlarge-secondary/manti-nasil-pisirilir-9853d099-517c-4e89-be1c-960b703dcb8e.jpg",
    desc: `İnce açılmış yufkanın dikdörtgen şeklinde kesilmesiyle ve içerisine kıyma konulmasıyla yapılan Türk mutfağına has yemeklerden bir tanesidir.`,
  },
  {
    id: 2,
    title: "Baklava",
    category: "Turkey",
    price: 7.99,
    img:
      "https://www.imamcagdas.com/normal-baklava-27-baklavalar-imam-cagdas-273-27-B.jpg",
    desc: `İnce açılmış yufkadan yapılır ve Türk mutfağının en meşhur tatlılarından bir tanesidir. Yufkanın arasına ceviz, Antep fıstığı ve kaymak gibi lezzetlerden konulur. `,
  },
  {
    id: 3,
    title: "Lahmacun",
    category: "Turkey",
    price: 8.99,
    img:
      "https://cdn.ye-mek.net/App_UI/Img/out/650/2021/01/hazir-lavastan-pratik-lahmacun-resimli-yemek-tarifi(15).jpg",
    desc: `Hamurun ince bir şekilde açılmasıyla yapılan ve üzerine kıyma, maydanoz, soğan, karabiber, sarımsak, kırmızı biber gibi malzemeler konan yiyecektir.`,
  },
  {
    id: 4,
    title: "Aşure",
    category: "Turkey",
    price: 5.99,
    img:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2014/10/asure-site-tarif.jpg",
    desc: `Bereketin, beraberliğin ve birliğin simgesi olarak bilinir. Buğdaydan, kuru incire kadar pek çok malzemeyle yapılabilir.`,
  },
  {
    id: 5,
    title: "Yaprak Sarma",
    category: "Turkey",
    price: 12.99,
    img:
      "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/zeytinyagli_sarma.webp",
    desc: `Türk mutfağının en eşsiz lezzetleri arasında yer alır. Yaprak sarması ya da dolması adlarıyla bilinir. `,
  },
  {
    id: 6,
    title: "Tandır Kebabı",
    category: "Turkey",
    price: 9.99,
    img:
      "https://www.kulturportali.gov.tr/repoKulturPortali/small/PetekIcon/yozgattandirkebabai_20180710165526382.jpg",
    desc: `Kuzu etinin sinirlerinden arındırılması ve yağlarının çıkarılması ile yapılır. Binlerce yıldır Türk kültüründe bulunan geleneksel yemeklerden biridir.`,
  },
  {
    id: 7,
    title: "Sütlaç",
    category: "Turkey",
    price: 15.99,
    img:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2019/04/lokanta-usulu-sutlac-tarifi.jpg",
    desc: `Sütlü aş adıyla da bilinen sütlaç; süt, şeker, nişasta ve pirinçten yapılır. Türk mutfağında sütlü tatlılar arasında en popüler lezzetlerden bir tanesidir. `,
  },
  {
    id: 8,
    title: "Enginar Dolması",
    category: "Turkey",
    price: 12.99,
    img:
      "https://www.yilmazmandira.com/wp-content/uploads/2020/08/enginar-dolmas%C4%B1-1.jpg",
    desc: `Zeytinyağlı yemekler arasında başı çeker. Türk mutfağının en popüler lezzetleri arasında yer alır.`,
  },
  {
    id: 9,
    title: "Menemen",
    category: "Turkey",
    price: 3.99,
    img:
      "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/ykvmayiswebsite23.webp",
    desc: `Yumurta, domates ve sivri biber ile yapılan bir yemek çeşididir. İçerisine soğan koyup koymamak isteğe bağlıdır.`,
  },
  {
    id: 10,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 11,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 12,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 13,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 14,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 15,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 16,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 17,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 18,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// For Buttons and Menus

const buttonSection = document.querySelector(".btn-container");
const menuSection = document.querySelector(".section-center")


// For make buttons

const createButtons = () => {
let allButtons = `
<button id="all" class="btn btn-outline-secondary btn-item" type="button">
All
</button>
<button id="turkey" class="btn btn-outline-success btn-item" type="button">
Turkey
</button>
<button id="korea" class="btn btn-outline-secondary btn-item" type="button">
Korea
</button>
<button id="japan" class="btn btn-outline-secondary btn-item" type="button">
Japan
</button>
<button id="china" class="btn btn-outline-secondary btn-item" type="button">
China
</button>
`
buttonSection.innerHTML = allButtons;
}
createButtons();

// Creating the Food Part

const createFoods = (food) => {
  let html = `
  <div class="menu-items col-lg-6 col-sm-12">
  <img class="photo" src="${food.img}" alt="${food.title}">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${food.title}</h4>
      <h4 class="price">${food.price}</h4>
    </div>
    <div class="menu-text">${food.desc}</div>
  </div>
</div>`
return html;
}

// Listing All Foods

const listAllFoods = () => {
  let allFoods="";

  menu.map(item =>{
    allFoods += createFoods(item)
  })
  menuSection.innerHTML = allFoods;
}

// Showing All Foods at the HomePage

document.addEventListener("DOMContentLoaded",listAllFoods);

//List of Korean Foods
const listKoreaFoods = () => {
  let koreaFoods="";

  menu.map(item => {
    if(item.category === "Korea"){
      koreaFoods += createFoods(item)
    }
  })
  menuSection.innerHTML = koreaFoods;
}
document.querySelector("#korea").addEventListener("click",listKoreaFoods);

// List of Turkey Foods

const listTurkeyFoods = () => {
  let TurkeyFoods="";

  menu.map(item =>{
    if(item.category === "Turkey"){
      TurkeyFoods += createFoods(item)
    }
  })
  menuSection.innerHTML = TurkeyFoods;
}
document.querySelector("#turkey").addEventListener("click", listTurkeyFoods);

// List of Japonise Foods
const listJapanFoods = () => {
  let japanFoods="";

  menu.map(item => {
    if(item.category === "Japan"){
      japanFoods += createFoods(item)
    }
  })
  menuSection.innerHTML = japanFoods;
}
document.querySelector("#japan").addEventListener("click",listJapanFoods);

//List of China Foods
const listChinaFoods = () => {
  let chinaFoods="";

  menu.map(item => {
    if(item.category === "China"){
      chinaFoods += createFoods(item)
    }
  })
  menuSection.innerHTML = chinaFoods;
}
document.querySelector("#china").addEventListener("click",listChinaFoods);

// Get List of all Foods When button is clicked.
document.querySelector("#all").addEventListener("click",listAllFoods)