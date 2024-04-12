import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    return (
        <div className="mt-8 px-4 md:px-10 lg:px-16 xl:px-40 text-center">
            <h1 className="text-5xl text-orange font-bold">Testimonials</h1>
            <p className="text-sm w-1/2 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-14">
                <TestimonialCard
                    image={"/images/testimonial-1.png"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,"}
                    name={"Charlie Bronzh Envato User"}
                />
                <TestimonialCard
                    image={"/images/testimonial-2.png"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,"}
                    name={"Charlie Bronzh Envato User"}
                />
                <TestimonialCard
                    image={"/images/testimonial-3.png"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,"}
                    name={"Charlie Bronzh Envato User"}
                />
            </div>
        </div>
    )
}
