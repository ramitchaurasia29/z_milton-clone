import React from 'react'
import FeatureOne from './featureOne'
import FeatureTwo from './featureTwo'
import FeatureThree from './featureThree'
import FeatureFour from './featureFour'

const FeatureSec = () => {
    return (
        <div className='flex flex-col items-center justify-evenly'> 
            <div className='flex flex-col items-center justify-evenly  mt-10'>
                <div className='btn-sec w-auto rounded-3xl text-center py-3 px-4'>
                    <span>An other way to manage time</span>
                </div>
                <span className='text-7xl font-bold'>Discover your new superpowers</span>
            </div>
            <FeatureOne />
            <FeatureTwo/>
            <FeatureThree/>
            <FeatureFour/>
        </div>
    )
}

export default FeatureSec