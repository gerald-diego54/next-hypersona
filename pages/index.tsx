import NavigationBar from "../src/layouts/NavigationBar";
import type { NextPage } from "next";
import React from "react";
import Hero from "../src/features/landing/Hero";
import Feature from "../src/features/landing/Feature";
import Marquee from "../src/features/landing/Marquee";
import FAQ from "../src/features/landing/FAQ";
import MainContainer from "../src/layouts/MainContainer";
import Footer from "../src/features/landing/Footer";
import Subscribe from "../src/features/landing/Subscribe";

const Home: NextPage = (): JSX.Element => {
    return (
        <MainContainer>
            <NavigationBar />
            <div className="mx-auto max-w-[1700px] px-7">
                <Hero />
                <Feature
                    title={<p>For <br />Collectors</p>}
                    image="/for-collectors.png"
                    description={
                        <React.Fragment>
                            <p>
                                We help you find brands and businesses looking to collaborate with NFT personas. Let us
                                help your personas find the endorsement deals and collaborations of your dreams. You can
                                add a stream of passive revenue to your collection,
                            </p>
                            <br />
                            <p>
                                grow the profile of your personas, and receive exclusive on-chain incentives to
                                participate.
                            </p>
                        </React.Fragment>
                    }
                    bullets={[
                        "Collaborate with brands",
                        "Earn passive revenue",
                        "Find or get endorsement deals",
                        "Receive participation incentives",
                    ]}
                />
                <Feature
                    title={<p>For <br />Brands</p>}
                    image="/for-brands.png"
                    description={
                        <React.Fragment>
                            <p>
                                From Adidas to Nightclub E11even, businesses are “apeing in” to the NFT space. They
                                often an NFT themselves purchasees (the Florida nightclub recently paid more then
                                $400,000 for a single Bored Ape NFT).
                            </p>
                            <br />
                            <p>
                                Hypersona enables your brand to collaborate with NFT personas across multiple
                                collections and blockchains.
                            </p>
                            <br />
                            <p>
                                Start partnering with Bored Apes, RTFKT Clones, Dead Fellas, and many other top NFT
                                personas without having to buy the underlying NFTs.
                            </p>
                        </React.Fragment>
                    }
                    bullets={[
                        "Collaborate with NFT personas",
                        "Dive into NFTs easily",
                        "Set custom licensing terms",
                        "Access NFTs without buying it",
                    ]}
                />
                <Feature
                    title={<p>For <br />Communities</p>}
                    image="/for-communities.png"
                    description={
                        <React.Fragment>
                            <p className="block w-full">
                                Hypersona helps you bring licensing deals to your NFT roadmap quickly and efficiently.
                                In addition, hypersona helps NFT project leadership track individual members’ licensing
                                deals to ensure that NFT community rules and third-party licenses are complied with.
                            </p>
                            <br />
                            <p className="block w-full">
                                Plug your community in to hypersona today to connect your community to ours and maintain
                                standards
                            </p>
                        </React.Fragment>
                    }
                    bullets={[
                        "Bring licensing fast to your community",
                        "Track and manage deals",
                        "Ensure licensing compliance",
                        "Maintain community standards",
                    ]}
                />
                <Marquee />
                <FAQ />
            </div>
            <Subscribe />
            <div className="mx-auto max-w-[1700px] px-3 md:px-5">
                <Footer />
            </div>
        </MainContainer>
    );
};

export default Home;
