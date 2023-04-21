import * as React from "react";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import _ from "lodash";

const SortDrawer: React.FC<{ filterType: string }> = ({ filterType }):JSX.Element => {

    return(
        <div className="md:hidden">
            <React.Fragment>
                <div className="flex justify-center border-b border-slate-400">
                    <DragHandleOutlinedIcon style={{color: "#ffffff"}}/>
                </div>
                {
                    _.isEqual(filterType, "collection-sort") && (
                        <React.Fragment>
                            <div className="overflow-auto">
                                <div className="flex flex-col border-b border-slate-400 pb-5">
                                    <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">by earnings</div>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Low to High</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">High to Low</button>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">by date</div>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Newest to Oldest</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Oldest to Highest</button>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }

                {
                    _.isEqual(filterType, "contracts-sort") && (
                        <React.Fragment>
                            <div className="flex flex-col border-b border-slate-400 pb-5">
                                <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">by price</div>
                                <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Low to High</button>
                                <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">High to Low</button>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">by date</div>
                                <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Newest to Oldest</button>
                                <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Oldest to Highest</button>
                            </div>
                        </React.Fragment>
                    )
                }

                {
                    _.isEqual(filterType, "member-sort") && (
                        <React.Fragment>
                            <div className="flex flex-col border-b border-slate-400 pb-5">
                                <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">by activity</div>
                                <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Newest to Oldest</button>
                                <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Oldest to Highest</button>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">by date joined</div>
                                <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Newest to Oldest</button>
                                <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Oldest to Highest</button>
                            </div>
                        </React.Fragment>
                    )
                }

                {
                    _.isEqual(filterType, "nft-sort") && (
                        <React.Fragment>
                            <div className="overflow-auto">
                                <div className="flex flex-col border-b border-slate-400 pb-5">
                                    <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">by price</div>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Low to High</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">High to Low</button>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">by date</div>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Newest to Oldest</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Oldest to Highest</button>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
            </React.Fragment>
        </div>
    );
};

export default SortDrawer;
