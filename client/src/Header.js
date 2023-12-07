import { useState } from 'react';

import IconoMenu from './media/iconos/bars-solid.svg';
import IconoX from './media/iconos/x-solid.svg';
import IconoClaro from './media/iconos/sun-solid.svg'

export function Header({enlaces}) {

    const [menu, setMenu] = useState(false);

    function MenuAbrir() {
        setMenu(true);
    }
    function MenuCerrar() {
        setMenu(false);
    }

    return <header>
        <section className='header-principal'>
            <button onClick={() => MenuAbrir()}> <img src={IconoMenu} alt='Abrir Menú'/></button>
            <h1>TusPelis</h1>
            <button> <img src={IconoClaro} alt='Abrir Menú'/></button>
        </section>
        <section className={menu === true ? 'menu abierto' : 'menu cerrado'}>
            <button onClick={() => MenuCerrar()}> <img src={IconoX} alt='Cerrar Menú'/> </button>
            <h3 onClick={()=>enlaces(1)}>Inicio</h3>
            <h3 onClick={()=>enlaces(2)}>Buscar</h3>
            <h3>Explorar</h3>
            <h3>Contacto</h3>
        </section>
        {menu === true ? <div className='fondo'></div> : <></>}
    </header>
}