const bill = document.getElementById('js-your-bill')
const tipInput = document.getElementById('js-tip-input')
const tipPercent = document.getElementById('js-tip-percent')
const tipValue = document.getElementById('js-tip-value')
const splitInput = document.getElementById('js-split-input')
const splitValue = document.getElementById('js-split-value')
const total = document.getElementById('js-total-with-tip')
const splitTotal = document.getElementById('js-split-total')
const tipTotal = document.getElementById('js-tip-total')
const word = document.getElementById('js-person-word')

bill.addEventListener('input', update)
splitInput.addEventListener('input', update)
tipInput.addEventListener('input', update)

function formatValue(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return value
}

function declOfNum(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

function update() {
    tipPercent.textContent = tipInput.value
    splitValue.textContent = splitInput.value

    const billValue = Number(bill.value)
    const tip = bill.value * (tipInput.value / 100)
    const tipEach = tip / splitInput.value
    const eachBill = billValue / splitInput.value

    tipValue.textContent = formatValue(tip)
    total.textContent = formatValue(tip + billValue)
    splitTotal.textContent = formatValue(eachBill)
    tipTotal.textContent = formatValue(tipEach)
    word.textContent = declOfNum(splitInput.value, ["человека", "человека", "человек"])
}

