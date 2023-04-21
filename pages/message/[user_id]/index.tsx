import MainContainer from "../../../src/layouts/MainContainer";
import NavigationBar from "../../../src/layouts/NavigationBar";
import MessagesComponent from "../../../src/features/messages/MessagesComponent";
import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Messages from "../../../src/features/messages/MessageBox";

const Message: NextPage = (): JSX.Element => {
    const date = "March 20, 2002";

    return (
        <MainContainer>
            <div className="px-14">
                <NavigationBar authenticated={true} />
                <div className="mx-auto max-w-[2000px]">
                    <div className="flex w-full flex-col border-2 border-gray-400">
                        <div className="mx-[23px] mt-[29px] mb-[112px] font-azeret-mono text-5xl font-medium text-white">
                            Messages
                        </div>
                        <div className="grid grid-cols-[0.5fr_1fr]">
                            <div className="scroll-hidden h-[774px] overflow-y-scroll border">
                                <Messages.MessagesBoxUser  />
                                <Messages.MessagesBoxOthers />
                                <Messages.MessagesBoxUser  />
                                <Messages.MessagesBoxOthers />
                                <Messages.MessagesBoxUser  />
                                <Messages.MessagesBoxOthers />
                                <Messages.MessagesBoxUser  />
                                <Messages.MessagesBoxOthers />
                                <Messages.MessagesBoxUser  />
                                <Messages.MessagesBoxOthers />
                            </div>
                            <div className="border">
                                <div className="grid grid-cols-2 border-b">
                                    <div className="flex flex-row">
                                        <div className="mx-[22px] my-[20px]">
                                            <Image
                                                alt=""
                                                src={"/message/profile-others.svg"}
                                                width={"50px"}
                                                height={"50px"}
                                            ></Image>
                                        </div>
                                        <div className="my-auto font-azeret-mono text-xl font-bold text-white">
                                            user_others
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="float-right mt-[24px] mr-[24px] h-[40px] w-[175px] bg-aqua font-azaret-mono text-floppy-disk font-bold uppercase"
                                        >
                                            view contract
                                        </button>
                                    </div>
                                </div>
                                <div className="overflow-none h-[602px] overflow-y-scroll border-b scroll-hidden">
                                    <div className="py-3 text-center font-azeret-mono text-lg font-bold text-aqua">
                                        {date}
                                    </div>
                                    <MessagesComponent />
                                    <MessagesComponent owner={true} />
                                    <MessagesComponent />
                                    <MessagesComponent owner={true} />
                                    <div className="py-3 text-center font-azeret-mono text-lg font-bold text-aqua">
                                        {date}
                                    </div>
                                    <MessagesComponent />
                                    <MessagesComponent owner={true} />
                                    <MessagesComponent />
                                    <MessagesComponent owner={true} />
                                    <MessagesComponent />
                                    <MessagesComponent />
                                    <div className="py-3 text-center font-azeret-mono text-lg font-bold text-aqua">
                                        {date}
                                    </div>
                                    <MessagesComponent />
                                </div>
                                <div className="flex flex-row px-5 py-4">
                                    <input
                                        type="text"
                                        className="w-full pl-2 font-inter text-white"
                                        style={{ background: "rgba(255, 255, 255, 0.2)" }}
                                        height={"40px"}
                                        placeholder="Type your message here..."
                                    />
                                    <button
                                        type="button"
                                        className="h-[40px] w-[104px] bg-aqua pl-[7px] flex flex-row pt-3 font-azaret-mono text-[16px] font-bold uppercase"
                                    >
                                        <img
                                            alt=""
                                            src="/message/message-btn-icon.svg"
                                            className="mr-2 relative top-[-4px]"
                                        ></img>
                                        send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default Message;

