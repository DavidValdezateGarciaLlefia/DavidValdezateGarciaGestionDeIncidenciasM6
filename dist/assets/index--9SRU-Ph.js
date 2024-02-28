(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const y=[{codigo:"123456",fecha:"01/04/2023",fechaResuelto:"01/12/2023",aula:"T1",grupo:"DAW2",ordenador:"PC1",descripcion:"Error de pantalla",alumno:"Ejemplo Ejemplin",estado:"resuelto"},{codigo:"234245",fecha:"06/06/2033",fechaResuelto:"21/11/2025",aula:"T1",grupo:"DAW2",ordenador:"PC1",descripcion:"Pantallazo azul",alumno:"Michael Myers",estado:"resuelto"},{codigo:"435367",fecha:"12/07/2012",fechaResuelto:"11/02/2054",aula:"T3",grupo:"DAW2",ordenador:"PC13",descripcion:"Pc explota lol",alumno:"Freddy Krueger",estado:"resuelto"},{codigo:"765436",fecha:"01/06/2026",aula:"T111",grupo:"DAW1",ordenador:"PC65",descripcion:"El pc ha dejado de existir",alumno:"Pendiente Pendientin",estado:"pendiente"},{codigo:"165467",fecha:"01/04/2026",aula:"T7",grupo:"DAW1",ordenador:"PC4",descripcion:"Camara del pc no funciona",alumno:"The singularity",estado:"pendiente"}],f={template:`
    <button class="btn btn-secondary ms-2" id="cerrarBoton">CERRAR SESION</button>
    `,script:()=>{document.querySelector("#cerrarBoton")&&document.querySelector("#cerrarBoton").addEventListener("click",()=>{document.querySelector("main").innerHTML="",document.querySelector("#cerrarBoton").style.display="none"})}},b=(o,a,e,n,t,r,i,c,s)=>s=="pendiente"?`
    <tr>
          <td>${o}</td>
          <td>${a}</td>
          <td>${n}</td>
          <td>${t}</td>
          <td>${r}</td>
          <td>${i}</td>
          <td>${c}</td>
          <th>${s}</th>
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
    `:`
      <tr>
          <td>${o}</td>
          <td>${a}</td>
          <td>${e}</td>
          <td>${n}</td>
          <td>${t}</td>
          <td>${r}</td>
          <td>${i}</td>
          <td>${c}</td>
          <td>${s}</td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
      `,d={template:`
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4" >
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
       
       
      </tbody>
    </table>
    `,script:()=>{let o="",a="";y.forEach(e=>{e.estado=="pendiente"?o+=b(e.codigo,e.fecha,e.fechaResuelto,e.aula,e.grupo,e.ordenador,e.descripcion,e.alumno,e.estado):a+=b(e.codigo,e.fecha,e.fechaResuelto,e.aula,e.grupo,e.ordenador,e.descripcion,e.alumno,e.estado)}),document.querySelector("#tablaPendiente").innerHTML=o,document.querySelector("#tablaResuelto").innerHTML=a}},u={template:`
  <h1>Logeate</h1>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div id="loginIncorrecto" class="danger"></div>
        <form novalidate action="procesaa.php" method="get" class="form border p-3 shadow w-25 ">
            <label for="email" class="label-control">Usuario:</label>
            <input required id="email" name="email" type="email" placeholder="tuemail@ejemplo.com" class="form-control">
            <div class="invalid-feedback small">Esta mal</div>
            <div class="valid-feedback">Esta bien</div>
            <label for="pass" class="label-control">Contraseña:</label>
            <input required minlength="4" id="pass"  name="pass" type="password" class="form-control">
            <div class="invalid-feedback">La contraseña debe tener mínimo 3 carácteres</div>
            <button class="btn btn-success mt-3 w-100">Enviar</button>
        </form>

    </div>
  `,script:()=>{const o=document.querySelector("form");o.addEventListener("submit",a=>{if(!o.checkValidity())a.preventDefault(),a.stopPropagation(),console.log("El formulario no es válido"),o.classList.add("was-validated");else if(a.preventDefault(),o.checkValidity()){let c=function(){for(let s=0;s<i.length;s++){const l=i[s],m=l.email,v=l.pass;if(n===m&&t===v)return!0}return!1};var e=c;const n=document.querySelector("#email").value,t=document.querySelector("#pass").value,r=localStorage.getItem("usuarios"),i=JSON.parse(r);if(c()){alert("Login realizado correctamente!");const s=document.querySelector("#headerUserEmail");s.innerText=n;const l=document.querySelector("#panel");l.style.display="inline",document.querySelector("main").innerHTML=d.template;const m=document.querySelector("#cerrarBoton");m.style.display="inline",document.querySelector("#cerrarSesionDiv").innerHTML=vista,f.script(),d.script()}else document.querySelector("#loginIncorrecto").innerHTML="Credenciales incorrectas, inténtalo de nuevo"}})}},p=[{}],h={template:`
    <h1>Registrate</h1>

    <div class="container d-flex justify-content-center align-items-center vh-100">
          <form novalidate action="procesa.php" method="get" class="form border p-3 shadow w-25 ">
              <div id="valorRegistro"></div>
              <label for="email" class="label-control">Usuario:</label>
              <input required id="email" name="email" type="email" placeholder="tuemail@ejemplo.com" class="form-control">
              <div class="invalid-feedback small">Esta mal</div>
              <div class="valid-feedback">Esta bien</div>
              <label for="pass" class="label-control">Contraseña:</label>
              <input required minlength="4" id="pass"  name="pass" type="password" class="form-control">
              <div class="invalid-feedback">La contraseña debe tener mínimo 3 carácteres</div>
              <button id="registros" class="btn btn-success mt-3 w-100" >Enviar</button>
          </form>
  
      </div>
    `,script:()=>{const o=document.querySelector("form");o.addEventListener("submit",a=>{if(!o.checkValidity())a.preventDefault(),a.stopPropagation(),console.log("El formulario no es válido"),o.classList.add("was-validated");else{a.preventDefault(),f.script();const e=document.querySelector("#email").value,n=document.querySelector("#pass").value;localStorage.setItem("usuarios",JSON.stringify(p));try{const t={email:e,pass:n};p.push(t),localStorage.setItem("usuarios",JSON.stringify(p)),document.querySelector("#valorRegistro").innerHTML="Registro Exitoso! Pasando a la pantalla de Login",console.log("Registro exitoso"),alert("Registro Exitoso!")}catch(t){console.error("Error al acceder a la base de datos:",t),document.querySelector("#valorRegistro").innerHTML="Registro Fallido! Intentalo de nuevo",mensajeUsuario.innerText="Ha ocurrido un problema al acceder a la base de datos. Por favor, intenta de nuevo más tarde."}document.querySelector("main").innerHTML=u.template,u.script()}})}},g={template:`
    <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div id="botonesLogin">
          <button class="btn btn-secondary ms-2" id="panel">PANEL</button>
          <button class="btn btn-secondary ms-2" id="login">LOGIN</button>
          <button class="btn btn-secondary ms-2" id="registro">REGISTRO</button>
          
        </div>
        <div id="cerrarSesionDiv">
        
          <span id="headerUserEmail"></span>
          
        </div>
      </div>
    </nav>
  </header>
    `,script:()=>{const o=document.querySelector("#panel");o.style.display="none",document.querySelector("#panel").addEventListener("click",()=>{document.querySelector("main").innerHTML=d.template,d.script(),b.script()}),document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=u.template,u.script()}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=h.template,h.script()})}};document.querySelector("header").innerHTML=g.template;g.script();
