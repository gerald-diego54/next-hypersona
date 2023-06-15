import React from "react";
import _ from "lodash";

const Filters: React.FC<{ filterType: string }> = ({ filterType }): JSX.Element => {
    return (
        <React.Fragment>
            {_.isEqual(filterType, "collection") && (
                <React.Fragment>
                    <div className="grid-row-2 absolute z-30 mt-[40px] ml-[-282px] grid hidden bg-floppy-disk md:inline">
                        <div className="flex flex-row">
                            <div className="grid-row-3 grid border-2 border-slate-400">
                                <div className="ml-4 mt-4 font-azeret-mono font-bold uppercase text-white">
                                    by earnings
                                </div>
                                <button
                                    className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                >
                                    min
                                    <span className="font-inter text-lg font-normal"> 60</span>
                                    <span className="font-axeret-mono float-right mr-3 text-white">$null</span>
                                </button>
                                <button
                                    className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                >
                                    max
                                    <span className="font-inter text-lg font-normal"> 60</span>
                                    <span className="font-axeret-mono float-right mr-3 text-white">$null</span>
                                </button>
                            </div>
                            <div className="grid-row-3 grid border-2 border-slate-400">
                                <div className="ml-4 mt-4 font-azeret-mono font-bold uppercase text-white">
                                    by contracts
                                </div>
                                <button
                                    className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                >
                                    min
                                    <span className="font-inter text-lg font-normal"> 60</span>
                                </button>
                                <button
                                    className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                >
                                    max
                                    <span className="font-inter text-lg font-normal"> 60</span>
                                </button>
                            </div>
                        </div>
                        <div className="border-x-2 border-y-2 border-t-0">
                            <button className="m-3 h-[40px] w-[87px] bg-white text-base font-bold uppercase text-floppy-disk">
                                reset
                            </button>
                            <button className="float-right m-3 h-[40px] w-[87px] bg-aqua text-base font-bold uppercase text-floppy-disk">
                                apply
                            </button>
                        </div>
                    </div>
                </React.Fragment>
            )}

            {_.isEqual(filterType, "contracts") && (
                <React.Fragment>
                    <div className="grid-row-2 absolute z-30 mt-[40px] ml-[-282px] grid hidden bg-floppy-disk md:inline">
                        <div className="flex flex-row">
                            <div className="flex flex-col border-2 border-slate-400">
                                <div className="ml-6 mt-4 font-azeret-mono font-bold uppercase text-white">
                                    by status
                                </div>
                                <button className="mx-4 mt-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Active
                                </button>
                                <button className="mx-4 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Expired
                                </button>
                                <button className="mx-4 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Ended
                                </button>
                                <button className="mx-4 mb-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Cancelled
                                </button>
                            </div>
                            <div className="grid-row-3 grid border-2 border-slate-400">
                                <div className="ml-6 mt-4 font-azeret-mono font-bold uppercase text-white">by type</div>
                                <button className="mx-4 mt-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Pay per use
                                </button>
                                <button className="mx-4 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Pay per day
                                </button>
                                <button className="mx-4 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Pay per week
                                </button>
                                <button className="mx-4 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Pay per month
                                </button>
                                <button className="mx-4 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Pay per year
                                </button>
                                <button className="mx-4 mb-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Pay once
                                </button>
                            </div>
                        </div>
                        <div className="border-x-2 border-y-2 border-t-0">
                            <button className="m-3 h-[40px] w-[87px] bg-white text-base font-bold uppercase text-floppy-disk">
                                reset
                            </button>
                            <button className="float-right m-3 h-[40px] w-[87px] bg-aqua text-base font-bold uppercase text-floppy-disk">
                                apply
                            </button>
                        </div>
                    </div>
                </React.Fragment>
            )}

            {_.isEqual(filterType, "member") && (
                <React.Fragment>
                    <div className="grid-row-2 absolute z-30 mt-[40px] ml-[-690px] grid hidden bg-floppy-disk md:inline">
                        <div className="flex flex-row">
                            <div className="flex flex-col border-2 border-slate-400">
                                <div className="ml-4 mt-4 font-azeret-mono font-bold uppercase text-white">
                                    by collection
                                </div>
                                <button
                                    className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                >
                                    min
                                    <span className="font-inter text-lg font-normal"> 60</span>
                                </button>
                                <button
                                    className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                >
                                    max
                                    <span className="font-inter text-lg font-normal"> 60</span>
                                </button>
                            </div>
                            <div className="flex flex-col border-2 border-slate-400">
                                <div className="ml-4 mt-4 font-azeret-mono font-bold uppercase text-white">
                                    by contracts
                                </div>
                                <button
                                    className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                >
                                    min
                                    <span className="font-inter text-lg font-normal"> 60</span>
                                </button>
                                <button
                                    className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                >
                                    max
                                    <span className="font-inter text-lg font-normal"> 60</span>
                                </button>
                            </div>
                            <div className="flex flex-col  border-2 border-slate-400">
                                <div className="ml-6 mt-4 font-azeret-mono font-bold uppercase text-white">
                                    response
                                </div>
                                <button className="mx-4 mt-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Within hours
                                </button>
                                <button className="mx-4 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Within minutes
                                </button>
                                <button className="mx-4 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Within days
                                </button>
                                <button className="mx-4 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Within weeks
                                </button>
                                <button className="mx-4 mb-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg text-slate-400">
                                    Within months
                                </button>
                            </div>
                            <div className="flex flex-col border-2 border-slate-400">
                                <div className="ml-4 mt-4 font-azeret-mono font-bold uppercase text-white">
                                    by contracts
                                </div>
                                <button
                                    className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                >
                                    min
                                    <span className="font-inter text-lg font-normal"> 60</span>
                                    <span className="float-right mr-2 font-inter text-lg font-normal">%</span>
                                </button>
                                <button
                                    className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                >
                                    max
                                    <span className="font-inter text-lg font-normal"> 60</span>
                                    <span className="float-right mr-2 font-inter text-lg font-normal">%</span>
                                </button>
                            </div>
                        </div>
                        <div className="border-x-2 border-y-2 border-t-0">
                            <button className="m-3 h-[40px] w-[87px] bg-white text-base font-bold uppercase text-floppy-disk">
                                reset
                            </button>
                            <button className="float-right m-3 h-[40px] w-[87px] bg-aqua text-base font-bold uppercase text-floppy-disk">
                                apply
                            </button>
                        </div>
                    </div>
                </React.Fragment>
            )}

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
