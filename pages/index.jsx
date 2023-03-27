import Hero from "@/components/Hero";
import ProductSection from "./ProductSection";
import Button from "@/components/Button";
import ProductList from "data/ProductList";

export default function Home() {
  const first12Products = ProductList.slice(0, 12);

  return (
    <>
      <Hero />
      <ProductSection items={first12Products} />
      <Button />
    </>
  );
}