"use client";
import React from 'react';

function Component() {
    return ( 
        <div>
            <p>
                Este es el componente de prueba, esta es una prueba
            </p>
        </div>
    );
}

function Contador(props : {title : string}) {
    const [contador, setContador] = React.useState(0);

    const suma = (e:any) => {
        setContador(contador + 1);
        alert("Se esta ejecutando: " + contador);
    }

    return (
        <div>
            <p >Pagina: {props.title}</p>
            <p>Contador: {contador}</p>
            <button type="button" onClick={suma}>incrementar</button>
        </div>
    );
}


export default function Page() {

    return ( 
        <div>
            <p>
                Hello World! 2
            </p>
            <Component/> 
            <Contador title="pagina 1"/>
        </div>
    );
}