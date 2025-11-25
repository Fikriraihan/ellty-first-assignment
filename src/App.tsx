import { useState } from "react";
import "./App.css";

const checkboxStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M13.485 3.515a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L5.778 9.808l6.293-6.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E\")",
  backgroundSize: "90%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function App() {
  const pages: string[] = [
    "Page 1",
    "Page 2",
    "Page 3",
    "Page 4",
    "Page 5",
    "Page 6",
  ];

  const [selectedPages, setSelectedPages] = useState<string[]>(["Page 1"]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const togglePage = (item: string) => {
    if (selectedPages.includes(item)) {
      setSelectedPages(selectedPages.filter((i) => i !== item));
      setSelectAll(false);
    } else {
      const newSelected = [...selectedPages, item];
      setSelectedPages(newSelected);
      if (newSelected.length === pages.length) {
        setSelectAll(true);
      }
    }
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedPages([]);
      setSelectAll(false);
    } else {
      setSelectedPages(pages.map((item) => item));
      setSelectAll(true);
    }
  };

  return (
    <main className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="space-y-3 p-[10px] rounded-[6px] w-[370px] shadow-lg bg-white">
        <div className="flex justify-between pr-[15px] pl-[22px] py-2">
          <p>All pages</p>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={toggleSelectAll}
            className="checkboxContainer"
            style={checkboxStyle}
          />
        </div>
        <div className="divider" />
        <div className="py-2 pr-[15px] pl-[22px] flex flex-col gap-4 h-[150px] overflow-auto">
          {pages.map((item) => (
            <div key={item} className="flex justify-between">
              <p>{item}</p>
              <input
                onChange={() => togglePage(item)}
                checked={selectedPages.includes(item)}
                type="checkbox"
                className="checkboxContainer checkboxContent"
                style={checkboxStyle}
              />
            </div>
          ))}
        </div>
        <div className="divider" />
        <div className="px-[15px] py-[10px]">
          <button>Done</button>
        </div>
      </div>
    </main>
  );
}

export default App;
