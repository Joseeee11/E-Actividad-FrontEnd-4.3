import { useState , useEffect } from "react";

import { APIbuscar } from "./API";

export function Buscar() {
    // console.log('buscaaar')
    const [resultado, setResultado] = useState([]);
    const [valor, setValor] = useState("");

    //Si ocurre algun cambio se ejecuta
    useEffect(() => {
        const timer = setTimeout(() => { //esperamos dos segundos por si hay un cambio
            // console.log('vamos a la API');
            handleChange(); //mandamos valor
        }, 2000);
    
        return () => { //al cambiar el titulo(valor)
            console.log('hubo un cambio')
            clearTimeout(timer); //limpiamos tiempo
            setResultado([]); //limpiamos resultados
        };
    }, [valor]);

    //función para enviar titulo(valor) a la API
    async function handleChange() {
        if (valor) {
            console.log('enviando valor a la api')
            const pelis = await APIbuscar(valor);
            console.log(pelis)
            setResultado(pelis)
        } else {
            console.log('no hay un valor en el input')
        }
    }

    return <>
        <p>ESTAMOS EN BUSQUEDA</p>
        <input type="text" placeholder="Ingresa el título de la película" value={valor} onChange={(e) => {setValor(e.target.value)}}></input>
    </>
}