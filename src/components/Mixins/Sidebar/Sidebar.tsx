import { FC } from 'react';

import SidebarRoutes from './SidebarRoutes';

const Sidebar: FC = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-5">
        {/* <span className="text-2xl font-bold">Simple Quicks</span> */}
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
