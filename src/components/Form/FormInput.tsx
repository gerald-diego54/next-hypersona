import React from "react";
import classNames from "classnames";
import _ from "lodash";

enum IconPlacements {
    LEFT = "left",
    RIGHT = "right",
}

type FormInputIconPlacement = "left" | "right";

const FormInput: React.FC<
    {
        label?: string;
        Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
        iconPlacement?: FormInputIconPlacement;
        onIconButtonClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    } & React.HTMLProps<HTMLInputElement>
> = ({ label, Icon, onIconButtonClick, iconPlacement = "left", ...props }): JSX.Element => {
    return (
        <div className="mt-5 flex flex-col space-y-2">
            <div className="text-bold font-azeret-mono text-lg capitalize text-white">
                {label}
                {props.required && (
                    <React.Fragment>
                        &nbsp;<span className="text-xl font-extrabold text-purple-600">*</span>
                    </React.Fragment>
                )}
            </div>
            <div className="relative w-full">
                {Icon && (
                    <div
                        {...(_.isFunction(onIconButtonClick) && { onClick: onIconButtonClick })}
                        className={classNames("absolute top-[10px]", {
                            "left-[10px]": _.isEqual(iconPlacement, IconPlacements.LEFT),
                            "right-[10px]": _.isEqual(iconPlacement, IconPlacements.RIGHT),
                        })}
                    >
                        <Icon className="fill-white" />
                    </div>
                )}
                <input
                    {...props}
                    className={classNames(
                        "hyp-input w-full p-2 rounded-none",
                        {
                            "pl-[40px]": Icon && _.isEqual(iconPlacement, IconPlacements.LEFT),
                            "pr-[40px]": Icon && _.isEqual(iconPlacement, IconPlacements.RIGHT),
                        },
                        props?.className,
                    )}
                />
            </div>
        </div>
    );
};

export default FormInput;
