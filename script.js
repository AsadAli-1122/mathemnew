const chc = document.querySelector('#shopping-cart-checkbox');
var element = document.getElementById("SideNav");
function FuncClick(){
    if(chc.checked){
        element.classList.remove("-left-[17rem]");
        element.classList.add("left-0");
    }else{
        element.classList.remove("left-0");
        element.classList.add("-left-[17rem]");
        }
}
const chka = document.querySelector('#Shopping-cartbtn');
var element2 = document.getElementById("Shopping-cart-menu");
function FuncClick2(){
    if(chka.checked){
        element2.classList.add("shop-visible");
        element2.classList.remove("hide-visible");
    }else{
        element2.classList.add("hide-visible");
        element2.classList.remove("shop-visible");
        }
}


var count = 1;
const RangeValue = document.getElementById("Range");
RangeValue.value=count;

const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");
const totalCount = document.getElementById("total-count");
totalCount.innerHTML = count;
const handleDecrement = () => {
    if(count > 1){
        count--;
        totalCount.innerHTML = count;
        RangeValue.value=count;
    }
};
const handleIncrement = () => {
    if(count < 10){
        count++;
        totalCount.innerHTML = count;
        RangeValue.value=count;
    } 
};
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);

// const x = (document.getElementById('product_1').parentElement.parentElement.firstElementChild);
// console.log(x);

function clickToOpen(product){
    const pre_product = document.getElementById("pre_product");
    const next_product = document.getElementById("next_product");
    var product_id = product.replace('product_','');
    var pre = parseInt(product_id)-1;
    var next = parseInt(product_id)+1;
    if (pre == 0) {
        pre_product.style.visibility ="hidden";
        next_product.dataset.pre = 'product_'+next;
    } else {
        pre_product.style.visibility ="visible";
        pre_product.dataset.pre = 'product_'+pre;
        next_product.dataset.pre = 'product_'+next;
    }
    if(next == 7){
        next_product.style.visibility='hidden';
    }else{
        next_product.style.visibility ='visible'
    }
    document.getElementById('product_bg').classList.remove('hidden');
    document.getElementById('openProduct').classList.remove('hidden');
    const fixedOffPrice = document.getElementById('fixed_off_price');
    const fixedProductImage = document.getElementById('fixedProductImage');
    const fixedfield = document.getElementById('fixed_field');
    const fixedfieldImg = document.getElementById('fixed_field_img');
    const fixedname = document.getElementById("fixed_name");
    const fixedWeight = document.getElementById("fixed_weight");
    const fixedAddress = document.getElementById("fixed_address");
    const fixedOffPricein = document.getElementById("fixed_off_price_in");
    const fixedPrice = document.getElementById("fixed_price");
    const fixedPricePerKG = document.getElementById("fixed_price_perKG");
    const fixedMax = document.getElementById("fixed_max");
    const off_price1 = document.getElementById(product).children[0].children[0].children[0].innerText;
    const product_src = document.getElementById(product).children[1].children[0].src;
    const field1 = document.getElementById(product).children[2].children[0].innerText;
    const field1Img = document.getElementById(product).children[2].children[1].children[0].src;
    const product_name = document.getElementById(product).children[3].children[0].innerText;
    const productWeight= document.getElementById(product).children[4].children[0].innerText;
    const productAddress = document.getElementById(product).children[4].children[0].innerText;
    const productOffPriceIn = document.getElementById(product).children[5].children[0].children[0].innerText;
    const productPrice = document.getElementById(product).children[5].children[0].children[1].innerText;
    const productPricePerKG = document.getElementById(product).children[5].children[1].children[0].innerText;
    const productMax = document.getElementById(product).children[5].children[1].children[1].innerText;
    fixedOffPrice.innerText=off_price1;
    fixedProductImage.src=product_src;
    fixedfield.innerText=field1;
    fixedfieldImg.src=field1Img;
    fixedname.innerText=product_name;
    fixedWeight.innerText=productWeight;
    fixedAddress.innerText=productAddress;
    fixedOffPricein.innerText=productOffPriceIn;
    fixedPrice.innerText=productPrice;
    fixedPricePerKG.innerText=productPricePerKG;
    fixedMax.innerText=productMax;

    const name = document.getElementById('demo');
    name.innerText = product_name;
    var scrol = document.getElementById('scroll');
    if (scrol.scrollTop > 20) {
        name.classList.remove('hidden');
        document.getElementById('fixed_off_price').classList.remove('hidden');
    } else {
        name.classList.add('hidden');
        document.getElementById('fixed_off_price').classList.add('hidden');
    }
};
function clickToClose(){
    document.getElementById('product_bg').classList.add('hidden');
    document.getElementById('openProduct').classList.add('hidden');
}


