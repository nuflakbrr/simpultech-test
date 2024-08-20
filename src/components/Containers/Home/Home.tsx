'use client';
import { FC, useState } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const ContainerHome: FC = () => {
  const [isActive, setIsActive] = useState<string | null>(null);

  return (
    <>
      <div className="flex-col min-h-screen"></div>

      {/* Float button popover */}
      <div className="fixed bottom-6 right-10">
        {isActive === null ? (
          <Popover>
            <PopoverButton>
              <span>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-[#2F80ED] rounded-full"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.4427 12.3359C32.3618 12.9486 32.6101 14.1904 31.9974 15.1094L24.737 26H35C35.7376 26 36.4153 26.406 36.7634 27.0563C37.1114 27.7066 37.0732 28.4957 36.6641 29.1094L27.3308 43.1094C26.7181 44.0285 25.4763 44.2768 24.5573 43.6641C23.6382 43.0514 23.3899 41.8097 24.0026 40.8906L31.263 30H21C20.2624 30 19.5847 29.5941 19.2367 28.9437C18.8886 28.2934 18.9268 27.5043 19.3359 26.8906L28.6692 12.8906C29.2819 11.9716 30.5237 11.7232 31.4427 12.3359Z"
                    fill="white"
                  />
                </svg>
              </span>
            </PopoverButton>
            <PopoverPanel anchor="left">
              <div className="flex items-center gap-3 mx-2 transition-all duration-200 ease-linear">
                <button
                  className="bg-[#F2F2F2] rounded-full p-3"
                  onClick={() => setIsActive('task')}
                >
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.11114 4.66669H24.1111C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88891C1.88892 5.66669 2.88892 4.66669 4.11114 4.66669ZM4.11114 6.88891V21.3334H13V6.88891H4.11114ZM24.1111 21.3334H15.2222V6.88891H24.1111V21.3334ZM23 10.7778H16.3334V12.4445H23V10.7778ZM16.3334 13.5556H23V15.2222H16.3334V13.5556ZM23 16.3334H16.3334V18H23V16.3334Z"
                        fill="#F8B76B"
                      />
                    </svg>
                  </span>
                </button>

                <button
                  className="bg-[#F2F2F2] rounded-full p-3"
                  onClick={() => setIsActive('inbox')}
                >
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.4443 3.11066H3.9999C3.38879 3.11066 2.88879 3.61066 2.88879 4.22177V19.7773L7.33324 15.3329H18.4443C19.0555 15.3329 19.5555 14.8329 19.5555 14.2218V4.22177C19.5555 3.61066 19.0555 3.11066 18.4443 3.11066ZM17.3332 5.3328V13.1106H6.41103L5.75547 13.7661L5.11103 14.4106V5.3328H17.3332ZM21.7777 7.55512H23.9999C24.611 7.55512 25.111 8.05512 25.111 8.66623V25.3329L20.6666 20.8885H8.44435C7.83324 20.8885 7.33324 20.3885 7.33324 19.7773V17.5551H21.7777V7.55512Z"
                        fill="#8885FF"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </PopoverPanel>
          </Popover>
        ) : null}

        {isActive === 'inbox' ? (
          <div className="flex items-center gap-3 mx-2 transition-all duration-200 ease-linear">
            <button
              className="bg-[#F2F2F2] rounded-full p-3"
              onClick={() => setIsActive('task')}
            >
              <span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.11114 4.66669H24.1111C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88891C1.88892 5.66669 2.88892 4.66669 4.11114 4.66669ZM4.11114 6.88891V21.3334H13V6.88891H4.11114ZM24.1111 21.3334H15.2222V6.88891H24.1111V21.3334ZM23 10.7778H16.3334V12.4445H23V10.7778ZM16.3334 13.5556H23V15.2222H16.3334V13.5556ZM23 16.3334H16.3334V18H23V16.3334Z"
                    fill="#F8B76B"
                  />
                </svg>
              </span>
            </button>

            <button
              className="bg-[#8785FF] rounded-full p-4"
              onClick={() => setIsActive('inbox')}
            >
              <span>
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.0371 2.92615H4.66671C3.97411 2.92615 3.40745 3.49281 3.40745 4.18541V21.815L8.44448 16.778H21.0371C21.7297 16.778 22.2963 16.2113 22.2963 15.5187V4.18541C22.2963 3.49281 21.7297 2.92615 21.0371 2.92615ZM19.7778 5.44458V14.2594H7.39931L6.65635 15.0024L5.92598 15.7327V5.44458H19.7778ZM24.8149 7.96321H27.3334C28.026 7.96321 28.5926 8.52987 28.5926 9.22247V28.1114L23.5556 23.0743H9.70374C9.01115 23.0743 8.44448 22.5077 8.44448 21.8151V19.2965H24.8149V7.96321Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        ) : null}

        {isActive === 'task' ? (
          <div className="flex items-center gap-3 mx-2 transition-all duration-200 ease-linear">
            <button
              className="bg-[#F2F2F2] rounded-full p-3"
              onClick={() => setIsActive('inbox')}
            >
              <span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.4443 3.11066H3.9999C3.38879 3.11066 2.88879 3.61066 2.88879 4.22177V19.7773L7.33324 15.3329H18.4443C19.0555 15.3329 19.5555 14.8329 19.5555 14.2218V4.22177C19.5555 3.61066 19.0555 3.11066 18.4443 3.11066ZM17.3332 5.3328V13.1106H6.41103L5.75547 13.7661L5.11103 14.4106V5.3328H17.3332ZM21.7777 7.55512H23.9999C24.611 7.55512 25.111 8.05512 25.111 8.66623V25.3329L20.6666 20.8885H8.44435C7.83324 20.8885 7.33324 20.3885 7.33324 19.7773V17.5551H21.7777V7.55512Z"
                    fill="#8885FF"
                  />
                </svg>
              </span>
            </button>

            <button
              className="bg-[#F8B76B] rounded-full p-4"
              onClick={() => setIsActive('task')}
            >
              <span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.11117 4.66626H24.1112C25.3334 4.66626 26.3334 5.66626 26.3334 6.88848V21.3329C26.3334 22.5551 25.3334 23.5551 24.1112 23.5551H4.11117C2.88895 23.5551 1.88895 22.5551 1.88895 21.3329V6.88848C1.88895 5.66626 2.88895 4.66626 4.11117 4.66626ZM4.11117 6.88848V21.3329H13.0001V6.88848H4.11117ZM24.1112 21.3329H15.2223V6.88848H24.1112V21.3329ZM23.0001 10.7774H16.3334V12.444H23.0001V10.7774ZM16.3334 13.5551H23.0001V15.2218H16.3334V13.5551ZM23.0001 16.3329H16.3334V17.9996H23.0001V16.3329Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ContainerHome;
