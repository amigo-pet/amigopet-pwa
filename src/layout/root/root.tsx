import { Icon } from "@/components/common";
import { Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="">
      <div className="fixed top-0 z-50 w-full h-16 bg-[linear-gradient(93deg,#DB4065_2.46%,#FA6E4C_105.67%)] rounded-lg; border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-flow-col mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 group"
          >
            <Icon name="ph ph-plus-circle" className="text-white group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          </button>
          <div
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <p className="text-2xl font-semibold text-white capitalize">Meus Pets</p>
          </div>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Icon name="ph ph-bell" className="text-white group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          </button>
        </div>
      </div>
      <Outlet />
      <div className="fixed bottom-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Icon name="ph ph-house-simple" className="group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Icon name="ph ph-paw-print" className="group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Icon name="ph ph-question" className="group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
