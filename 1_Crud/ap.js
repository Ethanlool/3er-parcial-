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