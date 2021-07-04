//Correcting the date format for task card
let date = document.getElementsByClassName("dateLabel");
for(let i=0; i<date.length; i++){
    let str = date[i];
    if(str.innerText == ""){
        str.innerText = "No Deadline";
    }else{
        let stringD = str.innerText;
        let day = stringD.slice(0,3);
        let dateF = stringD.slice(4,15);
        str.innerText = (day+", "+dateF);
    }
}

//Setting up different colors for categories
let categories = document.getElementsByClassName("categoryLabelC");
for(let i=0; i<categories.length; i++){
    let ctg = categories[i];
    if(ctg.innerText == "PERSONAL"){
        ctg.style.backgroundColor = "darkgreen";

    }else if(ctg.innerText == "SCHOOL"){
        ctg.style.backgroundColor = "#F2A701";

    }else if(ctg.innerText == "WORK"){
        ctg.style.backgroundColor = "purple";

    }else if(ctg.innerText == "CLEANING"){
        ctg.style.backgroundColor = "darkblue";

    }
}

//Setting up priority in task-cards
let pLevel = document.getElementsByClassName("categoryLabel");
