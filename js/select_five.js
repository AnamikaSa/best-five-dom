const player=[];
let c=0;

function selectedDisplay(){
    const display= document.getElementById("display_name");
    display.textContent='';
    for(let i=0; i<5; i++){
        const tr=document.createElement("tr");
        tr.innerHTML=`
        <th>${i+1}</th>
        <td>${player[i].playerName}</td>
        `;
        display.appendChild(tr);
        
    }
}
function select_button(element){
    c++;
    if(c>5){
        alert("Can't include more");
        return;
    }
    
    element.style.background='gray';
    element.disabled=true;
    const playersName=element.parentNode.parentNode.children[0].innerText;

    const name={playerName:playersName}
    player.push(name);
    selectedDisplay(); 
}