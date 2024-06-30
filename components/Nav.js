"use client"
// icons
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  // const router = useRouter()
    const pathname = usePathname()
  return(
    <nav className=" flex flex-col items-center xl:justify-center    gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className=" flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-4 xl:px-0  h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {
          navData.map((nav,i)=>(
            <Link
             className={`${nav.path===pathname && 'text-[#c80000]'} relative flex items-center group hover:text-[red] transition-all duration-300`}
            key={i} href={nav.path}>
              <div className=" absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className=" bg-white relative flex text-blue-800 items-center p-[6px]   rounded pp">
                  <div className=" text-[12px]">{nav.name}</div>
                </div>
              </div>
              <div>{nav.icon}</div>
            </Link>
          ))
        }
      </div>
    </nav>
  )
};

export default Nav;
