import PoetryDB from "./components/poetrydb.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Poem} from "./interfaces/Poetry.ts";

const ParentDiv=styled.div`
    width: 80%;
    margin: 0 auto;
    border: 5px darkblue solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Poem[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            // Fetch random poems from PoetryDB API
            const rawData = await fetch("https://poetrydb.org/random/6/author,title,lines,linecount");
            const poems: Poem[] = await rawData.json();
            setData(poems);
        }
        fetchData()
            .then(() => console.log("Poetry data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <PoetryDB data={data}/>
        </ParentDiv>
    )
}
