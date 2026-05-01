export async function getAllProducts() {
  const res = await fetch("https://sun-cart-sooty.vercel.app/data.json");
  const products = await res.json();
  return products;
}
