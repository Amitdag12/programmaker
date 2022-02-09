import React, { useState } from 'react'
import { useRef,useEffect } from 'react'
import SpanTextBox from './SpanTextBox'
export default function ExcProp({excProp,updtaeExcTitle}) {
    var title=useRef()
    const [span,updateSpan]=useState(<span contentEditable="true" className='textarea' id={"UiProp"+excProp.id} ref={title} onKeyUp={HandleKeyDown}>{excProp.title}</span> )
    function HandleKeyDown(ev){
        let text1=ev.target.innerText;
        updtaeExcTitle(text1,excProp.id)
    }
    function HandleKeyDown1(ev){
        let text1=ev.target.value;
      alert(ev.code);
        updtaeExcTitle(text1,excProp.id)
    }
    return (
        <div>
           <div>
            
           <SpanTextBox text={excProp.title} pressFunctio={HandleKeyDown} id={"UiProp"+excProp.id} classList={"textarea"} />     
           </div> 
           <div>
           </div> 
        </div>
    )
}
