document.getElementById('btn-calc').addEventListener('click',
    function() {
        let discountCoupons = ['43532FEABDE', '23154DAEFCD'];
        let defaultPrice = 50; 
        let ingPrice = 0;
        let element = document.getElementsByClassName('ing-add');
        
        for (let i = 0; i < element.length; i++) {
            if (element[i].checked)
                ingPrice += parseInt(element[i].value);
        }

        let discount = document.getElementById('sale').value;
        console.log(discount)
        if (discountCoupons.includes(discount)) {
            finalPrice = (ingPrice + defaultPrice) * 0.8;
        } else {
            finalPrice = ingPrice + defaultPrice;
        } 
        
        document.getElementById('tot-price').innerHTML = '$' + finalPrice.toFixed(2);
    } 
)