import React from "react";

const BodyContainer: React.FC<{ children?: boolean | JSX.Element[] | JSX.Element }> = ({ children }): JSX.Element => {
    return <div className="mx-auto max-w-[1380px] md:px-2">{children}</div>;
};

export default BodyContainer;
