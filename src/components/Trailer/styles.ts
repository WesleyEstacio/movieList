import styled from "styled-components";

export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2%;

    h1 {
        padding: 1rem 0;
    }

    img {
        margin-bottom: 2rem;

        @media only screen and (max-width: 768px) {
            width: 80%;
        }
    }
`