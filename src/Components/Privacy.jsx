import { useState } from "react";
import bannerbg4 from "../Images/bg-4.jpg";
import { MdDeliveryDining } from "react-icons/md";
import { FaRegSquareFull } from "react-icons/fa6";
const Privacy = () => {
    
    return (
        <div >
            {/* banner section */}
            {/* Info section */}
            <div className="text-[#1D242B] px-8 md:px-24 py-10 md:py-28">
                <div className="flex flex-col gap-8 pb-10">
                    <h1 className="uppercase text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>Privacy Policy For Truck Tire
                    </h1>
                    <p className="text-base font-medium text-justify">
                    Truck Tire Corporation recognizes the importance of protecting the privacy of users visiting trucktire.com. The information collected is utilized to enhance and market the services we and our subsidiaries offer, improve the content of the trucktire.com website, and provide updates or other marketing materials.
                    </p>
                    <p className="text-base font-medium text-justify">
                    Certain sections of trucktire.com, including but not limited to the Tire Manager®, Tire Manager™ Lite, Tire InSight®, Truck Tire® Billing Online, Truck Tire® Global Trade Manager, and My Truck Tire®, require registration or a password for access. Information collected from registered users in these areas may also be used for marketing purposes. Cookies may be used in these sections and elsewhere, as outlined in this policy. Information obtained in these areas may also be utilized according to agreements governing access and use, such as Tire Manager at trucktire.com, among others.
                    </p>
                    <p className="text-base font-medium text-justify">
                    Please also review the Truck Tire Service Guide for terms of sale, limitations of liability, warranty disclaimers, and general terms applicable to all tire and wheel services, as well as various information associated with Truck Tire's services.
                    </p>
                </div>
                <div className="flex flex-col gap-8  pl-8 md:pl-14">
                    <h1 className="uppercase text-xl md:text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>
                        What information does Truck Tire capture about visitors to its web site?

                    </h1>
                    <p className="text-base font-medium text-justify">
                    The Truck Tire web server utilizes an extended log file format that records the date and time of visits, the referring address (the location from which a visitor arrives at trucktire.com), the type of Internet browser used, and the visitor's IP address (a unique number assigned to each computer connecting to the Internet for identification purposes). The log file does not capture the visitor's email address.
                    <br />
                    <br />
                    </p>
                    <h1 className="uppercase text-xl md:text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>
                        Does Truck Tire ask for personal information?
                    </h1>
                    <p className="text-base font-medium text-justify">
                    Several sections of trucktire.com request personal information. These include Online Account Registration, features of Manage My Account, and registration pages for truck tire Manager at trucktire.com, trucktire Manager Lite, trucktire Global Trade Manager, trucktire InSight, and My trucktire. This list may be expanded without notice, and additional information may be required if it is. In these sections, your name, address, email address, billing information, and business profile may be requested. This information is gathered to help us enhance our services, provide you with access to valuable trucktire Internet-based tools and services, and to bill you for those services if you choose to use them.
                    </p>
                    <h1 className="uppercase text-xl md:text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>
                        How does Truck Tire use the information?
                    </h1>
                    <p className="text-base font-medium text-justify">
                    The information gathered through this site helps us identify the types of website content our customers value most. We use this data to enhance our website and services, as well as to market them more effectively. Additionally, we use this information to send you email notifications about website updates and to contact you through other channels for marketing and other purposes. Our policy is not to give, sell, or otherwise share the information collected through this site with third parties outside of Truck Tire Corporation and its subsidiaries, unless required by law. However, in some instances, we may work with suppliers who assist us in collecting, using, or processing the information gathered through this site for our benefit. We require these suppliers to perform such activities in line with this policy and our standards.
                    </p>
                    <h1 className="uppercase text-xl md:text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>
                        Does Truck Tire use cookies?
                    </h1>
                    <p className="text-base font-medium text-justify">
                    Cookies serve two primary purposes. First, they enable Truck Tire to personalize information for specific segments of its customer base. Second, in some cases, cookies allow Truck Tire to link individual customers with their information profiles. For instance, cookies allow TruckTire.com Login to "remember" your user ID when you log in to Truck Tire Manager at TruckTire.com on your computer.
                    </p>
                    <h1 className="uppercase text-xl md:text-3xl font-extrabold flex items-center gap-6">
                        <span className="text-red-600"><FaRegSquareFull /></span>
                        Additional resources on information privacy
                    </h1>
                    <p className="text-base font-medium text-justify">
                    The Electronic Privacy Information Center (EPIC) directs public attention to emerging civil liberties issues related to the National Information Infrastructure. EPIC Alert, the bi-weekly online newsletter of the Electronic Privacy Information Center in Washington, DC, covers topics on privacy and civil liberties in the digital age. Truck Tire reserves the right to modify the Privacy Policy at any time, with or without notice. Please check back regularly for any updates. By using TruckTire.com, you agree to this Privacy Policy
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Privacy;