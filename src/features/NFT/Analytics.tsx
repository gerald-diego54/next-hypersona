import React from "react";

const Analytics: React.FC = (): JSX.Element => {
    return (
        <div className="mb-5 flex flex-col">
            <div className="mb-10 font-azeret-mono text-[32px] font-bold capitalize text-white">Analytics</div>
            <div className="mb-10 flex flex-col">
                <div className="mb-5 text-xl font-bold text-white">Contracts</div>
                <div className="grid md:grid-cols-3 flex flex-col gap-4 font-bold">
                    <div className="border-2 border-white/60 p-4">
                        <div className="flex flex-col space-y-2 font-azeret-mono text-lg">
                            <div className="font-azeret-mono text-aqua">145</div>
                            <div className="font-inter text-white">Proposals</div>
                        </div>
                    </div>
                    <div className="border-2 border-white/60 p-4">
                        <div className="flex flex-col space-y-2 font-azeret-mono text-lg">
                            <div className="font-azeret-mono text-aqua">145</div>
                            <div className="font-inter text-white">Active</div>
                        </div>
                    </div>
                    <div className="border-2 border-white/60 p-4">
                        <div className="flex flex-col space-y-2 font-azeret-mono text-lg">
                            <div className="font-azeret-mono text-aqua">145</div>
                            <div className="font-inter text-white">Ended</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="mb-5 text-xl font-bold text-white">Performance</div>
                <div className="grid md:grid-cols-3 flex flex-col gap-4">
                    <div className="border-2 border-white/60 p-4">
                        <div className="flex flex-col space-y-2 font-azeret-mono text-lg">
                            <div className="font-azeret-mono text-aqua font-bold">
                                145 <span className="font-inter text-sm text-white/80 font-normal">$NULL</span>
                            </div>
                            <div className="font-inter text-white font-bold">Total Received Views</div>
                        </div>
                    </div>
                    <div className="border-2 border-white/60 p-4">
                        <div className="flex flex-col space-y-2 font-azeret-mono text-lg">
                            <div className="font-azeret-mono text-aqua font-bold">
                                145 <span className="font-inter text-sm text-white/80 font-normal">$NULL</span>
                            </div>
                            <div className="font-inter text-white font-bold">Total amount earned</div>
                        </div>
                    </div>
                    <div className="border-2 border-white/60 p-4">
                        <div className="flex flex-col space-y-2 font-azeret-mono text-lg">
                            <div className="font-azeret-mono text-aqua font-bold">
                                145 <span className="font-inter text-sm text-white/80 font-normal">Months</span>
                            </div>
                            <div className="font-inter text-white font-bold">Average contract length</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
