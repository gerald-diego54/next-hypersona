import React from "react";

const CardCollection: React.FC<{
    title: string;
    filterComponent: JSX.Element;
    children: JSX.Element | JSX.Element[];
    footerButton: JSX.Element;
    tabs?: JSX.Element;
}> = ({ tabs, title, filterComponent, children, footerButton }): JSX.Element => {
    return (
        <React.Fragment>
            <div className="flex flex-col md:flex-row justify-between mb-5 space-y-5 md:space-y-0">
                <div className="font-azeret-mono text-[32px] md:font-bold font-[500] capitalize text-white">{title}</div>
                <div className="md:flex flex-row md:items-center font-azeret-mono text-white md:space-x-5">
                    {filterComponent}
                </div>
            </div>
            {tabs}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{children}</div>
            {footerButton}
        </React.Fragment>
    );
};

export default CardCollection;
