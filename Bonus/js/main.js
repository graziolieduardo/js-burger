// Slider 
const slide = document.querySelectorAll('.ms_ing-box');
console.log(slide);
const next = document.getElementById('slide-right');
const prev = document.getElementById('slide-left');


let currentActive = 0;

// next button 
next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > slide.length - 1) {
        currentActive = slide.length - 1;
    }

    removeClass(slide);
    update(slide);
    console.log(currentActive);
})

// prev button 
prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 0;
    }

    update(slide);
    console.log(currentActive);
})


// Calcolo Prezzo 

const ingAdd = document.querySelectorAll('.ms_ing-add'); 
console.log(ingAdd);
const btnCalc = document.getElementById('ms_calc-btn');
const price = document.getElementById('price');
const discount = document.getElementById('discount');
let discountCoupons = ['43532FEABDE', '23154DAEFCD'];

btnCalc.addEventListener('click', () => {
    let defaultPrice = 50;
    let ingPrice = 0;
    
    for (let i = 0; i < ingAdd.length; i++) {
        if (ingAdd[i].checked)
        ingPrice += parseInt(ingAdd[i].value);
    }
    
    if (discountCoupons.includes(discount.value)) {
        finalPrice = (defaultPrice + ingPrice) * .8;
    } else {
        finalPrice = defaultPrice + ingPrice;
    }
    
    price.innerHTML = '$' + finalPrice.toFixed(2);
    console.log(finalPrice);
});

// functions 
function update(nodeList) {
    for (let i = 0; i < slide.length; i++) {
        if (i == currentActive) {
            nodeList[i].classList.add('active');
        } else {
            nodeList[i].classList.remove('active');
        }
    }
}

function removeClass(nodeList) {
    nodeList.forEach((box) => {
        box.classList.remove('active');
    })
}
