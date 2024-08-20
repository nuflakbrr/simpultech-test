'use client';
import { FC, useState } from 'react';

import RoomChat from './components/RoomChat';
import TaskManager from './components/TaskManager';
import PopoverActions from './components/Action/PopoverActions';

const ContainerHome: FC = () => {
  const [isActive, setIsActive] = useState<string | null>(null); // inbox | task | null

  return (
    <>
      <div className="flex-col min-h-screen"></div>

      {isActive === 'inbox' && (
        <div className="fixed bottom-28 right-10 bg-red-500">
          <RoomChat />
        </div>
      )}

      {isActive === 'task' && (
        <div className="fixed bottom-28 right-10 bg-blue-500">
          <TaskManager />
        </div>
      )}

      <div className="fixed right-0 bottom-0 m-6">
        <PopoverActions isActive={isActive} setIsActive={setIsActive} />
      </div>
    </>
  );
};

export default ContainerHome;
