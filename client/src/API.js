const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODg1ZmI5ZGUxN2U5OTNiMzkxZDJiOTk4ZDYxZTNjNyIsInN1YiI6IjY0YTJlOTExZThkMDI4MDExY2Y4ZDc0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UFrQpVBqiYKbi9FEPst6wTFWA45YbIRKNYtJGvxlRuk'
    }
};

let idioma = "es-MX"

export async function APIbuscar(titulo) { 
    try {
        const responsePelis = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(titulo)}&language=${idioma}`, options);
        const response = await responsePelis.json();
        // console.log(response);
        const todas = response.results;
        const busqueda = todas.slice(0, 6);
        // console.log("soy busqueda", typeof(busqueda), busqueda);
        return busqueda;
    } catch (err) {
        console.error(err);
    } 
}
export async function API() { 
    try {
        const responsePelis = await fetch(`https://api.themoviedb.org/3/discover/movie?language=${idioma}`, options);
        const todas = await responsePelis.json();
        console.log("se ejecuto todasPelis")
        return <>
            <p>hay peliculas</p>
            {console.log("soy todas", todas)}
        </>
    } catch (err) {
        console.error(err);
    } 
}
