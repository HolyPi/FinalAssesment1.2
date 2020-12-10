import React from 'react'
import { Link } from 'react-router-dom'
import data from '../metal.json'
import './Band.css';


function Band(props) {
    const { band_name, formed, origin, fans, split, style} = props
    return (
        <div className="band-space">
            <div className="band-name">
                <h1>{band_name}</h1>
            </div>
            <div className="formed">
                <h2>Formed: {formed}</h2>
            </div>
            <div className="origin">
                <h2> Origin: {origin}</h2>
            </div>
            <div className="fans">
                <h2>Fans: {fans}</h2>
            </div>
            <div className="split">
                <h2> Split: {split}</h2>
            </div>
            <div className="style">
                {style}
            </div>
        </div>
    )
}

export default Band
