import styled from "styled-components";
import type {Poem} from "../interfaces/Poetry.ts";

const AllPoemsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: lightblue;
`;

const SinglePoemDiv=styled.div`
    display: flex;
    flex-direction: column;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: white;
    color: black;
    border: 3px darkblue solid;
    font: italic small-caps bold calc(2px + 1vw) Georgia, serif;
    text-align: center;
`;

export default function PoetryDB(props : { data:Poem[] } ){
    return (
        <AllPoemsDiv >
            {
                props.data.map((poem: Poem, index: number) =>
                    <SinglePoemDiv key={`${poem.title}-${index}`}>
                        <h1>{poem.title}</h1>
                        <p>by {poem.author}</p>
                        <p>{poem.lines.join('\n')}</p>
                        <p>{poem.linecount} lines</p>
                    </SinglePoemDiv>
                )
            }
        </AllPoemsDiv>
    );
}