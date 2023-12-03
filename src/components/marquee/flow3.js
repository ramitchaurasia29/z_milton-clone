import React from 'react'
import Marquee from "react-fast-marquee";
import FlowCardMain from './flowcards/flowCardMain';


const Flow3 = () => {
    return (
        <>
            <>
            

            <Marquee pauseOnHover="true" autoFill="true" direction='right' speed={70}>

                <FlowCardMain cmt="“Just love it”" des="I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need. Game changer!" name="Adam Moore" profession="Entrepreneur" />
                <FlowCardMain cmt="“Better than the rest”" des="I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need. Game changer!" name="Annie Devy" profession="Designer" />
                <FlowCardMain cmt="“Saves me time”" des="Since I started using this app, I've saved so much time. I no longer have to manually add appointments or set reminders - it's all done for me!" name="Kyle Conord" profession="CEO of RoastingOS" />
                <FlowCardMain cmt="“No more forgotten appointments”" des="I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me." name="Michel O Neil" profession="Head of sales" />
            </Marquee>
        
        </>

           
        </>
    )
}

export default Flow3