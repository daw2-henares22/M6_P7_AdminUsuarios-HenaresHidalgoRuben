import { tablaAdmin } from "../componentes/tablaAdmin"

export const adminUsers = {
    template: `
    <h1> Pagina adminUsers</h1>

    <div id="tabla">
    Aqui irá la tabla
    </div> 
    `,
    script:()=>{
        //console.log('hola soy la vista adminUsers')
        document.querySelector('#tabla').innerHTML = tablaAdmin.template;
        tablaAdmin.script()
    
        /*document.querySelector('#admin').innerHTML = adminUsers.template;
        adminUsers.script()*/
    }
}