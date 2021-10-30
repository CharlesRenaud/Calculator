import react,{useState, useEffect} from "react"

const data = {
  keys: ['AC', '/', "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", ".", "0", "=" ] 
}


function App() {
  const [display, setDisplay] = useState("")
  const [subDisplay, setSubDisplay] = useState("")
  const [result, setResult] = useState("")


  let props = {
    display: display,
    result: result,
    subDisplay, subDisplay,
    setSubDisplay: setSubDisplay,
    setResult: setResult,
    setDisplay: setDisplay,
  }
  return (
    <div className="App">
      <div className="calculator">
        <Display {...props} />
        <Keys {...props} />
      </div>
    </div>
  );
}


export default App;



const Display = (props) => {
  return (
    <div className="results">
      <div id="display"> Result : {props.result}</div>
      <div> Calcul : {props.display}</div>
    </div>
  );
};


const Keys = (props) => {

  const AddValue = (e) => {

    var value = e.target.id

  

    const CalculResult = (resultFiltred) => {

      console.log(eval(resultFiltred))
      var calcul = eval(resultFiltred)
      
      props.setResult(Math.round(calcul*100)/100)



    }
    const conditions = ["+0", "-0", "*0", "/0"];
    const conditions2 = ["+", "-", "*", "/", "."];

    

    if(props.result === ""){

      if(value.includes("AC")){
        props.setDisplay("")
        props.setResult("")
      }
      else if(conditions2.some(el => props.display[props.display.length -1] === el)){

        if(value === '/' || value === '*' || value === '.'){
          
          console.log(value )
          props.setDisplay(props.display)
        }
        else if((props.display[0] === "+" || props.display[0] === "-" || props.display[0] === "*" || props.display[0] === "/" || props.display[0] === ".") && (props.display.length >0)) {
          props.setDisplay('')
        }
        else if(value.includes("=")){
          var resultFiltred = props.display
          console.log(resultFiltred)
          CalculResult(resultFiltred)
        }
        else{
          props.setDisplay(props.display + value)
        }

      }
      else if(value.includes("=")){
        var resultFiltred = props.display
        console.log(resultFiltred)
        CalculResult(resultFiltred)
      }
      else if(conditions.some(el => props.display.includes(el))){
        if(value === "."){
          props.setDisplay(props.display +  value)

        }else if(props.display[props.display.length -1] === "."){
          props.setDisplay(props.display + value)
        }
        else if(props.display[props.display.length -1] !== "0"){
          props.setDisplay(props.display + value)
        }
        else{
          props.setDisplay(props.display)
        }
      }
      else if(props.display[0] === "0" && props.display.length > 1){
        if(props.display[1] === "."){
          props.setDisplay(props.display +  value)
        }
        else{
          props.setDisplay('')

        }
      }
      else{
        props.setDisplay(props.display +  value)

      }
    }
    else{
      props.setDisplay("")
      props.setResult("")
    }  
  
}

  return (
    <div className="keys">
      {
        data.keys.map( (key, id) => {
          return <div id={key} onClick={(e)=>AddValue(e)}  className="key">{key}</div>
        })
      }
    </div>
  );
};
