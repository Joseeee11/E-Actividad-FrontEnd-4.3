import IconoMenu from './media/iconos/bars-solid.svg';
import IconoX from './media/iconos/x-solid.svg';
import IconoClaro from './media/iconos/sun-solid.svg'

export function Header({enlaces}) {
    return <>
        <section>
            <button> <img src={IconoMenu} alt='Abrir Menú'/></button>
            <h1>TusPelis</h1>
            <button> <img src={IconoClaro} alt='Abrir Menú'/></button>
        </section>
        <section>
            <button> <img src={IconoX} alt='Cerrar Menú'/> </button>
            <h3 onClick={()=>enlaces(1)}>Inicio</h3>
            <h3 onClick={()=>enlaces(2)}>Buscar</h3>
            <h3>Explorar</h3>
            <h3>Contacto</h3>
        </section>
    </>
}

function MenuAbrir() {

}