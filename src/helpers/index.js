export const restarYear = (year) => {
    return new Date().getFullYear() - year
};
export const calcularMarca = (marca) => {
    let incremento ;
    switch(marca){
        case "1":
            incremento = 1.3;
            break
        case '2':
            incremento = 1.15;
            break    
        case '3':
            incremento = 1.05;
            break
        default:
            break        

    }
    return incremento
}
export const  calculaPlan = (plan) => {
    return plan === '1' ? 1.2: 1.5;
}
export const formaterDinero = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style : 'currency',
        currency : 'USD'
    })
}