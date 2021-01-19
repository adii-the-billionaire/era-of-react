import React from 'react'
const time = () => {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if ( hours < 12 ) {
        timeOfDay = "MORNING"
    } else if ( hours >= 12 && hours < 17 ) {
        timeOfDay = 'AFTERNOON'
    } else {
        timeOfDay = "night"
    }
    const style = {
        color: 'green',
        backgroundColor:'blue'
    }
    return (
        <h1 style={style}>Good {timeOfDay}</h1>
    )
}
export default time