const  ingredients= {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat:2
}
const si = Array( ingredients )//[{}]
console.log(si)
const mia = Object.keys(ingredients)
console.log(mia)
const it = mia.map( ( el ) => {
    return [...Array(ingredients[el])]
} )

console.log(it)
// const tia = Array( ingredients )
//     console.log(tia)
// const mia = Object.keys( ingredients )
// const sia = mia.map( ( el ) => {
//     return [el]
// })
// console.log( sia )
