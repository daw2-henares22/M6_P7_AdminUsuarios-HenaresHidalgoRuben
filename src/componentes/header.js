import { adminUsers } from "../vistas/adminUsers";
import { home } from "../vistas/home";
import { about } from "../vistas/about";
import { router } from "./router";

export const header ={
    template:`
<nav>
    <ul>
        <li id="home">HOME</li>
        <li id="about">ABOUT</li>
        <li id="about">ADMIN</li>
    </ul>
</nav>`,
    
    script: ()=>{
        document.querySelector('#home').addEventListener
        ('click', ()=>{
            router.home()
        });
        
        document.querySelector('#admin').addEventListener
        ('click', ()=>{
            router.admin()
        });
        
        document.querySelector('#about').addEventListener
        ('click', ()=>{
            router.about()
        });
        //console.log('gola soy header');
        /*document.querySelector('#admin').addEventListener
        ('click', ()=>{
            document.querySelector('main').innerHTML = adminUsers.template;
            //console.log('click en home')
            adminUsers.script()
        });*/ 
    }

}