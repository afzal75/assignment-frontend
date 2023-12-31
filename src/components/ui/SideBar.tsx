"use client";
import { ENUM_USER_ROLE } from "@/enum/user";
import { getUserInfo } from "@/service/auth.service";
import { Square3Stack3DIcon } from "@heroicons/react/20/solid";
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import { MdReviews } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";
import dynamic from "next/dynamic";

const Sidebar = () => {
  const { role } = getUserInfo() as any;

  return (
    <div className="w-[250px] rounded min-h-screen bg-base-200 px-3 py-5">
      <h1 className="text-xl font-bold text-black">Car-Servicing-Dashboard</h1>
      <ul className="menu ">
        {role === ENUM_USER_ROLE.USER ? (
          <>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/home"
              >
                <HomeIcon className="w-5 h-5 inline-block " />
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashboard/booking"
              >
                <RiReservedFill className="w-5 h-5 inline-block " /> Booking
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/home"
              >
                <HomeIcon className="w-5 h-5 inline-block " />
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashboard/service"
              >
                <WrenchScrewdriverIcon className="w-5 h-5 inline-block font-semibold" />{" "}
                Service
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashboard/blog"
              >
                <FaBlogger className="w-5 h-5 inline-block " />
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashboard/faq"
              >
                <QuestionMarkCircleIcon className="w-5 h-5 inline-block " />
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashboard/feedback"
              >
                <FcFeedback className="w-5 h-5 inline-block " /> Feedback
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashboard/user"
              >
                <AiOutlineUser className="w-5 h-5 inline-block " /> Add Admin
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashboard/booking"
              >
                <RiReservedFill className="w-5 h-5 inline-block " /> Booking
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashboard/category"
              >
                {" "}
                <Square3Stack3DIcon className="w-5 h-5 inline-block " />
                Category
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashboard/review"
              >
                {" "}
                <MdReviews className="w-5 h-5 inline-block " />
                Review
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

// export default Sidebar;
export default dynamic (() => Promise.resolve(Sidebar), {ssr: false})