import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function BrandStrip() {
    return (
        <div className="bg-black py-6">
        <Marquee
          gradient={true}
          gradientColor="black"
          speed={100}
          pauseOnHover={false}
          className="overflow-hidden"
        >
          {["GUCCI", "PRADA", "CALVIN-KLEIN", "VERSACE", "ZARA"].map(
            (brand) => (
              <div key={brand} className="mx-40">
                <Image
                  src={`/brands/${brand.toLowerCase()}.png`}
                  alt={brand}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </div>
            )
          )}
        </Marquee>
      </div>
    )
}