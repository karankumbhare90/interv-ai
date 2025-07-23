import React from 'react'
import FeatureAssistants from './_components/FeatureAssistants'
import History from './_components/History'
import Feedback from './_components/Feedback'

export default function Dashboard() {
    return (
        <>
            <FeatureAssistants />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10'>
                <History />
                <Feedback />
            </div>
        </>
    )
}
