import React from 'react'
import ExcProp from './ExcProp'
import NewProp from './NewProp';
import { useRef } from 'react'
import SpanTextBox from './SpanTextBox';
export default function ExcPropUI({ ExcProps, AddNewProp, updtaeExcTitle, columns, updtaeUiText }) {
  let text = useRef();
  function HadleTextChange(ev) {
    let text1 = ev.target.innerText;
    updtaeUiText(text1, ev.target.id.replace("UiTableSpan", ""), ev.target.parentNode.children[1].value);
  }
  const result = [<NewProp AddNewProp={AddNewProp} key={"newProp"} />];
  let div = <div className='Titles'>{ExcProps.map(excProp => {
    return <ExcProp excProp={excProp} key={"ExcProp" + excProp.id} updtaeExcTitle={updtaeExcTitle} />
  })}</div>

  let div2 = <div className='tableSample'>{columns.map(a => {
    return (
      <div>
        <SpanTextBox text={a.text} pressFunctio={HadleTextChange} key={"UiTableSpan" + a.id} id={"UiTableSpan" + a.id} classList={"textarea"} />
        <input type="color" style={{ float: 'right' }} value={a.color} key={"UiTableInput" + a.id} onChange={e => updtaeUiText(a.text, a.id, e.target.value)}></input>
      </div>
    )
  })}</div>
  result.push(div)
  result.push(div2)
  return result;
}
