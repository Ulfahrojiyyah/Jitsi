import React from 'react'
import FeaturesBox from './FeaturesBox'
import featureimage from '../../images/box1.svg'
import featureimage1 from '../../images/box2.svg'
import featureimage2 from '../../images/box3.svg'


function Feature() {
    return (
        <div id='features'>
            <div className='a-container'>
                <FeaturesBox image={featureimage} title='Development Course'/>
                <FeaturesBox image={featureimage1} title='About'/>
                <FeaturesBox image={featureimage2} title='INI'/>
            </div>
            
        </div>
    )
}

export default Feature
