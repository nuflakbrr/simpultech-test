'use client';
import { FC } from 'react';

import SearchInput from '@/components/Common/SearchInput';
import MobileSidebar from './MobileSidebar';

const NavSidebar: FC = () => {
  return (
    <div className="p-4 border-b h-16 flex items-center bg-[#4F4F4F] shadow-sm">
      <MobileSidebar />
      <div className="hidden md:block">
        <SearchInput />
      </div>
    </div>
  );
};

export default NavSidebar;
