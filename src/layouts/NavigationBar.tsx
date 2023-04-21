import { Drawer } from "@mantine/core";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Image from "next/image";
import Link from "next/link";
import Logo from "../components/UI/Logo";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NavigationBar = ({
    authenticated = false,
    waitListMode = true,
}: {
    authenticated?: boolean;
    waitListMode?: boolean;
}) => {
    const [opened, setOpened] = useState<boolean>(false);
    const [searchOpen, setSearchOpen] = useState<boolean>(false);

    return (
        <div className="mx-0">
            {!searchOpen ? (
                <div className="mb-12 mt-5 flex w-full flex-row justify-between px-3 md:px-8">
                    <div className="flex flex-shrink-0 items-center md:space-x-3 mr-3">
                        <Link passHref href="/">
                            <Logo className="w-[160px] cursor-pointer" />
                        </Link>
                        {!waitListMode && (
                            <Link href={"/explore"}>
                                <button className="hidden text-lg font-extrabold uppercase text-cyan-300 md:block">
                                    Explore
                                </button>
                            </Link>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex flex-row items-center space-x-6">
                            {!waitListMode && (
                                <React.Fragment>
                                    <form method="GET" action="/search" className="w-[340px] flex flex-row space-x-3 hidden md:inline-block">
                                        <button type="submit">
                                            <SearchIcon className="cursor-pointer fill-white" />
                                        </button>
                                        <input
                                            className="w-[300px] bg-transparent px-2 py-0.5 font-inter text-white outline-none"
                                            name="keyword"
                                            placeholder="Search..."
                                            required
                                            type="search"
                                        />
                                    </form>
                                    {authenticated && (
                                        <React.Fragment>
                                            <div className="hidden md:inline">
                                                <EmailOutlinedIcon className="cursor-pointer fill-white" />
                                            </div>
                                            <div className="hidden md:inline">
                                                <Link href="/notifications">
                                                    <NotificationsOutlinedIcon className="cursor-pointer fill-white hidden md:inline" />
                                                </Link>
                                            </div>
                                            <div className="hidden md:inline">
                                                <AccountBalanceWalletOutlinedIcon
                                                    href="/wallet"
                                                    className="cursor-pointer fill-white hidden md:inline"
                                                />
                                            </div>
                                            <div className="flex cursor-pointer items-center justify-center hidden md:inline">
                                                <Link href="/profile/1">
                                                    <Image
                                                        layout="fixed"
                                                        src="/avatar.png"
                                                        width={30}
                                                        height={30}
                                                        alt="avatar"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="hidden md:inline">
                                                <LogoutOutlinedIcon className="cursor-pointer fill-white hidden md:inline" />
                                            </div>
                                            <button
                                                onClick={() => setSearchOpen(true)}
                                                className="p-2 md:hidden"
                                            >
                                                <SearchIcon style={{color: "#ffffff"}} className="md:hidden" />
                                            </button>
                                            <button
                                                onClick={() => setOpened(true)}
                                                className="bg-gradient-primary  p-2 font-bold uppercase text-floppy-disk md:hidden"
                                            >
                                                <MenuIcon />
                                            </button>
                                        </React.Fragment>
                                    )}
                                    {!authenticated && (
                                        <button className="bg-gradient-to-r from-purple-600 via-blue-400 to-cyan-400 p-2 font-bold uppercase text-floppy-disk">
                                            Connect wallet
                                        </button>
                                    )}
                                </React.Fragment>
                            )}
                            {waitListMode && (
                                <React.Fragment>
                                    <button className="bg-gradient-to-r h-[40px] px-3 text-xs md:text-base from-[#BB01EA] to-[#0AF8FF] font-azeret-mono font-bold uppercase text-floppy-disk text-base">
                                        Join the waitlist
                                    </button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                    <Drawer
                        classNames={{ drawer: "bg-floppy-disk" }}
                        onClose={() => setOpened(false)}
                        opened={opened}
                        padding="md"
                        position="right"
                        size="80%"
                        withCloseButton={false}
                    >
                        <div className="flex w-full flex-row justify-between">
                            <div className="flex flex-shrink-0 items-center md:space-x-3">
                                <Link passHref href="/">
                                    <Logo className="w-[160px] cursor-pointer" />
                                </Link>
                            </div>
                            <button
                                onClick={() => setOpened(false)}
                                className="bg-gradient-primary flex-shrink-0 p-2 font-bold uppercase text-floppy-disk "
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="overflow-auto h-[100%]">
                            {waitListMode ?
                                (
                                    <div className="mt-10 flex flex-col space-y-3">
                                        <button className="bg-gradient-primary w-full flex-shrink-0 p-2 font-bold uppercase text-floppy-disk">
                                    Join the waitlist
                                        </button>
                                    </div>
                                ):
                                (
                                    <React.Fragment>
                                        <Link href={"/profile/2"}>
                                            <div className="grid grid-row-3">
                                                <div className="mt-[24px] float-left mb-[18px]">
                                                    <Image src="/avatar.png" width={40} height={40} alt="avatar" />
                                                </div>
                                                <div className="font-azeret-mono text-white text-lg font-bold text-left">user_name</div>
                                                <div className="font-azeret-mono text-aqua text-lg font-normal">0x1a...a23a</div>
                                            </div>
                                        </Link>
                                        <div className="grid grid-row-2 h-[90%] overflow-auto">
                                            <div className="border-t border-white mt-[24px]">
                                                <Link href={"/explore/"}>
                                                    <button
                                                        className="text-floppy-disk font-bold text-lg w-full mt-[24px] uppercase font-azeret-mono py-[8px] bg-aqua"
                                                    >
                                                    Explore
                                                    </button>
                                                </Link>
                                                <button type="button" className="flex flex-row justify-between mt-8 w-full">
                                                    <div className="flex flex-row gap-3">
                                                        <EmailOutlinedIcon style={{color: "#ffffff"}}/>
                                                        <div className="text-white uppercase font-azeret-mono font-bold text-lg">Messages</div>
                                                    </div>
                                                    <div>
                                                        <ArrowRightOutlinedIcon style={{color: "#ffffff", float: "right"}} />
                                                    </div>
                                                </button>

                                                <button type="button" className="grid grid-cols-2 mt-8 w-full">
                                                    <div className="flex flex-row gap-3">
                                                        <NotificationsIcon style={{color: "#ffffff"}}/>
                                                        <div className="text-white uppercase font-azeret-mono font-bold text-lg">Notifications</div>
                                                    </div>
                                                    <div>
                                                        <ArrowRightOutlinedIcon style={{color: "#ffffff", float: "right"}} />
                                                    </div>
                                                </button>

                                                <button type="button" className="grid grid-cols-2 mt-8 w-full">
                                                    <div className="flex flex-row gap-3">
                                                        <AccountBalanceWalletOutlinedIcon style={{color: "#ffffff"}}/>
                                                        <div className="text-white uppercase font-azeret-mono font-bold text-lg">Wallet</div>
                                                    </div>
                                                    <div>
                                                        <ArrowRightOutlinedIcon style={{color: "#ffffff", float: "right"}} />
                                                    </div>
                                                </button>
                                            </div>

                                            <div aria-label="logout" className="">
                                                <button type="button" className="w-full h-[40px] border">
                                                    <div className="uppercase font-azeret-mono text-white font-bold text-lg w-full">
                                                        <LogoutOutlinedIcon style={{color: "#ffffff", marginRight: "10px"}}/>
                                                    logout
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )}
                        </div>
                    </Drawer>
                </div>
            ) : (
                <div className="h-[72px] mt-5 flex flex-row m-0 w-full">
                    <div className="flex w-full flex-row md:px-8">
                        <button
                            className="h-[40px] px-[8px] mx-0"
                            onClick={() => setSearchOpen(false)}
                        >
                            <ArrowLeftIcon style={{color: "#ffffff"}} />
                        </button>
                        <form method="GET" action="/search" className="flex flex-row h-[40px] ml-5">
                            <button type="submit" className="pt-[4px]">
                                <SearchIcon className="cursor-pointer" style={{color: "#ffffff"}} />
                            </button>
                            <input
                                className="bg-transparent px-2 pt-[5px] font-inter text-white outline-none"
                                name="keyword"
                                placeholder="Search..."
                                required
                                type="search"
                            />
                        </form>
                    </div>
                    <button
                        className="h-[40px] px-[8px] float-right ml-[-10px]"
                        onClick={() => setSearchOpen(false)}
                    >
                        <CloseIcon style={{color: "#ffffff"}} />
                    </button>
                </div>
            )
            }
        </div>
    );
};

export default NavigationBar;
