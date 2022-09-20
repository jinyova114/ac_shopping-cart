// 設定 webpack 的進入點
import './scss/main.scss'
console.log('JS loaded!')
// 打包 webpack => npm run build

// 縣市物件
const cities = [
  "臺北市",
  "新北市",
  "基隆市",
  "新竹市",
  "桃園市",
  "新竹",
  "宜蘭縣",
  "臺中市",
  "苗栗縣",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "高雄市",
  "臺南市",
  "嘉義市",
  "嘉義縣",
  "屏東縣",
  "澎湖縣"
];
// 產品資料物件包
const items = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    img: "https://i.postimg.cc/vmKjhsfz/Block-jean-1.png",
    price: "3999"
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    img: "https://i.postimg.cc/tTPCDNSm/Block-jean-2.png",
    price: "1299"
  }
];

// Add DOM Object
const shoppingCartArea = document.getElementById("shopping-cart-area");
const shoppingCartItems = document.querySelector(".shopping-cart-area_items");
const form = document.getElementById("a-form");
const formParts = document.querySelectorAll(".part");
const cityOption = document.getElementById("city-option");
const stepControl = document.getElementById("billing-area_step-control");
const steps = stepControl.querySelectorAll(".step");
const btnControl = document.getElementById("btn-control-area");
const nextBtn = document.querySelector(".btn-primary");
const prevBtn = document.querySelector(".btn-outline");

let step = 0;
let itemPriceList = [];

// Render 縣市選項
cities.forEach((city) => {
  cityOption.innerHTML += `<option value="">${city}</option>`;
});

// 功能: Render 購物車產品
function renderShoppingCart() {
  items.forEach((item) => {
    shoppingCartItems.innerHTML += `
      <div id="item-${item.id}" class="item">
          <img src="${item.img}" class="item_image">
          <div class="item_info">
            <div class="item_info_detail">
              <div class="item_info_detail_name">${item.name}</div>
              <div class="item_info_detail_amount-wrapper">
                <div class="amount-minus flex-center cursor-pointer">-</div>
                <div class="amount">1</div>
                <div class="amount-add flex-center cursor-pointer">+</div>
              </div>
            </div>
            <div class="item_info_price">${item.price}</div>
          </div>
        </div>
    `;
  });
}

// 功能: 步驟切換
function handleBtnControlClicked(e) {
  e.preventDefault();
  const nowStep = steps[step];
  if (e.target.matches(".btn-primary") && e.target.innerHTML === "下一步") {
    const nextStep = steps[step + 1];
    nowStep.classList.remove("active-dark");
    nowStep.classList.add("checked");
    nextStep.classList.add("active-light");
    formParts[step].classList.toggle("d-none");
    formParts[step + 1].classList.toggle("d-none");
    step += 1;
  } else if (
    e.target.matches(".btn-outline") &&
    e.target.innerHTML === "上一步"
  ) {
    const prevStep = steps[step - 1];
    nowStep.classList.remove("active-light");
    nowStep.classList.remove("active-dark");
    prevStep.classList.remove("checked");
    prevStep.classList.add("active-dark");
    formParts[step].classList.toggle("d-none");
    formParts[step - 1].classList.toggle("d-none");
    step -= 1;
  }
  setBtnDisabled();
}

function setBtnDisabled() {
  if (step === 0) {
    prevBtn.setAttribute("disabled", "disabled");
  } else {
    prevBtn.removeAttribute("disabled");
  }
  if (step === 2) {
    nextBtn.innerHTML = "確認下單";
  } else {
    nextBtn.innerHTML = "下一步";
  }
}

// 功能: 購物車品項數量增減
function itemAddOrMinus(e) {
  if (e.target.matches(".amount-add") || e.target.matches(".amount-minus")) {
    const amountBox = e.target.parentNode.children[1];
    const itemInfoBox = e.target.parentNode.parentNode.parentNode;
    let amount = Number(amountBox.innerText);

    if (e.target.matches(".amount-add")) {
      amount += 1;
    } else {
      amount -= 1;
    }
    // 若商品數量為零，從購物籃中移除
    if (amount === 0) {
      const itemBox = itemInfoBox.parentNode;
      itemBox.remove();
    }
    amountBox.innerText = amount;
    // 購物車品項金額增減待完成
  }
}

btnControl.addEventListener("click", handleBtnControlClicked);
renderShoppingCart();
shoppingCartArea.addEventListener("click", itemAddOrMinus);
