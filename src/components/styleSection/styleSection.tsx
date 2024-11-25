import Image from "next/image";

export default function StyleSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 bg-[#F2F0F1] rounded-[2rem]">
            <h2 className="text-[2.5rem] font-black text-center mb-12">
                BROWSE BY DRESS STYLE
            </h2>
            <div className="grid grid-cols-2 gap-6 p-8">
                <div className="grid grid-cols-1 gap-6">
                    {["Casual", "Party"].map((style) => (
                        <div
                            key={style}
                            className="relative bg-white rounded-[1.5rem] overflow-hidden"
                        >
                            <div className="flex items-center">
                                <Image
                                    src={`/styles/${style.toLowerCase()}.png`}
                                    alt={style}
                                    width={407}
                                    height={289}
                                    className="w-full object-contain object-right hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {["Formal", "Gym"].map((style) => (
                        <div
                            key={style}
                            className="relative bg-white rounded-[1.5rem] overflow-hidden"
                        >
                            <div className="flex items-center">
                                <Image
                                    src={`/styles/${style.toLowerCase()}.png`}
                                    alt={style}
                                    width={684}
                                    height={289}
                                    className="w-full object-contain object-right hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}