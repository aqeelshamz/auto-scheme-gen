import React from 'react';
import { format } from 'date-fns';

function EventCard(props) {








    const formattedDate = format(props.jsDate, 'd MMM yyyy');





    return (
        <div className={`border-box m-5 overflow-hidden  w-[232px] h-[200px] left-[23px] top-[121px] border-2  border-black rounded-md  justify-center items-center text-xl text-[${props.color}] font-semibold`}>
            <div style={props.style} class={`border-box   w-[228px] rounded-sm  h-[142px] left-[23px] top-[121px] ${props.color}   flex justify-center items-center text-xl font-bold`}>{props.title}</div>
            <div className="p-3 text-black ">{formattedDate}</div>
        </div>
    );
}


EventCard.defaultProps = {
    title: "Sandy",
    jsDate: new Date(),
    color: "bg-[#9400D3]"
};


export default EventCard;


