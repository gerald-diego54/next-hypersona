import Image from "next/image";

const MessagesBoxUser = () => {
    return (
        <div>
            <button type="button" className="mt-3 h-[70px] w-[90%] mx-auto my-5 flex flex-row border pb-3">
                <div className="mt-[15px] px-3">
                    <Image src="/message/profile-others.svg" width={50} height={50} alt="" />
                </div>
                <div className="w-full mt-2">
                    <div className="float-left text-white font-azeret-mono">username_others</div>
                    <div className="float-right text-[#0AF8FF] mr-[10px] font-azeret-mono">March 20</div>
                    <div className="w-[300px] truncate text-slate-400 font-inter">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque et iste alias quos
                        soluta molestiae reiciendis cum rem adipisci, dolore perferendis fuga ut natus? Eum, est
                        temporibus? Explicabo, nemo?
                    </div>
                    <div className="h-[15px] w-[15px] rounded-full bg-[#B800F0] float-right mt-[-100px] mr-[10px]"></div>
                </div>
            </button>
        </div>
    );
};

const MessagesBoxOthers = () => {
    return (
        <div>
            <button type="button" className="mt-3 h-[70px] w-[90%] mx-auto my-5 flex flex-row border pb-3">
                <div className="mt-[15px] px-3">
                    <Image src="/message/profile-others.svg" width={50} height={50} alt="" />
                </div>
                <div className="w-full mt-2">
                    <div className="float-left text-white font-azeret-mono">username_others</div>
                    <div className="float-right text-[#0AF8FF] mr-[10px] font-azeret-mono">March 20</div>
                    <div className="w-[300px] truncate text-slate-400 font-inter">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque et iste alias quos
                        soluta molestiae reiciendis cum rem adipisci, dolore perferendis fuga ut natus? Eum, est
                        temporibus? Explicabo, nemo?
                    </div>
                    <div className="h-[15px] w-[15px] rounded-full bg-[#B800F0] float-right mt-[-100px] mr-[10px]"></div>
                </div>
            </button>
        </div>
    );
};

const Messages = {
    MessagesBoxUser,
    MessagesBoxOthers
};

export default Messages;

