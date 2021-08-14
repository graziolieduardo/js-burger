// Eventlistener btn calculate 
document.getElementById('btn-calc').addEventListener('click',
    function() {
        let discountCoupons = ['43532FEABDE', '23154DAEFCD'];
        let defaultPrice = 50; 
        let ingPrice = 0;
        const discount = document.getElementById('sale').value;
        const element = document.getElementsByClassName('ing-add');
        
        // ciclo sull'array di elementi che mi è ritornato per ottenere il valore solo di quelli scelti 
        for (let i = 0; i < element.length; i++) {
            if (element[i].checked)
                ingPrice += parseInt(element[i].value);
        }

        // controllo se il coupon inserito risulta nell'array e stampo il prezzo finale
        console.log(discount)
        if (discountCoupons.includes(discount)) {
            finalPrice = (ingPrice + defaultPrice) * 0.8;
        } else {
            finalPrice = ingPrice + defaultPrice;
        } 
        
        document.getElementById('tot-price').innerHTML = '$ ' + finalPrice.toFixed(2);
    } 
)