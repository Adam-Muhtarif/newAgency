import Image from "next/image";

export default function BlogCard({ image, title, description }) {
    return (
        <div className="">
            <div className="h-80 border rounded-3xl relative overflow-hidden">
                <Image
                    src={image || ""}
                    className={`w-full h-full absolute object-cover`}
                    width={626}
                    height={418}
                    alt=''
                    priority
                />
            </div>

            <h1 className="mt-5 font-bold text-xl">{title}</h1>
            <p className="text-sm">{description}</p>
            <button className='bg-orange mt-3 py-2 px-6 rounded-full text-white'>Read More</button>
        </div>
    )
}
