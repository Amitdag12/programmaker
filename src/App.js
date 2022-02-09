import ExcPropUI from "./ExcPropUI";
import ExcTable from "./ExcTable";
import { useState } from "react";
import  "./App.css"
function App() {
 
  const [ExcProps,setExcProps]=useState([{id:0,title:"sets"},{id:1,title:"reps"}]);
  const [ExcColum,setExcColum]=useState([{id:0,text:"back",color:'black'},{id:1,text:"",color:'black'}]);
  function AddNewProp(){
    setExcProps(prev=>{ 
    console.log(prev)
        let id = 0;
        if (prev.length > 0) {
          id = prev[prev.length - 1].id + 1;
        }
        const a=[...prev, { id: id, title:"",color:''}]     
        console.log(a)    
        return a
    })
    
  }
  function updtaeExcTitle(newTitle,id){
    console.log(ExcProps);
    const ExcPropsList = [...ExcProps];
    const excProps = ExcPropsList.find(excProps => excProps.id === id);
    excProps.title=newTitle;
    console.log(ExcPropsList);
    setExcProps(ExcPropsList);
  }
  function AddRow(){
    setExcColum(prev=>{
      let id = 0;
        if (prev.length > 0) {
          id = prev[prev.length - 1].id + 1;
        }
        return [...prev, { id: id, text:""}]    
    })
  }
  function ReduceRow(){
    setExcColum(prev=>{
      prev=prev.slice(0,prev.length-1)
      return prev;
    })
  }
  function updtaeUiText(newText,id,colorCode){
    const ExcColumList = [...ExcColum];
    const excColum = ExcColumList.find(excColums => excColums.id == id);
    excColum.text=newText;
    excColum.color=colorCode;
    setExcColum(ExcColumList);
  }
  return (
    <div className="App">
      
      <div>
      <ExcTable ExcProps={ExcProps} columns={ExcColum}/>
      </div>      
      <div className="ExcPropUI">
      <ExcPropUI ExcProps={ExcProps} AddNewProp={AddNewProp} updtaeExcTitle={updtaeExcTitle}  columns={ExcColum} updtaeUiText={updtaeUiText}/>
      <div className="AddRow">
      <button onClick={ReduceRow}>-</button>
      <button onClick={AddRow}>+</button>
      </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
