import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../../public/user_2102647.png";

const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <ul className="menu bg-base-200 min-h-screen rounded-box">
        <li>
          <Link href="/dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/user-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            User Info
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Settings
          </Link>
        </li>
        {session?.user && (
          <>
            <Image
              src={
                session?.user?.image ||
                "https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/101558687_10220666224358451_7180293172600242176_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nDda2nhJwUwAb5fzvN4&_nc_ht=scontent.fdac24-2.fna&oh=00_AfC_Wjr53Ufo9cajhFEyyI3juF8kY-PPHXeQLS9JWIV45A&oe=66557BB8"
              }
              alt="user-avatar"
              width={100}
              height={100}
              className="avatar rounded-full flex justify-center items-center ml-4 mt-8 border-2 border-gray-300"
            />
            <p>{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
