import classNames from "classnames";
import React from "react";

const TabGroup: React.FC<{
    className?: string;
    children: JSX.Element | JSX.Element[];
}> = ({ className, children }): JSX.Element => {
    return (
        <div className={classNames("flex min-w-[300px] font-azeret-mono font-bold text-base flex-row space-x-3 overflow-x-auto scroll-hidden", className)}>
            {children}
        </div>
    );
};

const TabItem: React.FC<
    {
        active?: boolean;
        children: JSX.Element | JSX.Element[] | string;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ active = false, children, ...props }): JSX.Element => {
    return (
        <button
            {...props}
            className={classNames("md:min-w-[110px] px-3 py-2 font-bold font-azeret-mono text-base uppercase hover:bg-white hover:text-floppy-disk", {
                "bg-white text-floppy-disk": active,
                "bg-minsk text-white": !active,
            })}
        >
            <span className="w-full text-left whitespace-nowrap">{children}</span>
        </button>
    );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    TabGroup,
    TabItem,
};
