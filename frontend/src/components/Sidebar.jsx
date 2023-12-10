import { useNavigate } from "react-router-dom";
import {
  ChatIcon,
  HeartIcon,
  HomeIcon,
  LeaveIcon,
 
  StudentIcon,
} from "../assets/icons";
import Logo from "../assets/logo-bright.png";
import { useLocation } from "react-router-dom";

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
      url: "/profil",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      title: "Profil",
      url: "/profil/akun",
      icon: <StudentIcon />,
    },
    {
      id: 3,
      title: "Beranda",
      url: "/",
      icon: <HomeIcon />,
    },
    {
      id: 4,
      title: "Koleksi",
      url: "/koleksi",
      icon: <StudentIcon />,
    },

    {
      id: 8,
      title: "Favorit",
      url: "/profil/favorit",
      icon: <HeartIcon />,
    },
    {
      id: 9,
      title: "Tentang Kami",
      url: "/tentang-kami",
      icon: <ChatIcon />,
    },
    {
      id: 10,
      title: "Keluar",
      url: "/logout",
      icon: <LeaveIcon />,
    },
  ];

  return (
    <div className="w-[345px]  bg-[#0C356A] flex flex-col">
      <img src={Logo} alt="logo" className="h-20 object-cover mt-4" />
      <div className="flex flex-col pt-10 gap-[10px] items-end  justify-center font-medium leading-normal text-base">
        {items.map((item) => (
          <div
            key={item.id}
            className={
              pathname === item.url
                ? "rounded-tl-full rounded-bl-full bg-[#FFF7E9] pl-[35px] w-72 pt-[17px] pb-[19px] pr-16 text-[#0C356A] select-none"
                : " flex items-center px-6 py-3 justify-start gap-4 text-[18px] font-semibold cursor-pointer w-[299px] text-gray-200 hover:bg-[#FFF7E9] rounded-tl-full rounded-bl-full hover:text-[#0C356A] transition"
            }
            onClick={() => navigate(item.url)}
          >
            <div className={pathname === item.url ? "hidden" : ""}>
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
