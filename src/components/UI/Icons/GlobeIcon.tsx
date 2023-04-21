/* eslint-disable max-len */
import React from "react";

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }): JSX.Element => {
    return (
        <svg width="22" height="24" viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.648438L11.3942 1.00683C17.2868 1.2144 22 6.05673 22 11.9999C22 17.9431 17.2868 22.7854 11.3942 22.993L11 23.3514L10.6058 22.993C4.71323 22.7854 0 17.9431 0 11.9999C0 6.05673 4.71323 1.2144 10.6058 1.00683L11 0.648438ZM2.93552 7.9999C4.04189 5.77361 6.04301 4.07043 8.46837 3.36086C7.50659 4.72869 6.82987 6.27866 6.43123 7.9999H2.93552ZM2.22302 9.9999C2.07706 10.6431 2 11.3125 2 11.9999C2 12.6873 2.07706 13.3567 2.22302 13.9999H6.10053C6.03341 13.3535 6 12.6867 6 11.9999C6 11.3131 6.03341 10.6463 6.10053 9.9999H2.22302ZM8.11227 9.9999C8.03757 10.6379 8 11.3043 8 11.9999C8 12.6955 8.03757 13.3619 8.11227 13.9999H13.8877C13.9624 13.3619 14 12.6955 14 11.9999C14 11.3043 13.9624 10.6379 13.8877 9.9999H8.11227ZM15.8995 9.9999C15.9666 10.6463 16 11.3131 16 11.9999C16 12.6867 15.9666 13.3535 15.8995 13.9999H19.777C19.9229 13.3567 20 12.6873 20 11.9999C20 11.3125 19.9229 10.6431 19.777 9.9999H15.8995ZM19.0645 7.9999H15.5688C15.1701 6.27866 14.4934 4.72869 13.5316 3.36086C15.957 4.07043 17.9581 5.77361 19.0645 7.9999ZM19.0645 15.9999H15.5688C15.1701 17.7211 14.4934 19.2711 13.5316 20.6389C15.957 19.9294 17.9581 18.2262 19.0645 15.9999ZM13.5077 15.9999H8.49228C8.97718 17.7936 9.8174 19.3183 11 20.5942C12.1826 19.3183 13.0228 17.7936 13.5077 15.9999ZM6.43123 15.9999H2.93552C4.04189 18.2262 6.04301 19.9294 8.46836 20.6389C7.50658 19.2711 6.82987 17.7211 6.43123 15.9999ZM13.5077 7.9999H8.49228C8.97718 6.20623 9.8174 4.68149 11 3.40556C12.1826 4.68149 13.0228 6.20623 13.5077 7.9999Z"
            />
        </svg>
    );
};

export default GlobeIcon;