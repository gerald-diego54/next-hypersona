import * as React from "react";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import _ from "lodash";

const FilterDrawer: React.FC<{ filterType: string }> = ({ filterType }):JSX.Element => {

    return(
        <div className="md:hidden h-full flex flex-col justify-between">
            <React.Fragment>
                <div className="flex justify-center border-b border-slate-400">
                    <DragHandleOutlinedIcon style={{color: "#ffffff"}}/>
                </div>
                {
                    _.isEqual(filterType, "collection") && (
                        <React.Fragment>
                            <div className="h-[291px] overflow-auto">
                                <div className="px-[24px] my-[22px] border-b border-slate-400 pb-3">
                                    <div className="text-white uppercase font-azeret-mono font-bold text-base">by earnings</div>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            min
                                        <span className="font-inter font-light ml-3">60</span>
                                        <span className="text-white uppercase float-right">$null</span>
                                    </button>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            max
                                        <span className="font-inter font-light ml-3">60</span>
                                        <span className="text-white uppercase float-right">$null</span>
                                    </button>
                                </div>
                                <div className="px-[24px] my-[22px]">
                                    <div className="text-white uppercase font-azeret-mono font-bold text-base ">by contacts</div>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            min
                                        <span className="font-inter font-light ml-3">60</span>
                                    </button>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            max
                                        <span className="font-inter font-light ml-3">60</span>
                                    </button>
                                </div>
                            </div>
                            <div className="px-[24px] my-[22px] flex flex-row gap-2 flex items-end border-t border-slate-400 pt-5">
                                <button className="bg-white text-floppy-disk uppercase font-bold h-[40px] w-full">
                                        reset
                                </button>
                                <button className="bg-aqua text-floppy-disk uppercase font-bold h-[40px] w-full">
                                        apply
                                </button>
                            </div>
                        </React.Fragment>
                    )
                }

                {
                    _.isEqual(filterType, "contracts") && (
                        <React.Fragment>
                            <div className="h-full overflow-auto">
                                <div className="flex flex-col border-b border-slate-400 pb-5">
                                    <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">by status</div>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Proposal</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Pending Payment</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Declined</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Active</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Expired</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Ended</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Cancelled</button>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">by type</div>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Pay per use</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Pay per day</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Pay per week</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Pay per month</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Pay per year</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Pay once</button>
                                </div>
                            </div>
                            <div className="px-[24px] my-[22px] flex flex-row gap-2 border-t border-slate-400 pt-6">
                                <button className="bg-white text-floppy-disk uppercase font-bold h-[40px] w-full">
                                    reset
                                </button>
                                <button className="bg-aqua text-floppy-disk uppercase font-bold h-[40px] w-full">
                                    apply
                                </button>
                            </div>
                        </React.Fragment>
                    )
                }

                {
                    _.isEqual(filterType, "member") && (
                        <React.Fragment>
                            <div className="h-full overflow-auto">
                                <div className="px-[24px] mt-[22px] border-b border-slate-400 pb-3">
                                    <div className="text-white uppercase font-azeret-mono font-bold text-base">by collection</div>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            min
                                        <span className="font-inter font-light ml-3">60</span>
                                    </button>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            max
                                        <span className="font-inter font-light ml-3">60</span>
                                    </button>
                                </div>
                                <div className="px-[24px] mt-[22px] border-b border-slate-400 pb-3">
                                    <div className="text-white uppercase font-azeret-mono font-bold text-base">by contracts</div>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            min
                                        <span className="font-inter font-light ml-3">60</span>
                                    </button>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            max
                                        <span className="font-inter font-light ml-3">60</span>
                                    </button>
                                </div>
                                <div className="flex flex-col border-b border-slate-400 pb-5">
                                    <div className="text-white font-azeret-mono uppercase font-bold text-base px-[24px] mt-[22px]">response time</div>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[15px]">Within hours</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Within minutes</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Within days</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Within weeks</button>
                                    <button className="text-white text-left font-inter text-slate-400 px-[24px] mt-[5px]">Within months</button>
                                </div>
                                <div className="px-[24px] mt-[22px]">
                                    <div className="text-white uppercase font-azeret-mono font-bold text-base">response rate</div>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            min
                                        <span className="font-inter font-light ml-3">60</span>
                                        <span className="text-white uppercase float-right">%</span>
                                    </button>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            max
                                        <span className="font-inter font-light ml-3">60</span>
                                        <span className="text-white uppercase float-right">%</span>
                                    </button>
                                </div>
                            </div>
                            <div className="px-[24px] my-[22px] flex flex-row gap-2 border-t border-slate-400 pt-6">
                                <button className="bg-white text-floppy-disk uppercase font-bold h-[40px] w-full">
                                    reset
                                </button>
                                <button className="bg-aqua text-floppy-disk uppercase font-bold h-[40px] w-full">
                                    apply
                                </button>
                            </div>
                        </React.Fragment>
                    )
                }

                {
                    _.isEqual(filterType, "nft") && (
                        <React.Fragment>
                            <div className="h-full overflow-auto">
                                <div className="px-[24px] mt-[22px] border-b border-slate-400 pb-3">
                                    <div className="text-white uppercase font-azeret-mono font-bold text-base">by price</div>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            min
                                        <span className="font-inter font-light ml-3">60</span>
                                        <span className="text-white uppercase float-right">$null</span>
                                    </button>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            max
                                        <span className="font-inter font-light ml-3">60</span>
                                        <span className="text-white uppercase float-right">$null</span>
                                    </button>
                                </div>
                                <div className="px-[24px] mt-[22px] border-b border-slate-400 pb-3">
                                    <div className="text-white uppercase font-azeret-mono font-bold text-base">by contracts</div>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            min
                                        <span className="font-inter font-light ml-3">60</span>
                                    </button>
                                    <button className="border w-full text-left text-white h-[40px] bg-minsk px-3 uppercase my-3">
                                            max
                                        <span className="font-inter font-light ml-3">60</span>
                                    </button>
                                </div>
                            </div>
                            <div className="px-[24px] my-[22px] flex flex-row gap-2 border-t border-slate-400 pt-6">
                                <button className="bg-white text-floppy-disk uppercase font-bold h-[40px] w-full">
                                    reset
                                </button>
                                <button className="bg-aqua text-floppy-disk uppercase font-bold h-[40px] w-full">
                                    apply
                                </button>
                            </div>
                        </React.Fragment>
                    )
                }
            </React.Fragment>
        </div>
    );
};

export default FilterDrawer;
