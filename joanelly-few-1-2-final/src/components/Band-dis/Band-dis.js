
import React from 'react';
import Band from '../Band/Band';
import data from '../metal.json'
import './Band-dis.css'
import {UpDown} from '../Down-Up/Down-Up'


function Banddis() {
  const bands = data.map(({ band_name, formed, origin, fans, split, style}, i) => {
  const splitup = data
    return (
        <div>
      <Band
        band_name={band_name}
        formed={formed}
        origin={origin}
        fans={fans}
        split={split}
        style={style}
      />
      <UpDown/>
      </div>
    )
  })
    return (
        <div className="Banddis">
            <div className="Band">
            { bands }
            </div>
        </div>
    )
}

export default Banddis