const cargarPost=async()=>{
let url="https://jsonplaceholder.typicode.com/posts";
    const api=await fetch(url);
    const data=await api.json();
    console.log(data);
    tabla=document.querySelector("#lista");
    data.map(item=>{
        tabla.innerHTML+=`
        <tr>
                  <th scope="row">${item.id}</th>
                  <td>${item.title}</td>
                  <td>${item.body}</td>
                  <td><button class="btn btn-primary btn-lg"><i class="bi bi-tiktok" data-bs-toggle="modal" data-bs-target="#editModal"></i> Editar </button> </td>
                  <td> <button class="btn btn-danger btn-lg"><i class="bi bi-trash3-fill" data-bs-toggle="modal" data-bs-target="#deleteModal"></i> Eliminar </button></td>
               
                  
                  
        </tr>
              `;
    })
}

const addPost=async()=>{
    let titulo=document.querySelector("#titulo").value;
    let body=document.querySelector("#body").value;
    const post={
        title:titulo,
        body:body,
        userid:1
    };


    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    
    
    });

const respuesta=await api.json();
tabla=document.querySelector("#lista");
tr=document.createElement("tr");
tr.innerHTML=`
                <th scope="row">${respuesta.id}</th>
                  <td>${respuesta.title}</td>
                  <td>${respuesta.body}</td>
                  <td><button class="btn btn-primary btn-lg"><i class="bi bi-tiktok" data-bs-toggle="modal" data-bs-target="#editModal"></i> Editar </button> </td>
                  <td> <button class="btn btn-danger btn-lg"><i class="bi bi-trash3-fill" data-bs-toggle="modal" data-bs-target="#deleteModal"></i> Eliminar </button></td>
               
`
tabla.appendChild(tr);
if(respuesta!=null){
    Swal.fire(
        'Eres un genio?',
        'That thing is still around?',
        'question'
        )

}else{
    Swal.fire(
        'Eres tonto?',
        'That thing is still around?',
        'question'
        )


}
}
