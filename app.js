//get memory buttons
const firstMemoryCard = document.getElementById("First-memory")
const secondMemoryCard = document.getElementById("Second-memory")
//get memory field
const extraMemoryField = document.getElementById("extra-memory-field")

//get ssd buttons
const firstSsd = document.getElementById("first-ssd")
const secondSsd = document.getElementById("second-ssd")
const thirdSsd = document.getElementById("third-ssd")
//get extra storage field
const extraStorageField = document.getElementById("extra-storage-field")


// get delivery buttons
const freeDeliveryButton = document.getElementById("free-delivery")
const chargeDeliveryButton = document.getElementById("charge-delivery")
//get  delivery field 
const deliveryField = document.getElementById("delivery-field")

//get total field 
const totalField = document.getElementById("total-price-field")


// get best price field
const bestPriceField = document.getElementById("best-price-field")

//add event listeners to memory card
firstMemoryCard.addEventListener('click',function() {
    extraMemoryField.innerText = '0'
    updateTotal() 

})
secondMemoryCard.addEventListener('click',function() {
    extraMemoryField.innerText = '180'
    updateTotal() 
    
})


// add event listeners to extra storage 
firstSsd.addEventListener('click',function() {
    extraStorageField.innerText = '0'
})
    updateTotal() 
secondSsd.addEventListener('click',function() {
    extraStorageField.innerText = '100'
    updateTotal() 
})
thirdSsd.addEventListener('click',function() {
    extraStorageField.innerText = '180'
    updateTotal() 
})


//add event listeners to delivery
freeDeliveryButton.addEventListener('click',function() {
    deliveryField.innerText = '0'
    updateTotal() 
})
chargeDeliveryButton.addEventListener('click',function() {
    deliveryField.innerText = '20'
    updateTotal() 
})

//update total function
function updateTotal() {
    const extraMemoryCharge = Number(extraMemoryField.innerText);
    const extraStorageCharge = Number(extraStorageField.innerText);
    const deliveryCharge = parseInt(deliveryField.innerText);
    const bestPriceCharge = Number(bestPriceField.innerText);
    //console.log(deliveryField.innerText)
    
    console.log(deliveryCharge)
    const total = extraMemoryCharge + extraStorageCharge + deliveryCharge + bestPriceCharge;
    totalField.innerText = total
    //console.log(extraMemoryField.innerText, extraStorageField.innerText,deliveryField.innerText ,totalField.innerText)

}