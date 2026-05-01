import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-white border border-orange-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-3xl overflow-hidden group">
      <figure className="relative w-full aspect-square object-cover h-80 bg-amber-50/60 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          
        />
        <div className="absolute top-3 right-3">
          <span className="badge badge-sm bg-amber-50 text-amber-700 border border-amber-200 font-semibold shadow-sm">
            {product.category}
          </span>
        </div>
      </figure>

      <div className="card-body p-5 gap-3">
        <h3 className="font-bold text-base text-base-content leading-snug">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => {
            const filled = star <= Math.floor(product.rating);
            const half = !filled && star === Math.ceil(product.rating);
            return (
              <span key={star} className="relative inline-block">
                <FaStar size={13} className="text-base-content/20" />
                {(filled || half) && (
                  <span
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: half ? "50%" : "100%" }}
                  >
                    <FaStar size={13} className="text-amber-400" />
                  </span>
                )}
              </span>
            );
          })}
          <span className="text-xs font-semibold text-base-content/50 ml-1">
            ({product.rating})
          </span>
        </div>

        <span className="text-xl font-extrabold text-orange-500">
          ${product.price}
        </span>

        <Link
          href={`/products/${product.id}`}
          className="btn btn-block bg-gradient-to-r from-orange-500 to-amber-400 text-white border-0 rounded-full shadow-md shadow-orange-200/50 hover:scale-[1.02] transition-transform duration-200 mt-1"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
