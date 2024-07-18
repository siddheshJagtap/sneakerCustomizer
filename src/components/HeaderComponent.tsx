import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import React from 'react';
const model:MenuItem[]=[{label:"Home"}];

 const HeaderComponent=()=>{
    return <Menubar model={model}/>
   
}
export default HeaderComponent;