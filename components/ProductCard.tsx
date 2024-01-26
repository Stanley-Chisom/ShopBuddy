import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} className="prodcut-card">
      <div className="product-card_img-container">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="product-card-img"
        />
      </div>
    </Link>
  );
};

export default ProductCard; 
