import React from "react";
import Image from "next/image";
import SimpleBreadcrumb from "./SimpleBreadcrumb";

const imageLoader = () => {
    return `https://images.unsplash.com/photo-1639680957169-ebff920c7e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80`;
};

const SimpleImageCard = ({ children }) => {
    return (
        <>
            <div className="max-w-xs p-1 bg-purple-300 shadow-2xl shadow-purple-500 rounded-2xl dark:bg-slate-300 dark:shadow-slate-700">
                <Image
                    className=" rounded-xl"
                    loader={imageLoader}
                    src="image.png"
                    alt="Coffee and christmas tree"
                    width={1920}
                    height={1080}
                    layout="responsive"
                />
                <div className="px-6 py-4">
                    <div className="mb-2 overflow-x-hidden text-xl font-bold text-black text-ellipsis whitespace-nowrap">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Velit, aperiam. Delectus vero, dolor praesentium
                        quas doloremque quod, modi dolores exercitationem minima
                        totam soluta eaque sit repellat recusandae perferendis
                        quidem dignissimos.
                    </div>
                    <p className="text-base text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, Nonea! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <SimpleBreadcrumb text="#bella"></SimpleBreadcrumb>
                    <SimpleBreadcrumb text="#ciao"></SimpleBreadcrumb>
                    <SimpleBreadcrumb text="#aaaa"></SimpleBreadcrumb>
                </div>
            </div>
        </>
    );
};

export default SimpleImageCard;
