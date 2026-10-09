import { Suspense } from "react";
import Banner from "./homepage/Banner";
import Library from "./homepage/Library";
import LibraryLoading from "./homepage/LibraryLoading";

export default function Home() {
  return (
    <div>

      <Banner />
      <Suspense fallback={<LibraryLoading />}>
        <Library />
      </Suspense>

      
    </div>
  );
}
