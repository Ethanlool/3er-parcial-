import { suma, resta, multi, divi} from './funciones.js';

let btsuma=document.querySelector("#mas");
let btres=document.querySelector("#menos");
let btmu=document.querySelector("#mul");
let btdi=document.querySelector("#divisi");

btsuma.addEventListener('click',()=> {
  
let n1=parseInt( document.querySelector("#uno").value);
let n2=parseInt( document.querySelector("#dos").value);

  suma(n1, n2);
})

btres.addEventListener('click',()=> {
  
let n1=parseInt( document.querySelector("#uno").value);
let n2=parseInt( document.querySelector("#dos").value);

  resta(n1, n2);
})

btmu.addEventListener('click',()=> {
  
let n1=parseInt( document.querySelector("#uno").value);
let n2=parseInt( document.querySelector("#dos").value);

  multi(n1, n2);
})

btdi.addEventListener('click',()=> {
  
let n1=parseInt( document.querySelector("#uno").value);
let n2=parseInt( document.querySelector("#dos").value);

  divi(n1, n2);
})