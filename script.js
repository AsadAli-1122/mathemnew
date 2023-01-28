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


function clickToOpen(name,name2,product,field,name_){
    const Open = document.getElementById(name);
    const Open2 = document.getElementById(name2);
    const fixedProduct = document.getElementById('fixedProduct');
    const fixedfield = document.getElementById('fixed_field');
    const fixedname = document.getElementById("fixed_name");
    const product_src = document.getElementById(product).childNodes[1].src;
    const field1 = document.getElementById(field).innerText;
    const product_name = document.getElementById(name_).innerText;
    fixedProduct.src=product_src;
    fixedfield.innerText=field1;
    fixedname.innerText=product_name;
    Open.classList.remove('hidden');
    Open2.classList.remove('hidden');
};
function clickToClose(name,name2){
    const Close = document.getElementById(name);
    const Close2 = document.getElementById(name2);
    Close.classList.add('hidden');
    Close2.classList.add('hidden');
}

function pre_product(){

}


// const product = document.getElementById("product_name_1").innerText;
// console.log(product);

