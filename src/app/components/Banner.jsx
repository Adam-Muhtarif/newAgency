import Image from "next/image";

export default function Banner() {
    return (
        <section aria-label="banner section" className="h-80 bg-blue-700 flex justify-center relative">
            <Image
                src="/images/home-banner.png"
                className={`w-full h-full absolute object-cover`}
                width={626}
                height={418}
                alt=''
                priority
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70"></div>

            <div className="mt-10 text-center text-white text-3xl md:text-5xl font-bold z-10">
                <h3 className="">Take the next step</h3>
                <h3 className="">Let{`'`}s give your project a go!</h3>
                <button className="text-base md:text-lg uppercase mt-5 bg-orange rounded-full px-10 py-2">contact us</button>
            </div>
        </section>
    )
}
