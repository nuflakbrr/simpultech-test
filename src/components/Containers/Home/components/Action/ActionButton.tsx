import { FC } from 'react';

type Props = {
  isActive: string | null;
  type: 'task' | 'inbox';
  onClick: () => void;
};

const ActionButton: FC<Props> = ({ isActive, onClick, type }) => {
  const icons = {
    task: {
      active: 'bg-[#F8B76B] rounded-full p-4',
      inactive: 'bg-[#F2F2F2] rounded-full p-3',
      path: 'M4.11114 4.66669H24.1111C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88891C1.88892 5.66669 2.88892 4.66669 4.11114 4.66669ZM4.11114 6.88891V21.3334H13V6.88891H4.11114ZM24.1111 21.3334H15.2222V6.88891H24.1111V21.3334ZM23 10.7778H16.3334V12.4445H23V10.7778ZM16.3334 13.5556H23V15.2222H16.3334V13.5556ZM23 16.3334H16.3334V18H23V16.3334Z',
    },
    inbox: {
      active: 'bg-[#8785FF] rounded-full p-4',
      inactive: 'bg-[#F2F2F2] rounded-full p-3',
      path: 'M18.4443 3.11066H3.9999C3.38879 3.11066 2.88879 3.61066 2.88879 4.22177V19.7773L7.33324 15.3329H18.4443C19.0555 15.3329 19.5555 14.8329 19.5555 14.2218V4.22177C19.5555 3.61066 19.0555 3.11066 18.4443 3.11066ZM17.3332 5.3328V13.1106H6.41103L5.75547 13.7661L5.11103 14.4106V5.3328H17.3332ZM21.7777 7.55512H23.9999C24.611 7.55512 25.111 8.05512 25.111 8.66623V25.3329L20.6666 20.8885H8.44435C7.83324 20.8885 7.33324 20.3885 7.33324 19.7773V17.5551H21.7777V7.55512Z',
    },
  };

  const isTask = type === 'task';
  const classes = isActive === type ? icons[type].active : icons[type].inactive;

  return (
    <button className={classes} onClick={onClick}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={icons[type].path}
          fill={isActive === type ? 'white' : isTask ? '#F8B76B' : '#8885FF'}
        />
      </svg>
    </button>
  );
};

export default ActionButton;
