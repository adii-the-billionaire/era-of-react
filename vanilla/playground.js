//here we have to generate three digit random number
// const num = 100
//suppose it's maximum value is 999 coz otherwise it's become 
// const num = Math.floor( (Math.random()+1)*100)
// const num = []
// for ( a = 100; a < 1000; a++ ){
//     console.log(num.push(a))
// }
// const tip = Math.floor( Math.random() * 999 )
// var number
// do {
//   number = Math.floor(Math.random() * 999);
// } while ( number < 100 )
  setInterval(function(){   
    console.log(Math.floor((Math.random()*100)+1)); 

 }, 1000);