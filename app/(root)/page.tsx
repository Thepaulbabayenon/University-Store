import Categories from "@/components/Categories";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <div>
      <Collections />
      </div>
      <Categories/>
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";

