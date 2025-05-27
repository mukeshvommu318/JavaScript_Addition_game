


function handleReset(){
    
    document.getElementById("firstval").value=Math.ceil(Math.random()*100)
    document.getElementById("secoundval").value=Math.ceil(Math.random()*100)
    document.getElementById('userval').value=""
    document.getElementById('result').textContent=""
}


 
function oncheck(){
        let frtval =parseInt(document.getElementById("firstval").value)
        let secval =parseInt(document.getElementById("secoundval").value)
        let usval =parseInt(document.getElementById("userval").value)

        let bol = false

        if((frtval+secval) === usval){
            bol = !bol
        }
        else{
            bol = bol
        }



    if(bol){
        document.getElementById("result").textContent="green"
        document.getElementById("result").style.backgroundColor="green"
    }
    else{
        document.getElementById("result").textContent="red"
        document.getElementById("result").style.backgroundColor="red"
    }
}