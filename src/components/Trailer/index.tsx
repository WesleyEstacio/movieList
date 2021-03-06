import { Container } from "./styles";

interface TrailerProps {
    movieID: number

    details: {
        backdrop_path: string,
    }
}

export function Trailer({ details }: TrailerProps) {

    return (
        <Container>
            <h1>Trailer</h1>

            <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} />
        </Container>
    )
}