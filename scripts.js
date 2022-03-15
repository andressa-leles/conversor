const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


const dolar = 5.2
const euro = 5.9
const iene = 0.044
const renminbi = 0.81
const bitcoin = 0.0000049

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')


    realValueText.innerHTML=  new Intl.NumberFormat('pt-BR',{
        style: 'currency', 
        currency: 'BRL'
    }).format(inputReais)
    
    if (select.value === "US$ Dólar americano"){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',{
            style: 'currency', 
            currency: 'USD' 
        }).format(inputReais / dolar)

    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',{
            style: 'currency', 
            currency: 'EUR'
        }).format(inputReais / euro)
    }

    if (select.value === "¥ Iene") {
        currencyValueText.innerHTML = new Intl.NumberFormat('jp- JP', {
            style: 'currency',
            currency: 'JPY',
          }).format(inputReais / iene )

    }

    if (select.value === "¥ Renminbi") {
        currencyValueText.innerHTML = new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'CNY',
          }).format(inputReais / renminbi )
    }

    if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',{
            style: 'currency', 
            currency: 'BTC'
        }).format(inputReais / bitcoin)
    }
    
}

chanceCurrency= () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = "./assets/EUA (1).png"
    }
     
    if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/Euro.png"
    }

    if (select.value === '¥ Iene'){
        currencyName.innerHTML = 'Iene'
        currencyImg.src = "./assets/japan.png"
    }

    if (select.value === '¥ Renminbi') {
        currencyName.innerHTML = 'renminbi'
        currencyImg.src = "./assets/china3.png"
    }

    if (select.value === 'Bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/bitcoin.png"

    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', chanceCurrency)