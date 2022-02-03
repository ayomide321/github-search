import React, { FunctionComponent } from 'react';
import './Card.css'

type CardProps = {
    name: string;
    url: string;
    profile: string;
}

export const Card: FunctionComponent<CardProps> = ({name, url, profile}) => 
    <>
        <div className="card">
            <img src={profile}/>
            <div className="container">
                <h4><b>{name}</b></h4>
                <a href={url} target='_blank'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></a>
            </div>
        </div>
    </>



