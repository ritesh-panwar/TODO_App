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