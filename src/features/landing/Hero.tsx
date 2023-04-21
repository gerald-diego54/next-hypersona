import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = ({ waitListMode = true }: { waitListMode?: boolean }): JSX.Element => {
    const words = ["Licensing", "Collab", "Utility"];
    const { text } = useTypewriter({
        words,
        loop: 0,
        typeSpeed: 85,
        deleteSpeed: 50,
        delaySpeed: 200,
    });

    return (
        <div className="flex flex-col justify-between lg:flex-row">
            <div className="mt-10 flex shrink flex-col font-inter text-6xl md:my-12 md:text-8xl">
                <div className="flex shrink flex-col">
                    <div className="gradient-text-primary">NFT</div>
                    <div className="t text-white">
                        {text}
                        <Cursor />
                    </div>
                </div>
                <div className="gradient-text-primary">PLATFORM</div>
                <div className="mt-14 font-inter text-xl font-light text-white md:mt-0">
                    <p className="my-4">
                        We connect brands of all sizes to NFT personas to facilitate collaboration and cobranding
                        opportunities. With hypersona you can find the licensing deal of your dreams or search for
                        opportunities that will unlock mutual value for NFT collectors and brands alike.
                    </p>
                    <p className="my-6">
                        We are on a mission to help brands enter the NFT world without spending $400,000 worth of
                        Ethereum on a Bored Ape, while at the same time helping NFT collectors build up the profile of
                        their NFT personas and generate a stream of passive income.
                    </p>
                </div>
                <div className="font-azeret-mono text-xl font-bold text-cyan-300">
                    Engage, collect, share, create, earn, license, and more with hypersona.
                </div>
                <div className="mt-10 flex flex-row space-x-3 font-azeret-mono text-lg">
                    {!waitListMode && (
                        <React.Fragment>
                            <button className="bg-gradient-to-r w-[187px] from-[#BB01EA] to-[#0AF8FF] font-azeret-mono font-bold uppercase text-floppy-disk">
                                Connect wallet
                            </button>
                            <button className="border-2 border-white bg-floppy-disk p-2 font-semibold uppercase leading-tight text-white">
                                Explore
                            </button>
                        </React.Fragment>
                    )}
                    {waitListMode && (
                        <button className="bg-gradient-to-r h-[40px] px-3 from-[#BB01EA] to-[#0AF8FF] font-azeret-mono font-bold uppercase text-floppy-disk">
                            Join the waitlist
                        </button>
                    )}
                </div>
            </div>
            <div className="flex w-full flex-shrink-0 items-center lg:w-[40%]">
                <div className="mx-auto mt-20 h-[300px] min-h-[300px] w-[170px] min-w-[300px] max-w-3xl lg:mt-0 lg:h-[480px] lg:w-8/12">
                    <div className="animation-bubble mx-auto"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
