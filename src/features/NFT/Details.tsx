import React from "react";

const Details: React.FC = (): JSX.Element => {
    return (
        <div className="mb-5 flex flex-col">
            <div className="mb-10 font-azeret-mono text-[32px] font-bold capitalize text-white">Details</div>
            <div className="mb-10 font-inter text-lg text-white/80">
                A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of
                colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for
                experiences and activations paid for by the Doodles Community Treasury. Burnt Toast is the working alias
                for Scott Martin, a Canadian–based illustrator, designer, animator and muralist.
            </div>
            <div className="mb-10 grid flex flex-col md:grid-cols-2 gap-4">
                <div className="border-2 border-white/60 p-4">
                    <div className="flex flex-col text-lg">
                        <div className="font-azeret-mono text-white">Background</div>
                        <div className="font-inter text-white/80">Gradient 2</div>
                    </div>
                </div>
                <div className="border-2 border-white/60 p-4">
                    <div className="flex flex-col text-lg">
                        <div className="font-azeret-mono text-white">Head</div>
                        <div className="font-inter text-white/80">Purple</div>
                    </div>
                </div>
                <div className="border-2 border-white/60 p-4">
                    <div className="flex flex-col text-lg">
                        <div className="font-azeret-mono text-white">Hair</div>
                        <div className="font-inter text-white/80">Brown Biscuit</div>
                    </div>
                </div>
                <div className="border-2 border-white/60 p-4">
                    <div className="flex flex-col text-lg">
                        <div className="font-azeret-mono text-white">Face</div>
                        <div className="font-inter text-white/80">Straw</div>
                    </div>
                </div>
                <div className="border-2 border-white/60 p-4">
                    <div className="flex flex-col text-lg">
                        <div className="font-azeret-mono text-white">Body</div>
                        <div className="font-inter text-white/80">Light Blue Puffer</div>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-white/60">
                <div className="mt-10 grid md:grid-cols-2 gap-4 flex flex-col">
                    <div>
                        <div className="flex flex-col text-lg font-bold">
                            <div className="font-azeret-mono text-white">Contract Address</div>
                            <div className="font-inter text-aqua">0xbc4c...f13d</div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col text-lg font-bold">
                            <div className="font-azeret-mono text-white">Token Standard</div>
                            <div className="font-inter text-aqua">ERC-721</div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col text-lg font-bold">
                            <div className="font-azeret-mono text-white">Token ID</div>
                            <div className="font-inter text-aqua">1957</div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col text-lg font-bold">
                            <div className="font-azeret-mono text-white">Blockchain</div>
                            <div className="font-inter text-aqua">Ethereum</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
