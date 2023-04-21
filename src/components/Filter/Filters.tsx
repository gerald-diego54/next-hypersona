import React from "react";
import _ from "lodash";

const Filters: React.FC<{ filterType: string }> = ({ filterType }): JSX.Element => {
    return (
        <React.Fragment>
            { _.isEqual(filterType, "collection") &&
                <React.Fragment>
                    <div className="grid grid-row-2 mt-[40px] absolute z-30 ml-[-282px] bg-floppy-disk hidden md:inline">
                        <div className="flex flex-row">
                            <div className="border-2 border-slate-400 grid grid-row-3">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-4 mt-4">by earnings</div>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">min
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                    <span className="font-axeret-mono text-white float-right mr-3">$null</span>
                                </button>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">max
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                    <span className="font-axeret-mono text-white float-right mr-3">$null</span>
                                </button>
                            </div>
                            <div className="border-2 border-slate-400 grid grid-row-3">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-4 mt-4">by contracts</div>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">min
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                </button>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">max
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                </button>
                            </div>
                        </div>
                        <div className="border-x-2 border-y-2 border-t-0">
                            <button className="uppercase text-base font-bold text-floppy-disk bg-white m-3 h-[40px] w-[87px]">reset</button>
                            <button className="uppercase text-base font-bold text-floppy-disk bg-aqua m-3 h-[40px] w-[87px] float-right">apply</button>
                        </div>
                    </div>
                </React.Fragment>
            }

            { _.isEqual(filterType, "contracts") &&
                <React.Fragment>
                    <div className="grid grid-row-2 mt-[40px] absolute z-30 ml-[-282px] bg-floppy-disk hidden md:inline">
                        <div className="flex flex-row">
                            <div className="border-2 border-slate-400 flex flex-col">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-6 mt-4">by status</div>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mt-2 mx-4 pl-2">Active</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Expired</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Ended</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mb-2 mx-4 pl-2">Cancelled</button>
                            </div>
                            <div className="border-2 border-slate-400 grid grid-row-3">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-6 mt-4">by type</div>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mt-2 mx-4 pl-2">Pay per use</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Pay per day</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Pay per week</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Pay per month</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Pay per year</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mb-2 mx-4 pl-2">Pay once</button>
                            </div>
                        </div>
                        <div className="border-x-2 border-y-2 border-t-0">
                            <button className="uppercase text-base font-bold text-floppy-disk bg-white m-3 h-[40px] w-[87px]">reset</button>
                            <button className="uppercase text-base font-bold text-floppy-disk bg-aqua m-3 h-[40px] w-[87px] float-right">apply</button>
                        </div>
                    </div>
                </React.Fragment>
            }

            { _.isEqual(filterType, "member") &&
                <React.Fragment>
                    <div className="grid grid-row-2 mt-[40px] absolute z-30 ml-[-690px] bg-floppy-disk hidden md:inline">
                        <div className="flex flex-row">
                            <div className="border-2 border-slate-400 flex flex-col">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-4 mt-4">by collection</div>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">min
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                </button>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">max
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                </button>
                            </div>
                            <div className="border-2 border-slate-400 flex flex-col">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-4 mt-4">by contracts</div>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">min
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                </button>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">max
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                </button>
                            </div>
                            <div className="border-2 border-slate-400  flex flex-col">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-6 mt-4">response</div>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mt-2 mx-4 pl-2">Within hours</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Within minutes</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Within days</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Within weeks</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mb-2 mx-4 pl-2">Within months</button>
                            </div>
                            <div className="border-2 border-slate-400 flex flex-col">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-4 mt-4">by contracts</div>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">min
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                    <span className="font-inter font-normal text-lg float-right mr-2">%</span>
                                </button>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">max
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                    <span className="font-inter font-normal text-lg float-right mr-2">%</span>
                                </button>
                            </div>
                        </div>
                        <div className="border-x-2 border-y-2 border-t-0">
                            <button className="uppercase text-base font-bold text-floppy-disk bg-white m-3 h-[40px] w-[87px]">reset</button>
                            <button className="uppercase text-base font-bold text-floppy-disk bg-aqua m-3 h-[40px] w-[87px] float-right">apply</button>
                        </div>
                    </div>
                </React.Fragment>
            }

            {/* { _.isEqual(filterType, "viewnft-filter") &&
                <React.Fragment>
                    <div className="grid grid-row-2 mt-[40px] absolute z-30 ml-[-690px] bg-floppy-disk">
                        <div className="flex flex-row">
                            <div className="border-2 border-slate-400  flex flex-col">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-6 mt-4">by status</div>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mt-2 mx-4 pl-2"> Proposal</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2"> Pending Payment</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2"> Declined</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2"> Active</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2"> Expired</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2"> Ended</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mb-2 mx-4 pl-2">Cancelled</button>
                            </div>
                            <div className="border-2 border-slate-400  flex flex-col">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-6 mt-4">by type</div>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mt-2 mx-4 pl-2">Pay per use</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Pay per day</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Pay per week</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Pay per month</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mx-4 pl-2">Pay per year</button>
                                <button className="font-inter text-slate-400 text-left text-lg w-[168px] h-[40px] mb-2 mx-4 pl-2">Pay once</button>
                            </div>
                        </div>
                        <div className="border-x-2 border-y-2 border-t-0">
                            <button className="uppercase text-base font-bold text-floppy-disk bg-white m-3 h-[40px] w-[87px]">reset</button>
                            <button className="uppercase text-base font-bold text-floppy-disk bg-aqua m-3 h-[40px] w-[87px] float-right">apply</button>
                        </div>
                    </div>
                </React.Fragment>
            } */}
        </React.Fragment>
    );
};

export default Filters;
