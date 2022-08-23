const player=[];

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
    element.disabled=true;
    element.style.background='gray';
    const playersName=element.parentNode.parentNode.children[0].innerText;
    const name={playerName:playersName}
    player.push(name);
    selectedDisplay();
    if(player.length > 5){
        alert("Can't include more");
    }   
}