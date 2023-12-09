

export function Renderizar({resultado, valor}) {
    if (!valor) {
        return <p>¡Encuentra tus Películas Favoritas!</p>
    } else if (resultado.length > 0) {
        return <>
            {resultado.map((peli) => {
                console.log('soy pepli',peli);
                return (
                    <section key={peli.id} className="busqueda-peli">
                    <img src={"https://image.tmdb.org/t/p/original/"+peli.poster_path} className="busqueda-poster"/>
                    <h3> {peli.title} </h3>
                    <div>
                        <p> {peli.vote_average}★ </p>
                        <p> {peli.release_date} </p>
                    </div>
                    <button>¡VER!</button>
                    </section>
                )
            })}
        </>
    } else {
        return <p>Esa Película No Está Disponible</p>
    }

}