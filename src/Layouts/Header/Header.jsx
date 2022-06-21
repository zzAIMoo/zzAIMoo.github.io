import React from "react";
import "../../Assets/styles/index.css";
export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="h-screen transition-all duration-300">
                    <div className="bg-gradient-to-b from-sky-700 to-sky-400 h-3/4">
                        <div className="overflow-x-hidden waveAnimation">
                            <div className="opacity-50 waveWrapperInner z-15">
                                <div className="wave waveTop bg-[url('../../Assets/images/misc/waves/wave-top.png')]"></div>
                            </div>
                            <div className="z-10 opacity-75 waveWrapperInner">
                                <div className="wave waveMiddle bg-[url('../../Assets/images/misc/waves/wave-mid.png')]"></div>
                            </div>
                            <div className="opacity-100 waveWrapperInner z-5">
                                <div className="wave waveBottom bg-[url('../../Assets/images/misc/waves/wave-bot.png')]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/4 bg-gradient-to-b from-teal-300 to-teal-500 "></div>
                </div>
            </header>
        );
    }
}
