import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  slug: string;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  slug,
  name,
  price,
  image,
}: ProductProps) {
  return (
    <Link href={`/products/${slug}`}>
      <div className="bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-full h-72 object-cover"
        />

        <div className="p-5">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-[#C08A5D] mt-2">{price}</p>
        </div>
      </div>
    </Link>
  );
}