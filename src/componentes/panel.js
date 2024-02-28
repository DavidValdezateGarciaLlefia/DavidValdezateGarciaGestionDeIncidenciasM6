export const panel = (codigo,fecha,fechaResuelto,aula,grupo,ordenador,descripcion,alumno,estado) => {
    if(estado=='pendiente'){
        const template = //html
    `
    <tr>
          <td>${codigo}</td>
          <td>${fecha}</td>
          <td>${aula}</td>
          <td>${grupo}</td>
          <td>${ordenador}</td>
          <td>${descripcion}</td>
          <td>${alumno}</td>
          <th>${estado}</th>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
    `
    return template
    }else{
      const template = //html
      `
      <tr>
          <td>${codigo}</td>
          <td>${fecha}</td>
          <td>${fechaResuelto}</td>
          <td>${aula}</td>
          <td>${grupo}</td>
          <td>${ordenador}</td>
          <td>${descripcion}</td>
          <td>${alumno}</td>
          <td>${estado}</td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
      `  
        return template
    }
    
}