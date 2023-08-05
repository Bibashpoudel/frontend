import { useState } from "react";
import data from "../utils/dats";

const dataArray = [
  { data: "marketing" },
  { data: "technology" },
  { data: "machine learning" },
];

const BlogCategoires = ({ onSelectionChange }: any) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (index: any) => {
    console.log({ index });
    setSelectedItems((prevSelected: any) => {
      return prevSelected.includes(index)
        ? prevSelected.filter((item: any) => item !== index)
        : [...prevSelected, index];
    });
    onSelectionChange(selectedItems);
  };

  console.log(selectedItems);

  return (
    <div className="flex items-center justify-center flex-col mt-4">
      <div className="flex items-center justify-center flex-wrap">
        {dataArray.map((item: any, index: any) => (
          <div
            key={index}
            className={`p-1 rounded border cursor-pointer mx-2 ${
              selectedItems.includes(item.data)
                ? "bg-slate-300 c-active"
                : "bg-white"
            }`}
            onClick={() => toggleSelection(item.data)}
          >
            {item.data}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex flex-start ">
          {selectedItems.length !== 0 ? (
            <>
              {" "}
              {selectedItems.map((index: any) => (
                <div key={index} className="p-2 text-base c-active mx-2">
                  {index}
                </div>
              ))}
            </>
          ) : (
            <div>All</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCategoires;
