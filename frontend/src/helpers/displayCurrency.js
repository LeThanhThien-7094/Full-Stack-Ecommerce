const displayINRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-IN',{
        style : "currency",
        currency : "vnd",
        minimumFractionDigits : 3
    })

    return formatter.format(num)
}
export default displayINRCurrency