import React from 'react';
import { useState } from 'react';
export default function SpanTextBox({ text, pressFunctio, id, classList }) {
    const [span, updateSpan] = useState(<span contentEditable="true" className={classList} id={id} onKeyUp={HandleKeyPress}>{text}</span>)

    function HandleKeyPress(ev) {
        updateSpan(prev => {
           // alert(prev.innerText)
            return (<span contentEditable="true" className='textarea' id={id} onKeyUp={HandleKeyPress}>{text}</span>)
        })
        pressFunctio(ev);
    }
    return span;
}
