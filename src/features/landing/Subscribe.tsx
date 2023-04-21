import React from "react";

const Subscribe: React.FC = (): JSX.Element => {
    return (
        <div className="p-3 mt-20 w-full  bg-gradient-to-r from-[#BB01EA] to-[#0AF8FF]">
            <div className="flex flex-col lg:flex-row items-center p-5 max-w-[1700px] mx-auto">
                <div className="w-full text-5xl lg:w-6/12 lg:text-7xl text-floppy-disk uppercase py-[72px]">
                    <p>STAY IN THE</p>
                    <p>LOOP</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="border-b-2 py-3 border-black flex flex-row items-center justify-between">
                        <input
                            placeholder="Enter your email"
                            className="w-full lg:w-10/12 text-2xl placeholder-black bg-transparent text-black outline-none p-0 mt-10 lg:mt-0"
                        />
                        <button className="font-azeret-mono hidden lg:block uppercase text-2xl text-white bg-floppy-disk px-4 py-2">
                            Subscribe
                        </button>
                    </div>
                    <button className="font-azeret-mono block lg:hidden uppercase text-xl text-white bg-floppy-disk mt-5 w-full px-4 py-2">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
