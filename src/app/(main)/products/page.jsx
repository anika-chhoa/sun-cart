import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/data";

const ProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content">
            All{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <p className="text-base-content/50 text-sm mt-2 text-center">
            Premium summer essentials designed for your everyday moments.
          </p>
        </div>
        <Categories/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default ProductsPage;
