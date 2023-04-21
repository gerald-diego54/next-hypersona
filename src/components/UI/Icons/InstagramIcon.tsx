/* eslint-disable max-len */
import React from "react";

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }): JSX.Element => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 2C3.79086 2 2 3.79086 2 6V16C2 18.2091 3.79086 20 6 20H16C18.2091 20 20 18.2091 20 16V6C20 3.79086 18.2091 2 16 2H6ZM0 6C0 2.68629 2.68629 0 6 0H16C19.3137 0 22 2.68629 22 6V16C22 19.3137 19.3137 22 16 22H6C2.68629 22 0 19.3137 0 16V6ZM11.4835 7.98924C10.8593 7.89668 10.2218 8.0033 9.66175 8.29392C9.10165 8.58455 8.64745 9.04438 8.36376 9.60802C8.08006 10.1717 7.98131 10.8104 8.08156 11.4334C8.18181 12.0564 8.47595 12.6319 8.92214 13.0781C9.36833 13.5243 9.94386 13.8184 10.5669 13.9187C11.1898 14.0189 11.8286 13.9202 12.3922 13.6365C12.9559 13.3528 13.4157 12.8986 13.7063 12.3385C13.997 11.7784 14.1036 11.1409 14.011 10.5167C13.9166 9.88005 13.6199 9.2906 13.1648 8.83547C12.7097 8.38034 12.1202 8.08365 11.4835 7.98924ZM8.74061 6.51868C9.67411 6.0343 10.7366 5.85661 11.7769 6.01087C12.838 6.16823 13.8204 6.6627 14.579 7.42126C15.3376 8.17981 15.832 9.16222 15.9894 10.2234C16.1436 11.2637 15.966 12.3261 15.4816 13.2596C14.9972 14.1931 14.2308 14.9501 13.2914 15.423C12.352 15.8958 11.2874 16.0604 10.2491 15.8933C9.21078 15.7262 8.25158 15.236 7.50793 14.4923C6.76428 13.7487 6.27404 12.7895 6.10696 11.7511C5.93988 10.7128 6.10446 9.64824 6.57729 8.70884C7.05011 7.76944 7.80711 7.00305 8.74061 6.51868ZM16.5 4.5C15.9477 4.5 15.5 4.94772 15.5 5.5C15.5 6.05228 15.9477 6.5 16.5 6.5H16.51C17.0623 6.5 17.51 6.05228 17.51 5.5C17.51 4.94772 17.0623 4.5 16.51 4.5H16.5Z"
            />
        </svg>
    );
};

export default InstagramIcon;
