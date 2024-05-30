// punto 2
let movies = [
    { title: "Titanic", description: "Una historia de amor y tragedia en el hundimiento del Titanic.", year: 1997 },
    { title: "El Padrino", description: "El poderoso jefe de la mafia Don Vito Corleone intenta transferir el control de su imperio clandestino a su hijo más joven.", year: 1972 },
    { title: "El Club de la Pelea", description: "Un hombre descontento y un carismático vendedor de jabón crean un club de lucha clandestino que se convierte en un movimiento subversivo anti-capitalista.", year: 1999},
    { title: "El Señor de los Anillos: La Comunidad del Anillo", description: "Un joven hobbit llamado Frodo Baggins es encargado con una épica misión para destruir un anillo maligno y salvar a la Tierra Media de la oscuridad.", year: 2001},
    { title: "El Rey León", description: "Un joven león llamado Simba aprende sobre el significado de la responsabilidad y el honor mientras lucha por reclamar su lugar como rey de la sabana africana.", year: 1994},
    { title: "Matrix", description: "Un programador de computadoras descubre que el mundo en el que vive es en realidad una simulación controlada por máquinas, y se une a una rebelión para liberar a la humanidad.", year: 1999},
    { title: "Interestelar", description: "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en busca de un nuevo hogar para la humanidad después de que la Tierra se convierte en inhabitable.", year: 2014},
    { title: "El Silencio de los Inocentes", description: "Una joven agente del FBI busca la ayuda de un brillante pero perturbador psiquiatra para capturar a un asesino en serie conocido como 'Buffalo Bill'.", year: 1991}
];

const displayMovies = (moviesToShow) => {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    if (moviesToShow.length === 0) {
        movieList.innerHTML = "<p><b>No se encontraron películas.</b></p>";
        return;
    }
    // punto 3
    moviesToShow.forEach(movie => {
        console.log(movie)
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");
        movieItem.innerHTML = `<h3>${movie.title} (${movie.year})</h3> <p>${movie.description}</p>`;
        movieList.appendChild(movieItem);
    });
}
    // punto 4
const searchMovies = (query) => {
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );
    displayMovies(filteredMovies);
}
    // punto 5
const filterMovies = (year) => {
    console.log(year)
    const filteredMovies = movies.filter(movie =>
        year === "" || movie.year === parseInt(year)
    );
    // punto 7
    displayMovies(filteredMovies);
    const newUrl = `${window.location.pathname}?year=${year}`;
    window.history.pushState({ year: year }, "", newUrl);
}
// punto 6
const addMovie = (e) =>{
    e.preventDefault(); 
    const title = document.getElementById("titleInput").value;
    const description = document.getElementById("descriptionInput").value;
    const year = parseInt(document.getElementById("yearInput").value);
    if (!title || !description || !year) {
        alert("Por favor complete todos los campos.");
        return;
    }

    movies.push({ title, description, year });
    displayMovies(movies);
    e.target.reset(); 
}

document.addEventListener("DOMContentLoaded", () => {
    displayMovies(movies); 

    document.getElementById("searchInput").addEventListener("input", (e) => {
        searchMovies(e.target.value);
    });

    document.getElementById("yearFilter").addEventListener("change", (e) => {
        filterMovies(e.target.value);
    });

    document.getElementById("addMovieForm").addEventListener("submit", addMovie);
});



