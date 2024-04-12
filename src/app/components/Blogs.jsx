import BlogCard from "./BlogCard";

export default function Blogs() {
    return (
        <section aria-label="blogs section" className="my-20 px-4 md:px-10 lg:px-16 xl:px-40">
            <div className="text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
                <div>
                    <h1 className="text-orange text-lg uppercase font-bold">our services</h1>
                    <h2 className="text-3xl font-bold">What we do for your business?</h2>
                </div>
                <div className="lg:w-96 mt-4 lg:m-0">
                    Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur,
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-14">
                <BlogCard
                    image={"/images/blog-1.png"}
                    title={"branding for package with modern style design"}
                    description={`Lorem ipsum dolor sit amet consec tetur. Phasel 
                        lus elei fend duis rhoncus peil lean tesque. Vulpu tatera augue lobortis...`}
                />
                <BlogCard
                    image={"/images/blog-1.png"}
                    title={"branding for package with modern style design"}
                    description={`Lorem ipsum dolor sit amet consec tetur. Phasel 
                        lus elei fend duis rhoncus peil lean tesque. Vulpu tatera augue lobortis...`}
                />
                <BlogCard
                    image={"/images/blog-3.png"}
                    title={"branding for package with modern style design"}
                    description={`Lorem ipsum dolor sit amet consec tetur. Phasel 
                        lus elei fend duis rhoncus peil lean tesque. Vulpu tatera augue lobortis...`}
                />
            </div>
        </section>
    )
}