function nextProduct(next){
    dev(next);
}
function preProduct(next){
    dev(next);
}
function dev(next) {
    const next1 = document.getElementById(next);
    const product =next1.getAttribute('data-pre');
    const pre_product = document.getElementById("pre_product");
    const next_product = document.getElementById("next_product");
    var product_id = product.replace('product_','');
    var pre = parseInt(product_id)-1;
    var next = parseInt(product_id)+1;
    if (pre == 0) {
        pre_product.style.visibility ="hidden";
    } else {
        pre_product.style.visibility ="visible";
        pre_product.dataset.pre = 'product_'+pre;
        next_product.dataset.pre = 'product_'+next;
    }
    if(next == 7){
        next_product.style.visibility='hidden';
    }else{
        next_product.style.visibility ='visible'
    }
    const fixedOffPrice = document.getElementById('fixed_off_price');
    const fixedProductImage = document.getElementById('fixedProductImage');
    const fixedfield = document.getElementById('fixed_field');
    const fixedfieldImg = document.getElementById('fixed_field_img');
    const fixedname = document.getElementById("fixed_name");
    const fixedWeight = document.getElementById("fixed_weight");
    const fixedAddress = document.getElementById("fixed_address");
    const fixedOffPricein = document.getElementById("fixed_off_price_in");
    const fixedPrice = document.getElementById("fixed_price");
    const fixedPricePerKG = document.getElementById("fixed_price_perKG");
    const fixedMax = document.getElementById("fixed_max");
    const off_price1 = document.getElementById(product).children[0].children[0].children[0].innerText;
    const product_src = document.getElementById(product).children[1].children[0].src;
    const field1 = document.getElementById(product).children[2].children[0].innerText;
    const field1Img = document.getElementById(product).children[2].children[1].children[0].src;
    const product_name = document.getElementById(product).children[3].children[0].innerText;
    const productWeight= document.getElementById(product).children[4].children[0].innerText;
    const productAddress = document.getElementById(product).children[4].children[0].innerText;
    const productOffPriceIn = document.getElementById(product).children[5].children[0].children[0].innerText;
    const productPrice = document.getElementById(product).children[5].children[0].children[1].innerText;
    const productPricePerKG = document.getElementById(product).children[5].children[1].children[0].innerText;
    const productMax = document.getElementById(product).children[5].children[1].children[1].innerText;
    fixedOffPrice.innerText=off_price1;
    fixedProductImage.src=product_src;
    fixedfield.innerText=field1;
    fixedfieldImg.src=field1Img;
    fixedname.innerText=product_name;
    fixedWeight.innerText=productWeight;
    fixedAddress.innerText=productAddress;
    fixedOffPricein.innerText=productOffPriceIn;
    fixedPrice.innerText=productPrice;
    fixedPricePerKG.innerText=productPricePerKG;
    fixedMax.innerText=productMax;


    const name = document.getElementById('demo');
    name.innerText = product_name;
    var scrol = document.getElementById('scroll');
    if (scrol.scrollTop > 20) {
        name.classList.remove('hidden');
        document.getElementById('fixed_off_price').classList.remove('hidden');
    } else {
        name.classList.add('hidden');
        document.getElementById('fixed_off_price').classList.add('hidden');
    }
};

const chatbox = document.getElementById('ChatBox');
function openChat(){
    chatbox.classList.remove('hidden');
};
function closeChat(){
    chatbox.classList.add('hidden');
};


// const fixedOffPrice = document.getElementById('fixed_off_price');

var scrol = document.getElementById('scroll');
    if (scrol.scrollTop > 20) {
        document.getElementById("demo").classList.remove('hidden');
        document.getElementById('fixed_off_price').classList.remove('hidden');
    } else {
        document.getElementById("demo").classList.add('hidden');
        document.getElementById('fixed_off_price').classList.add('hidden');
    }
function scrollFunction() {
    var scrol = document.getElementById('scroll');
    if (scrol.scrollTop > 20) {
        document.getElementById("demo").classList.remove('hidden');
        document.getElementById('fixed_off_price').classList.remove('hidden');

    } else {
        document.getElementById("demo").classList.add('hidden');
        document.getElementById('fixed_off_price').classList.add('hidden');
    }
    }


// add to cart function
function addToCart(){
    var a = document.getElementById("dev");
    var b = '<div class="p-3 flex items-start"><div class="w-[50px] h-[50px]"><img src="images/tomato.jpg" alt="" width="100%"></div><div class="w-full flex flex-row justify-between"><div class="flex flex-col justify-between items-start ml-2"><div><p class="text-sm">Creme Fraiche 32% 2dl Arla</p></div><div><p class="text-lg font-bold">53:85</p></div></div><div class="flex justify-center items-center space-x-4"><div id="decrement-count"><button type="image" id="down-arrow" class="bg-gray-500 h-[30px] w-[30px] rounded-full text-3xl font-semibold flex justify-center pb-[3px] items-center cursor-pointer hover:bg-black hover:text-white">-</button></div><div id="total-count" class="text-xl font-semibold w-[50px] flex justify-center items-center pb-1"></div><div id="increment-count" ><button type="image" id="up-arrow" class="bg-gray-500 h-[30px] w-[30px] rounded-full text-3xl font-semibold flex justify-center pb-[3px] items-center cursor-pointer hover:bg-black hover:text-white">+</button></div></div></div></div>';
    a.insertAdjacentHTML("afterend",b);
    
}

document.getElementById('plus_1')


