import React, { useId } from "react";
import Image from "next/image";

const Feature: React.FC<{ title: any; image: string; description: string | JSX.Element; bullets: string[] }> = ({
    title,
    image,
    description,
    bullets,
}): JSX.Element => {
    const id = useId();

    return (
        <div className="mt-20 flex w-full flex-col justify-between md:mt-36 md:flex-row md:space-x-10">
            <div className="flex w-full flex-col md:w-6/12">
                <div className="gradient-text-primary font-azeret-mono break-words text-[48px] whitespace-pre uppercase tracking-tight lg:text-7xl">
                    {title}
                </div>
                <div className="mt-20 w-full">
                    <Image className="mx-auto w-full" src={image} alt={`for-image-${id}`} width={720} height={650} />
                </div>
            </div>
            <div className="flex w-full flex-col md:w-6/12">
                <div className="frame my-5 font-inter text-lg text-white lg:text-xl">{description}</div>
                <div className="flex w-full flex-col space-y-5 font-azeret-mono md:mt-10 lg:mt-20">
                    {bullets.map((bullet, i) => (
                        <div
                            key={i}
                            className="flex flex-row items-center space-x-2 border-2 border-spec-purple  uppercase text-white"
                        >
                            <div className="flex h-full min-w-[50px] items-center justify-center border-r-2 border-spec-purple py-2">
                                <Image src="/snowflake.svg" alt="snowflake" width={25} height={25} layout="intrinsic" />
                            </div>
                            <div className="truncate p-2">{bullet}</div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 w-full">
                    <Image
                        src="/diagonal-stripes.png"
                        alt="diagonal-stripes"
                        layout="responsive"
                        width={100}
                        height={7}
                    />
                </div>
            </div>
        </div>
    );
};

export default Feature;
