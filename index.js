const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must have right something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li); 
        let span = document.createElement("Span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
        }
        inputbox.value ='';
        saveData();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.TagName === "li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.TagName === "span"){
        e.target.parentElement.remove();
        saveData();

    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();