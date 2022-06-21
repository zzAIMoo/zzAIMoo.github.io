import { React } from "react";
import SimpleBreadcrumb from "./SimpleBreadcrumb";
import image from "../Assets/images/misc/logo.png";
const SimpleImageCard = ({ children }) => {
    return (
        <>
            <div className="max-w-xs p-1 transition-all duration-300 shadow-2xl bg-primary-light shadow-secondary-light rounded-2xl dark:bg-primary-dark dark:shadow-tertiary-dark">
                <img
                    className=" rounded-xl"
                    src={image}
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
