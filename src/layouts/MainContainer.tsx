import React from "react";

const MainContainer: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }): JSX.Element => {
    return <div>{children}</div>;
};

export default MainContainer;
