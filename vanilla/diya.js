const list = [
    {
       name:'adi'
    },
    {  
       name:'riya'
    },
    {
       name:'siya'
    }
]


let messageShown = false;

const fun = ( list ) => {
    return list.forEach( ( list ) => {
        const pit = document.createElement('p')
        pit.textContent = list.name
        document.querySelector('#Message').appendChild(pit)
    })
}
 fun( list )
//don't call in window so let's join something the value
document.querySelector( "#hi" ).addEventListener( 'click', ( e ) => {
    e.preventDefault()
    messageShown = !messageShown
    if (messageShown === true) {
    document.getElementById('Message').style.display = 'block';
  } else {
    document.getElementById('Message').style.display = 'none';
  }
})
   

//here i just want to toogle this value 
