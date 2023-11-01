import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

interface ITabs {
  tabTitle: string;
  index: number;
  data: {
    description: string;
    date: string;
  };
}

export default function Tabs() {
  const navigate = useNavigate();

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
      <div className="flex flex-row">
        <div>
          <img
            onClick={(e) => {
              e.preventDefault();
              navigate("/tabs", { replace: true, relative: "route" });
            }}
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </div>
        <div>
          <img
            onClick={(e) => {
              e.preventDefault();
              navigate("/", { replace: true, relative: "route" });
            }}
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </div>
      </div>
      <button
        className="border-2 px-4 py-2"
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
