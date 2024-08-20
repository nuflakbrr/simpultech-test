import { FC } from 'react';
import { Search } from 'lucide-react';

import { Input } from '../ui/input';

const SearchInput: FC = () => {
  return (
    <div className="relative">
      <Search className="w-4 h-4 absolute top-3 left-3 text-white" />
      <Input
        type="text"
        className="w-full pl-9 rounded-md bg-[#4F4F4F] border-none text-white focus-visible:ring-0 focus:ring-0"
      />
    </div>
  );
};

export default SearchInput;
