import { home } from "../vistas/home";
import { adminUsers } from "../vistas/adminUsers";
//import {  }

export const router = {
    home: ()=>{
        document.querySelector('main').innerHTML = home.template;
            //console.log('click en home')
            home.script()
    },
    admin: ()=>{
        document.querySelector('main').innerHTML = adminUsers.template;
            //console.log('click en admin')
            adminUsers.script()
    },
    about: ()=>{
        document.querySelector('main').innerHTML = adminUsers.template;
            //console.log('click en home')
            about.script()
    }
}