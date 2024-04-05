import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="my-20 mx-40">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-orange text-lg uppercase font-bold">our services</h1>
                    <h2 className="text-3xl font-bold">What we do for your business?</h2>
                </div>
                <div className="w-96">
                    Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur,
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                </div>
            </div>

            <div className="mt-5 grid grid-cols-3 grid-rows-2 gap-4">
                <ServiceCard
                    image={"/images/branding.png"}
                    title={"Branding"}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis.`}
                />
                <ServiceCard
                    image={"/images/digital.png"}
                    title={"Communication"}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis.`}
                    className={"w-12"}
                />
                <ServiceCard
                    image={"/images/branding.png"}
                    title={"Marketing"}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis.`}
                />
                <ServiceCard
                    image={"/images/digital.png"}
                    title={"Digital"}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis.`}
                />
                <ServiceCard
                    image={"/images/motion.png"}
                    title={"Motion"}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis.`}
                />
                <ServiceCard
                    image={"/images/packaging.png"}
                    title={"Packaging"}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis.`}
                />
            </div>
        </div>
    )
}
