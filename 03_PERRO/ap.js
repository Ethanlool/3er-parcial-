const loadBreed=async()=>{
    const url=await fetch("https://dog.ceo/api/breeds/list/all");
    const res=await url.json();
    let comboBreed=document.querySelector("#breed");
    data=res.message;
 
    }

