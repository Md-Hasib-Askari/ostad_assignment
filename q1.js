function getDiscount(purchase_amount) {
    if (purchase_amount < 50) {
        console.log(`Discounted Amount $${0} & Total Amount $${purchase_amount} + Discount Amount ${0}%`)
    } else if (purchase_amount >= 50 && purchase_amount <= 100) {
        console.log(`Discounted Amount $${purchase_amount*0.05} & Total Amount $${purchase_amount} + Discount Amount ${5}%`)
    } else if (purchase_amount >= 100 && purchase_amount <= 200) {
        console.log(`Discounted Amount $${purchase_amount*0.1} & Total Amount $${purchase_amount} + Discount Amount ${10}%`)
    } else if (purchase_amount > 200) {
        console.log(`Discounted Amount $${purchase_amount*0.15} & Total Amount $${purchase_amount} + Discount Amount ${15}%`)
    }
}

let purchase_amount = 150;
getDiscount(purchase_amount);