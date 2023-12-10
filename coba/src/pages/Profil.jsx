import Sidebar from "../components/Sidebar";
import ProfilePicture from "../assets/image/profile.png";

import CalendarIcon from "../assets/icons/Calendar.svg?react";
import { useNavigate } from "react-router-dom";

const Profil = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full mb-96 ">
        <div className="bg-masuk h-16 flex justify-end">
          <div className=" text-white flex  items-center pr-5  gap-[30px]">
            <div>
              <h1 className="font-semibold text-sm leading-normal">
                Nabila A.
              </h1>
              <span>Siswa</span>
            </div>

            {/* Ini dibawah ntar diisi jd Image profile picturenya */}
            <div className="w-[45px] h-[45px] bg-white rounded-full">
              <img
                src={ProfilePicture}
                alt="profile picture"
                className="object-cover w-[45px] h-[45px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[18px] mx-5">
          <div className="flex gap-[72px]">
            <div className="relative w-[428px] h-[183px] rounded-[20px] bg-[#FFF7E9] mt-11">
              <div className="absolute left-0 bg-[#4D44B5] w-6 z-10 h-[183px] rounded-tl-[20px] rounded-bl-[20px]" />
              <div className="ml-[57px] mt-[37px] flex flex-col items-start justify-center">
                <h4 className="font-semibold leading-normal text-lg text-masuk">
                  Status anggota
                </h4>
                <p className="font-normal text-base text-gray-400 mt-[5px]">
                  Baru
                </p>
                <div className="flex justify-between items-center gap-4 mt-[13px]">
                  <CalendarIcon />
                  <span className="font-normal text-base text-grey-400">
                    Sejak
                  </span>
                </div>
              </div>

              <div className="rounded-full w-[60px] h-[60px] bg-[#C1BBEB] absolute right-[62px] top-[61px]" />
            </div>

            <div
              onClick={() => navigate("/profil/koleksi-pinjaman")}
              className="relative w-[428px] h-[183px] rounded-[20px] bg-[#FFF7E9] mt-11"
            >
              <div className="absolute left-0 bg-[#FB7D58] w-6 z-10 h-[183px] rounded-tl-[20px] rounded-bl-[20px]" />
              <div className="ml-[57px] mt-[37px] flex flex-col items-start justify-center">
                <h2 className="font-semibold leading-normal text-3xl text-masuk w-[221px]">
                  Koleksi Pinjaman
                </h2>
              </div>

              <div className="rounded-full w-[60px] h-[60px] bg-[#C1BBEB] absolute right-[62px] top-[61px] flex items-center justify-center text-3xl font-semibold">
                8
              </div>
            </div>
          </div>

          {/* Denda Flexbox */}
          <div className="flex flex-col gap-[18px]">
            <div className="flex gap-[72px]">
              <div className="relative w-[428px] h-[183px] rounded-[20px] bg-[#FFF7E9] mt-11">
                <div className="absolute left-0 bg-[#4D44B5] w-6 z-10 h-[183px] rounded-tl-[20px] rounded-bl-[20px]" />
                <div className="ml-[57px] mt-[37px] flex flex-col items-start justify-center">
                  <h4 className="font-semibold leading-normal text-lg text-masuk">
                    Denda
                  </h4>
                </div>

                <div className="rounded-full w-[60px] h-[60px] bg-[#C1BBEB] absolute right-[62px] top-[61px]" />
              </div>

              <div
                onClick={() => navigate("/profil/riwayat-peminjaman")}
                className="relative w-[428px] h-[183px] rounded-[20px] bg-[#FFF7E9] mt-11"
              >
                <div className="absolute left-0 bg-[#FB7D58] w-6 z-10 h-[183px] rounded-tl-[20px] rounded-bl-[20px]" />
                <div className="ml-[57px] mt-[37px] flex flex-col items-start justify-center">
                  <h2 className="font-semibold leading-normal text-3xl text-masuk w-[221px]">
                    Riwayat Peminjaman
                  </h2>
                </div>

                <div className="rounded-full w-[60px] h-[60px] bg-[#C1BBEB] absolute right-[62px] top-[61px] flex items-center justify-center text-3xl font-semibold">
                  10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
