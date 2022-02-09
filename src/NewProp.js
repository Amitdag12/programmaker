import React from 'react'

export default function NewProp({AddNewProp}) {
    return (
        <div className='AddTitle'>
            <button onClick={AddNewProp}>+</button>
        </div>
    )
}
