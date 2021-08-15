import React from 'react'
import {MobButtons} from "../components/MobButtons"
import stars from "/public/background-stars (1).svg"
interface Props {
    data: {
        name: string;
        overview: {
            content: string;
            source: string;
        };
        structure: {
            content: string;
            source: string;
        };
        geology: {
            content: string;
            source: string;
        };
        rotation: string;
        revolution: string;
        radius: string;
        temperature: string;
        color : string
        images : {
            planet : string;
            internal : string;
            geology : string
        }
}
}
export const MainPage:React.FC<Props> = ({data : {name , rotation , color}}) => {
    
    const backGround = {
        backgroundImage : `url(${stars})`,
        backgroundColor : '#070724'
    }

    return (
        <div className="w-full h-screen" style={{backgroundImage : stars , backgroundColor : 'blue'}}  >
            <div>
                <MobButtons color={color} title="OVERVIEW"/>
            </div>
            <h1>{name}</h1>
            <h1>{rotation}</h1>
        </div>
        
    )
}
