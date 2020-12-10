import React from 'react'
import data from '../metal.json'


function Count(props) {
    const list = JSON.parse(JSON.stringify(data)).length
        return (
            <div>
                Count of bands: {list}
            </div>
        )

    }

export default Count



