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
                    <div className="mr-3 flex flex-shrink-0 items-center md:space-x-3">
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
                                    <form
                                        method="GET"
                                        action="/search"
                                        className="flex hidden w-[340px] flex-row space-x-3 md:inline-block"
                                    >
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
                                                    <NotificationsOutlinedIcon className="hidden cursor-pointer fill-white md:inline" />
                                                </Link>
                                            </div>
                                            <div className="hidden md:inline">
                                                <AccountBalanceWalletOutlinedIcon
                                                    href="/wallet"
                                                    className="hidden cursor-pointer fill-white md:inline"
                                                />
                                            </div>
                                            <div className="flex hidden cursor-pointer items-center justify-center md:inline">
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
                                                <LogoutOutlinedIcon className="hidden cursor-pointer fill-white md:inline" />
                                            </div>
                                            <button onClick={() => setSearchOpen(true)} className="p-2 md:hidden">
                                                <SearchIcon style={{ color: "#ffffff" }} className="md:hidden" />
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
                                    <button
                                        className="h-[40px] bg-gradient-to-r from-[#BB01EA] to-[#0AF8FF] px-3
                                    font-azeret-mono text-xs text-base font-bold uppercase text-floppy-disk md:text-base"
                                    >
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
                        <div className="h-[100%] overflow-auto">
                            {waitListMode ? (
                                <div className="mt-10 flex flex-col space-y-3">
                                    <button className="bg-gradient-primary w-full flex-shrink-0 p-2 font-bold uppercase text-floppy-disk">
                                        Join the waitlist
                                    </button>
                                </div>
                            ) : (
                                <React.Fragment>
                                    <Link href={"/profile/2"}>
                                        <div className="grid-row-3 grid">
                                            <div className="float-left mt-[24px] mb-[18px]">
                                                <Image src="/avatar.png" width={40} height={40} alt="avatar" />
                                            </div>
                                            <div className="text-left font-azeret-mono text-lg font-bold text-white">
                                                user_name
                                            </div>
                                            <div className="font-azeret-mono text-lg font-normal text-aqua">
                                                0x1a...a23a
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="grid-row-2 grid h-[90%] overflow-auto">
                                        <div className="mt-[24px] border-t border-white">
                                            <Link href={"/explore/"}>
                                                <button className="mt-[24px] w-full bg-aqua py-[8px] font-azeret-mono text-lg font-bold uppercase text-floppy-disk">
                                                    Explore
                                                </button>
                                            </Link>
                                            <button type="button" className="mt-8 flex w-full flex-row justify-between">
                                                <div className="flex flex-row gap-3">
                                                    <EmailOutlinedIcon style={{ color: "#ffffff" }} />
                                                    <div className="font-azeret-mono text-lg font-bold uppercase text-white">
                                                        Messages
                                                    </div>
                                                </div>
                                                <div>
                                                    <ArrowRightOutlinedIcon
                                                        style={{ color: "#ffffff", float: "right" }}
                                                    />
                                                </div>
                                            </button>

                                            <button type="button" className="mt-8 grid w-full grid-cols-2">
                                                <div className="flex flex-row gap-3">
                                                    <NotificationsIcon style={{ color: "#ffffff" }} />
                                                    <div className="font-azeret-mono text-lg font-bold uppercase text-white">
                                                        Notifications
                                                    </div>
                                                </div>
                                                <div>
                                                    <ArrowRightOutlinedIcon
                                                        style={{ color: "#ffffff", float: "right" }}
                                                    />
                                                </div>
                                            </button>

                                            <button type="button" className="mt-8 grid w-full grid-cols-2">
                                                <div className="flex flex-row gap-3">
                                                    <AccountBalanceWalletOutlinedIcon style={{ color: "#ffffff" }} />
                                                    <div className="font-azeret-mono text-lg font-bold uppercase text-white">
                                                        Wallet
                                                    </div>
                                                </div>
                                                <div>
                                                    <ArrowRightOutlinedIcon
                                                        style={{ color: "#ffffff", float: "right" }}
                                                    />
                                                </div>
                                            </button>
                                        </div>

                                        <div aria-label="logout" className="">
                                            <button type="button" className="h-[40px] w-full border">
                                                <div className="w-full font-azeret-mono text-lg font-bold uppercase text-white">
                                                    <LogoutOutlinedIcon
                                                        style={{ color: "#ffffff", marginRight: "10px" }}
                                                    />
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
                <div className="m-0 mt-5 flex h-[72px] w-full flex-row">
                    <div className="flex w-full flex-row md:px-8">
                        <button className="mx-0 h-[40px] px-[8px]" onClick={() => setSearchOpen(false)}>
                            <ArrowLeftIcon style={{ color: "#ffffff" }} />
                        </button>
                        <form method="GET" action="/search" className="ml-5 flex h-[40px] flex-row">
                            <button type="submit" className="pt-[4px]">
                                <SearchIcon className="cursor-pointer" style={{ color: "#ffffff" }} />
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
                    <button className="float-right ml-[-10px] h-[40px] px-[8px]" onClick={() => setSearchOpen(false)}>
                        <CloseIcon style={{ color: "#ffffff" }} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default NavigationBar;
