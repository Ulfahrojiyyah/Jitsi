import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../../../images/box1.svg'
import featureimage1 from '../../../images/box2.svg'
import featureimage2 from '../../../images/box3.svg'


function Feature() {
    return (
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='Development Course'/>
                <FeatureBox image={featureimage1} title='Development Course'/>
                <FeatureBox image={featureimage2} title='Development Course'/>
            </div>
            
        </div>
    )
}

export default Feature
