import  { useState } from "react";
import Description from "../productDetails/Description";
import Review from "../productDetails/Review";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SizeGuide from "./SizeGuide";

const ProductTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="mt-8">
      <div className=" p-4 shadow-lg">
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <TabList className="flex border-b border-gray-200 text-sm">
            <Tab
              className={`cursor-pointer pb-2  ${
                selectedIndex === 0
                  ? "text-black border-b-2 border-black font-semibold"
                  : "text-gray-500 "
              }`}
            >
              Description
            </Tab>
            <Tab
              className={`cursor-pointer pb-2 mx-4  ${
                selectedIndex === 1
                  ? "text-black border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              Reviews (4)
            </Tab>
            <Tab
              className={`cursor-pointer pb-2 mx-4  ${
                selectedIndex === 2
                  ? "text-black border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              Size guideline
            </Tab>
          </TabList>

          <TabPanel>
            <Description />
          </TabPanel>
          <TabPanel>
            <Review />
          </TabPanel>
          <TabPanel>
            <SizeGuide/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductTabs;
