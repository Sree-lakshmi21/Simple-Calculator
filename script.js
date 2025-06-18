let currentInput=''
let prevInput=''
let currentOp=''

function appendNum(number){
    currentInput+=number;
    document.getElementById('box').value=`${prevInput} ${currentOp} ${currentInput}`;
}
function appendOp(operation){
    if(currentInput==='')return;
    if(prevInput!==''){
        calculate();
    }
    currentOp=operation;
    prevInput=currentInput;
    currentInput='';
    document.getElementById('box').value=`${prevInput} ${currentOp}`;
}
function clearDis(){
    currentInput='';
    prevInput='';
    currentOp=''
    document.getElementById('box').value= '';
}
function calculate(){
    if(prevInput===''||currentInput==="")return;
    let result;
    let prev=parseFloat(prevInput);
    let current=parseFloat(currentInput);
    switch(currentOp){
        case '+':
            result=prev+current;
            break;
        case '-':
            result=prev-current;
            break;
        case '*':
            result=prev*current;
            break;
        case '/':
            if(current===0){
                alert("cannot divide by zero");
                return;
            } 

            result=prev/current;
            break;
        default:
            return;
    }
    currentInput=result.toString();
    prevInput='';
    currentOp='';
    document.getElementById('box').value=currentInput;
}