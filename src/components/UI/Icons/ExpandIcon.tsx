import React from "react";

const ExpandIcon: React.FC = ({ ...props }): JSX.Element => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 0H14H19H20V1V6V7H18V6V2H14H13V0ZM2 14V13H0V14V19V20H1H6H7V18H6H2V14ZM20 14V13H18V14V18H14H13V20H14H19H20V19V14ZM1 0H0V1V6V7H2V6V2H6H7V0H6H1Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default ExpandIcon;
