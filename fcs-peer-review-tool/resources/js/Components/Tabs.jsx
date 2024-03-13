import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

let isFirstRender = true
export const Tabs = ({ tabs, selectedTab, setSelectedTab }) => {
    const tabsRef = useRef({});
    const [underlineStyle, setUnderlineStyle] = useState({});

    const updateUnderlinePosition = (disableAnimation = false) => {
        const tab = tabsRef.current[selectedTab];
        if (tab) {
            setUnderlineStyle({
                width: tab.offsetWidth + 'px',
                transform: `translateX(${tab.offsetLeft}px)`,
                opacity: 1,
                visibility: 'visible',
                transition: disableAnimation ? 'none' : 'all 300ms ease-in-out',
            });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            updateUnderlinePosition(true);
        };
        updateUnderlinePosition(isFirstRender);
        isFirstRender = false;

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [selectedTab]);

    return (
        <div className="w-full mb-4 text-center relative" style={{ height: '50px' }}>
            {tabs.map((tab) => (
                <button
                    ref={(el) => (tabsRef.current[tab] = el)}
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={twMerge(
                        "text-xl px-4 py-1 text-gray-600 outline-none focus:outline-none relative",
                        selectedTab === tab && "text-black"
                    )}
                >
                    {tab}
                </button>
            ))}
            <span
                className="absolute bottom-0 bg-black left-0"
                style={{
                    ...underlineStyle,
                    height: '2px',
                }}
            />
        </div>
    );
};
