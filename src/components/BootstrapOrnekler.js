import React,  { Fragment }  from "react";
import { useAlert } from "react-alert";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const BootstrapOrnekler = () => {
    return ( 
        <Button variant="primary" size="lg" 
        onClick={() => { alert.show('Our website is under construction.' + "\n" + "Services will be available soon."+'Sitemiz Yapım aşamasındadır.' + "\n" + "En kısa sürede Hizmet vereceğiz.")}}>
        Trade-Ist !
        </Button>
     );
}
 

export default BootstrapOrnekler;