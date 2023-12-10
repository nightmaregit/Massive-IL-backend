import { useNavigate } from "react-router-dom";
import {
  ChatIcon,
  HeartIcon,
  HomeIcon,
  LeaveIcon,
  PlusIcon,
  StatusIcon,
  StudentIcon,
} from "../assets/icons";
import Logo from "../assets/logo-bright.png";
import { FaBook } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { GiBackwardTime } from "react-icons/gi";

const Peminjaman = () => {
  const navigate = useNavigate();
  const lokasi = useLocation();
  const { pathname } = lokasi;
  const muncul = pathname.split("/");
  console.log(muncul);

  const items = [
    {
      id: 1,
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: <LuHome />,
    },
    {
      id: 2,
      title: "Data Buku",
      url: "/admin/databuku",
      icon: <FaBook />,
    },
    {
      id: 3,
      title: "Data Anggota",
      url: "/peminjaman",
      icon: <StudentIcon />,
    },
    {
      id: 4,
      title: "Data Peminjaman",
      url: "/peminjaman",
      icon: <PlusIcon />,
    },
    {
      id: 4,
      title: "Data Pengembalian",
      url: "/status",
      icon: <GiBackwardTime className="text-[20px] font-extrabold"/>,
    },
    {
      id: 5,
      title: "Administrator",
      url: "/buku-dipinjam",
      icon: <StudentIcon />,
    },
    {
      id: 8,
      title: "Keluar",
      url: "/logout",
      icon: <LeaveIcon />,
    },
  ];

  return (
    <div className="w-[345px] h-screen bg-[#0C356A] flex flex-col">
      <img src={Logo} alt="logo" className="h-20 object-cover mt-4" />
      <div className="flex flex-col pt-10 gap-[10px] items-end  justify-center font-medium leading-normal text-base">
        {items.map((item) => (
          <div
            key={item.id}
            className={
              pathname === item.url || "/"+muncul[1]+"/"+muncul[2] === item.url
                ? " flex items-center px-6 py-3 justify-start gap-4 text-[18px] font-semibold cursor-pointer w-[299px]  bg-[#FFF7E9] rounded-tl-full rounded-bl-full text-[#0C356A] transition "
                : " flex items-center px-6 py-3 justify-start gap-4 text-[18px] font-semibold cursor-pointer w-[299px] text-gray-200 hover:bg-[#FFF7E9] rounded-tl-full rounded-bl-full hover:text-[#0C356A] transition"
            }
            onClick={() => navigate(item.url)}
          >
            <div className={pathname === item.url ? "" : ""}>
              {item.icon}
            </div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Peminjaman;
