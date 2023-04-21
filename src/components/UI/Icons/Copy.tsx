import React from "react";

const Copy: React.FC = ({ ...props }): JSX.Element => {
    return (
        <svg width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 0H0V1V15V16H2V15V2H13H14V0H13H1ZM5 4H4V5V19V20H5H17H18V19V5V4H17H5ZM6 18V6H16V18H6Z"
                fill="#ffffff"
            />
        </svg>
    );
};

export default Copy;
