const Categories = async () => {
  const res = await fetch("https://sun-cart-sooty.vercel.app/category.json");
  const categories = await res.json();

  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <button key={category.id} className="btn mb-5">{category.category}</button>
      ))}
    </div>
  );
};

export default Categories;
