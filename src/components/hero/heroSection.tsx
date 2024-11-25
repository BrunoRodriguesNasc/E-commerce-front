import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative bg-[#F2F0F1] min-h-[800px]">
            <div className="absolute inset-0">
                <Image
                    src="/hero-image.png"
                    alt="Fashion Models"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Decorative Stars */}
                <div className="absolute top-16 right-16">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                            d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z"
                            fill="black"
                        />
                    </svg>
                </div>
                <div className="absolute bottom-32 left-16">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                            d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto relative">
                <div className="w-[600px] py-24 pl-16">
                    <h1 className="text-[64px] font-black leading-[1.1] tracking-tight">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>
                    <p className="mt-6 text-gray-600 text-lg max-w-[480px]">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense
                        of style.
                    </p>
                    <button className="mt-8 bg-black text-white px-8 py-3 rounded-full text-lg font-medium">
                        Shop Now
                    </button>

                    <div className="mt-20 flex gap-20">
                        <div>
                            <p className="text-[40px] font-bold">200+</p>
                            <p className="text-gray-500 text-sm">International Brands</p>
                        </div>
                        <div>
                            <p className="text-[40px] font-bold">2,000+</p>
                            <p className="text-gray-500 text-sm">High-Quality Products</p>
                        </div>
                        <div>
                            <p className="text-[40px] font-bold">30,000+</p>
                            <p className="text-gray-500 text-sm">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}