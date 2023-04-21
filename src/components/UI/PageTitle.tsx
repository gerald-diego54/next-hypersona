import classNames from "classnames";
import _ from "lodash";
import React from "react";

const PageTitle: React.FC<{ title: string | JSX.Element; children?: JSX.Element }> = ({
    title,
    children,
}): JSX.Element => {
    return (
        <div className="flex w-full min-w-[360px] flex-col border-2 border-gray-600 p-5">
            <div
                className={classNames("font-azeret-mono text-[32px] font-medium text-white", {
                    "mb-16": !_.isUndefined(children),
                    "mb-0": _.isUndefined(children),
                })}
            >
                {title}
            </div>
            {children}
        </div>
    );
};

export default PageTitle;
