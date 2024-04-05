
import localFont from 'next/font/local'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="overflow-hidden h-screen relative flex items-center text-white">
            <Image
                src="/images/hero.png"
                className="absolute top-0 left-0 w-full h-full bg-contain bg-center bg-no-repeat z-0"
                width={728}
                height={410}
                alt=''
                priority
            />
            {/* overlay */}
            <div className="absolute left-0 top-0 w-full h-full hero-overlay"></div>

            <div className=" relative pl-20 w-2/4 uppercase z-10">
                <h1 className={`text-2xl text-pink`}>welcome to pixelpulse</h1>
                <h2 className="text-6xl">creative digital</h2>
                <h2 className="text-6xl">agency based in sl.</h2>
                <p className='w-2/3 text-xs my-2'>lorem creative digital agency based in sl creative digital agency based in sl
                    creative digital agency based in sl creative digital agency based in sl
                    based in sl
                </p>
                <button className='bg-orange mt-3 py-2 px-6 rounded-full uppercase'>discover more</button>
            </div>
        </div>
    )
}
