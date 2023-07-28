function getDiscount(purchaseAmount) {
    let discountPercentage;

    if(purchaseAmount >= 200){
        discountPercentage = 0.15;
    } else if(purchaseAmount >= 100){
        discountPercentage = 0.10;
    } else if(purchaseAmount >= 50){
        discountPercentage = 0.05;
    } else{
        discountPercentage = 0;
    }

    const discountAmount = purchaseAmount * discountPercentage;
    const totalAmount = purchaseAmount - discountAmount;

    console.log(`Discounted amount $${discountAmount} & Total Amount $${totalAmount} + Discount amount ${discountPercentage*100}%`);
}

let purchase_amount = 150;
getDiscount(purchase_amount);