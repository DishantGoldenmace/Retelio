import Breadcrums1 from "../components/Breadcrums/Breadcrums1";
import ProductCard from "../sections/shop/ProductCard";
import SidebarFilters from "../sections/shop/SearchSortBar";
import SearchSortBar from "../sections/shop/SideBarFilters";

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto md:px-10 px-4 py-10 2xl:pt-14 ">
    <Breadcrums1  />

      <div className="flex flex-col md:flex-row  gap-6">
        {/* Sidebar */}
        <SearchSortBar />

        {/* Main Section */}
        <div className="flex-1">
          <SidebarFilters />

          <div>
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
