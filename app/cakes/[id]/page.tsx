import { notFound } from "next/navigation";

import {
  allProducts,
} from "@/data/cakes";
import ProductDetail from "@/components/ProductDetail";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: PageProps) {
  const { id } = await params;

  const product = allProducts.find(
    (item) => item.id === id
  );

  if (!product) {
    notFound();
  }

  return (
    <ProductDetail product={product} />
  );
}