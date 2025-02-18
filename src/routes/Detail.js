import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState(true);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);

    useEffect(() => {
        fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.data.movie);
                setLoading(false);
            });
    }, [])

    console.log(movies);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                        <div key={movies.id}>
                            <img src={movies.medium_cover_image} />
                            <h2>{movies.title}</h2>
                            <p>{movies.summary}</p>
                            <ul>
                                {movies.genres.map((g) => (<li key={g}>{g}</li>))}
                            </ul>
                        </div>
                </div>
            )}
        </div>
    );
}
export default Detail;