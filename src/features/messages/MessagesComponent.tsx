import Image from "next/image";
import React from "react";

const MessagesComponent = ({ owner = false }: { owner?: boolean }) => {
    return (
        <div>
            { owner ?
                <React.Fragment>
                    <div className="mx-5 mt-4 border bg-[#ffffff1a]">
                        <div className="float-right mt-4 mr-4 text-aqua">3:45 PM</div>
                        <div className="flex flex-row">
                            <div className="mx-[22px] mt-[18px]">
                                <Image
                                    src={owner ? "/message/my-profile.svg" : "/message/profile-others.svg"}
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="mt-3 font-azeret-mono text-xl font-bold text-white">user_name</div>
                                <div className="mt-2 font-inter text-slate-400">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta.
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment> :
                <React.Fragment>
                    <div className="mx-5 mt-4 border">
                        <div className="float-right mt-4 mr-4 text-aqua">3:45 PM</div>
                        <div className="flex flex-row">
                            <div className="mx-[22px] mt-[18px]">
                                <Image
                                    src={owner ? "/message/profile-others.svg" : "/message/profile-others.svg"}
                                    alt=""
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="mt-3 font-azeret-mono text-xl font-bold text-white">user_others</div>
                                <div className="mt-2 font-inter text-slate-400">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta.
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    );
};

export default MessagesComponent;

