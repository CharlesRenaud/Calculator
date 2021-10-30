import React,{useState} from 'react';


const Calcul = () => {
    const [display, setDisplay] = useState("0")
    const [result, setResult] = useState("")
    const [currentString, setCurrentString] = useState("")
    const [symboles, setSymboles] = useState(["+", "-", "*", "/"])
    const [toogleSymb, setToogleSymb] = useState("")
    const [resultat, setResultat] = useState("")
    const [lastSymb, setLastSymb] = useState("")

    let props = {
        display: display,
        lastSymb: lastSymb,
        currentString: currentString,
        symboles: symboles,
        result: result,
        toogleSymb: toogleSymb,
        resultat: resultat,
        setSymboles: setSymboles,
        setCurrentString: setCurrentString,
        setDisplay: setDisplay,
        setResult: setResult,
        setToogleSymb: setToogleSymb,
        setResultat: setResultat,
        setLastSymb: setLastSymb,
    }

    return (
        <div>
            <Display {...props}/>
            <Buttons {...props}/>

        </div>
    );
};


const Buttons = (props) => {


    const GoodChecker = (e) => {
        props.setResult('')
        if(props.toogleSymb === true){
            console.log(props.lastSymb)

            if(props.currentString[props.currentString.length -1] === e.target.value){
                props.setCurrentString(props.currentString)
            }

            else if(props.symboles.some(el => props.display === el)){
                props.setDisplay(e.target.value)
                props.setCurrentString(props.currentString + e.target.value)
            }
           
            else{
                props.setDisplay(e.target.value)
                props.setCurrentString(props.currentString + e.target.value)
                console.log(props.toogleSymb)
                props.setToogleSymb(false)
                console.log(props.currentString)
            }

        }
        else if(e.target.value === "." && e.target.value === props.currentString[props.currentString.length -1]){
            
        }
        else if(props.display.includes(".") && e.target.value ==="."){

        }
        
      
        else{

            if(props.display[0] === "0"){
                props.setDisplay(e.target.value)
                props.setCurrentString(e.target.value)
    
            }
         
            else if(props.symboles.some(el => e.target.value === el)){
  
                    props.setCurrentString(props.currentString + e.target.value)
                    props.setDisplay(e.target.value)
                    props.setToogleSymb(true)
                    props.setLastSymb(e.target.value)
                
            }
            else{
                props.setDisplay(props.display + e.target.value)
                props.setCurrentString(props.currentString + e.target.value)
                props.setToogleSymb(false)
            }
    

        }

    }

    console.log(props.currentString)


    const ReturnResult = () => {
        if(props.currentString.includes("-+" || "*+" || "/+"|| '*-+'|| '/-+'|| "-/+"|| "-*+"|| "*/+"|| "/*+")){
            var sub = props.currentString.replace("-+", "+")
            var subed = sub.replace("*+", "+")
            var subede = subed.replace("/+", "+")
            var subeded = subede.replace("*-+", "+")
            var subedouille = subeded.replace("/-+", "+")
            var sousou = subedouille.replace("-/+", '+')
            var sasa = sousou.replace("-*+", "+") 
            var soso = sasa.replace("*/+","+")
            var sisi = soso.replace("/*+", "+")


            console.log(sub)

            props.setResult(eval(sisi)) 

        }
        else{
            props.setResult(eval(props.currentString)) 
        }
    }
    const AC = () => {
        props.setDisplay("0")
        props.setCurrentString('')
        props.setResultat("")
        props.setResult("")
    }

    return(
    <div>
        <button onClick={() => ReturnResult()} value='=' id="equals">=</button>
        <button onClick={(e) => GoodChecker(e)} value='0' id="zero">0</button>
        <button onClick={(e) => GoodChecker(e)} value='1' id="one">1</button>
        <button onClick={(e) => GoodChecker(e)} value='2' id="two">2</button>
        <button onClick={(e) => GoodChecker(e)} value='3' id="three">3</button>
        <button onClick={(e) => GoodChecker(e)} value='4' id="four">4</button>
        <button onClick={(e) => GoodChecker(e)} value='5' id="five">5</button>
        <button onClick={(e) => GoodChecker(e)} value='6' id="six">6</button>
        <button onClick={(e) => GoodChecker(e)} value='7' id="seven">7</button>
        <button onClick={(e) => GoodChecker(e)} value='8' id="eight">8</button>
        <button onClick={(e) => GoodChecker(e)} value='9' id="nine">9</button>
        <button onClick={(e) => GoodChecker(e)} value='+' id="add">+</button>
        <button onClick={(e) => GoodChecker(e)} value='-' id="subtract">-</button>
        <button onClick={(e) => GoodChecker(e)} value='*' id="multiply">x</button>
        <button onClick={(e) => GoodChecker(e)} value='/' id="divide">/</button>
        <button onClick={(e) => GoodChecker(e)} value='.' id="decimal">.</button>
        <button onClick={()=>{AC()}} id="clear">AC</button>
    </div>
    )
}

const Display = (props) => {

    if(props.result !== ""){
        props.setResultat(props.result)
        props.setCurrentString(props.result)

    }
    else{
        props.setResultat(props.display)
    }

    return(
    <div className="display-box">
        <div>{props.currentString}</div>
        <div id="display">{props.resultat}</div>
    </div>
    )
}

export default Calcul;