import { ProductCard } from "@/components/ProductCard"

const newArrivals = [
    {
        name: "Basic Black T-Shirt",
        price: 50,
        image: "/products/black-tshirt.png",
    },
    {
        name: "Skinny Fit Jeans",
        price: 240,
        oldPrice: 260,
        image: "/products/jeans.png",
    },
    {
        name: "Checkered Shirt",
        price: 180,
        image: "/products/checkered-shirt.png",
    },
    {
        name: "Sports Stripe T-shirt",
        price: 120,
        oldPrice: 140,
        image: "/products/stripe-tshirt.png",
    },
];

const topSelling = [
    {
        name: "Vertical Striped Shirt",
        price: 212,
        oldPrice: 232,
        image: "/products/striped-shirt.png",
    },
    {
        name: "Courage Graphic T-shirt",
        price: 145,
        image: "/products/graphic-tshirt.png",
    },
    {
        name: "Loose Fit Bermuda Shorts",
        price: 80,
        image: "/products/bermuda.png",
    },
    {
        name: "Faded Skinny Jeans",
        price: 270,
        image: "/products/skinny-jeans.png",
    },
];

export default function TopSelling() {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-[2.5rem] font-black text-center mb-12">NEW ARRIVALS</h2>
                <div className="grid grid-cols-4 gap-6">
                    {newArrivals.map((product) => (
                        <ProductCard key={product.name} {...product} />
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-[2.5rem] font-black text-center mb-12">TOP SELLING</h2>
                <div className="grid grid-cols-4 gap-6">
                    {topSelling.map((product) => (
                        <ProductCard key={product.name} {...product} />
                    ))}
                </div>
            </section>
        </div>
    )
}