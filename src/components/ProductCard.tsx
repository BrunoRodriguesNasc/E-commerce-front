import Image from 'next/image';

interface ProductCardProps {
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
}

export function ProductCard({ name, price, oldPrice, image }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-lg font-bold">${price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">${oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}