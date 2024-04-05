import Image from 'next/image'
import React from 'react'

export default function ServiceCard({ image, title, description, className }) {
    return (
        <div className='p-5 flex flex-col items-center rounded-tr-xl rounded-tl-xl 
            rounded-br-3xl rounded-bl-3xl shadow-[0_2.8px_0px_rgba(0,_0,_0,_0.034),_0_.7px_5.3px_rgba(0,_0,_0,_0.048),_0_10px_10px_rgba(0,_0,_0,_0.06),_0_0px_80px_rgba(0,_0,_0,_0.12)] 
        '>
            <Image
                src={image || ""}
                className={`w-14 ${className}`}
                width={512}
                height={512}
                alt=''
                priority
            />
            <h3 className='text-lg font-bold'>{title}</h3>
            <p className='text-sm text-center'>{description}</p>
        </div>
    )
}
