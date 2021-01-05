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
const fun = ( list ) => {
    return list.forEach( ( list ) => {
        const p = document.createElement( 'p' )
        p.textContent = list.name
        document.querySelector('body').appendChild(p)
    })
}
fun( list )
document.querySelector( "#hi" ).addEventListener( 'click', ( e ) => {
    e.preventDefault()
    fun(list)
})