import React from 'react'
import QuestionBar from './questionBar'

const QuestionContainer = () => {
    return (
        <>
            <div className='flex flex-col w-full items-center mt-24'>
                <QuestionBar title="Can I cancel my subscrition?"/>
                <QuestionBar title="What happens when my trial ends?"/>
                <QuestionBar title="What payment methods do you offer?"/>
                <QuestionBar title="What is your refund policy?"/>  
                <QuestionBar title="Do you offer discounts to educational institutions ?"/>
            </div>
        </>
    )
}

export default QuestionContainer