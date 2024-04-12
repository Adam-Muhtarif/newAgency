import Image from "next/image";

export default function TestimonialCard({ image, text, name }) {
    return (
        <article aria-label="testimonial card" className='p-5 flex flex-col items-center 
            rounded-br-3xl rounded-bl-3xl 
            shadow-[0_2px_0px_rgba(211,_83,_0,_0.4),_0_.7px_3px_rgba(211,_83,_0,_0.4),_0_10px_10px_rgba(0,_0,_0,_0.06)] 
            relative
        '>
            <div className="w-20 h-20 rounded-full border-[3px] border-orange
                absolute -top-[40px]"
            >
                <Image
                    src={image || ""}
                    className={`w-full h-full rounded-full object-cover inline-block`}
                    width={450}
                    height={299}
                    alt=''
                    priority
                />
            </div>
            <p className="mt-10">{text}</p>
            <span className="mt-2 text-2xl font-bold w-2/3">{name}</span>
        </article>
    )
}
