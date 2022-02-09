import React from 'react'

export default function ExcTable({ ExcProps, columns }) {
    const table = [];
    return <table className="ExcTable"><tr>
        {ExcProps.map(excProp => {
            return <th key={"headline"+excProp.id} id={"headline"+excProp.id}>{excProp.title}</th>
        })}

    </tr>
        {columns.map(a => {
         //   console.log(12);
            let b=(ExcProps.length*100)+"%"
            if(a.text==''){
                return (<tr>{
                    ExcProps.map(excProp => {
                        return <td><span id={'row'+a.id} className='textarea' contentEditable="true"></span></td>
                    })
                }</tr>)
            }else{
                return (<tr>
                    <h1 id={'row'+a.id}  style={{textAlign:'center' ,backgroundColor:a.color,width:b}}>{a.text}</h1>
                </tr>)
            }
            
        })}
    </table>

}
