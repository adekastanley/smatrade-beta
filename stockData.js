// https://api.twelvedata.com/price?symbol=AAPL&apikey=demo
let ld = document.querySelector('.live-data')
let metaPrice = document.querySelector('.meta-price')
let googlePrice = document.querySelector('.google-price')
let microsoftPrice = document.querySelector('.microsoft-price')
let adidasPrice = document.querySelector('.adidas-price')
let nikePrice = document.querySelector('.nike-price')
let teslaPrice = document.querySelector('.tesla-price')

// function refreshPrices (){
        
const getStockPrice = async (stock) => {

    const response = await fetch( ' https://api.twelvedata.com/price?symbol='+ stock +'&apikey=3d71bc52c2ef4c94bb70b0f00817ffb9')
    const data = await response.json()
    return data
} 

getStockPrice(['META', 'GOOG','MSFT','NKE','TSLA','ADS']).then(
    data => {

        // console.log(data['META'])
        metaPrice.textContent =  '$' + data['META'].price 
        googlePrice.textContent =  '$' + data['GOOG'].price 
        microsoftPrice.textContent = '$' + data['MSFT'].price 
        adidasPrice.textContent =  '$' + data['ADS'].price 
        nikePrice.textContent =  '$' + data['NKE'].price 
        teslaPrice.textContent =  '$' + data['TSLA'].price 

    }
)
