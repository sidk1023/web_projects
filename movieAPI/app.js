

async function getMovie(param){
    try{
        const movie = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=b8394027',{params:{t:param}});
        console.log(movie.data);
        const title = document.querySelector('#title');
        const release = document.querySelector('#release');
        const genre = document.querySelector('#genre');
        const country = document.querySelector('#country');
        const cast = document.querySelector('#cast');
        const imdb = document.querySelector('#imdb');
        const plot = document.querySelector('#plot');
        title.innerText= movie.data.Title;
        release.innerText = movie.data.Released;
        genre.innerText=movie.data.Genre;
        country.innerText=movie.data.Country;
        cast.innerText=movie.data.Actors;
        imdb.innerText=movie.data.imdbRating;
        plot.innerText=movie.data.Plot;
        
        

        p.innerHTML = `${movie.data.Title} <br> ${movie.data.Country}<br>${movie.data.Plot}`;
    }catch(error){
        console.error(error);
    }
}

const inputBox = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    if (inputBox.value){const text = inputBox.value;
        getMovie(text);
        inputBox.innerText = ''}
    
})
