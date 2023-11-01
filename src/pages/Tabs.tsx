import { useState } from "react";

interface ITabs {
  tabTitle: string;
  index: number;
  data: {
    description: string;
    date: string;
  };
}

export default function Tabs() {
  const [tabItem, setTabItem] = useState<ITabs[]>([
    {
      index: 0,
      tabTitle: "Item 1",
      data: { description: "Item's 1", date: "" },
    },
    {
      index: 1,
      tabTitle: "Item 2",
      data: { description: "Item's 2", date: "" },
    },
  ]);

  const [currentTabSelected, setCurrentTabSelected] = useState<number>(0);

  return (
    <>
      <button
        onClick={() => {
          setTabItem((item: ITabs[]) => {
            const index: number = item.length + 1;
            return [
              ...item,
              {
                index: index,
                tabTitle: `Item ${index}`,
                data: { description: `Item's ${index}`, date: "" },
              },
            ];
          });
        }}>
        add
      </button>
      <div className="border-b border-gray-200 ">
        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
          {tabItem.map((item: ITabs, index: number) => {
            return (
              <button
                onClick={() => {
                  setCurrentTabSelected(index);
                }}
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active"
                id="tabs-with-underline-item-1"
                data-hs-tab="#tabs-with-underline-1"
                aria-controls="tabs-with-underline-1"
                role="tab">
                {item.tabTitle}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-3">
        {
          tabItem.map((item: ITabs) => {
            return (
              <div
                id="tabs-with-underline-1"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-1">
                <p className="text-gray-500 ">
                  This is the{" "}
                  <em className="font-semibold text-gray-800 ">
                    {item.data.description}
                  </em>
                  tab body.
                </p>
              </div>
            );
          })[currentTabSelected]
        }
      </div>
    </>
  );
}
