import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer_putih from "../components/Footer";
import p1 from "../assets/image/buku-pendidikan/p1.png";
import p2 from "../assets/image/buku-pendidikan/p2.png";
import p3 from "../assets/image/buku-pendidikan/p3.png";
import p4 from "../assets/image/buku-pendidikan/p4.png";
import p5 from "../assets/image/buku-pendidikan/p5.png";
import p6 from "../assets/image/buku-pendidikan/p6.png";
import p7 from "../assets/image/buku-pendidikan/p7.png";
import p8 from "../assets/image/buku-pendidikan/p8.png";
import p9 from "../assets/image/buku-pendidikan/p9.png";
import p10 from "../assets/image/buku-pendidikan/p10.png";
import p11 from "../assets/image/buku-pendidikan/p11.png";
import p12 from "../assets/image/buku-pendidikan/p12.png";
const Buku_pendidikan = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="bg-masuk h-24 w-auto">
        <form className="">
          <div className=" relative px-[350px] mr-20 pt-5">
            <input
              type="search"
              id="default-search"
              className="  w-full p-4 ps-10 text-sm text-gray-900 border    focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
              placeholder="Search judul buku..."
              required=""
            />
            <button
              type="submit"
              className="text-white absolute end-[250px]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[54px] w-[94px] "
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-6 px-10 mt-10 border border-masuk py-5 gap-6">
        <div>
          <img
            onClick={() => navigate("#")}
            src={p1}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Manajemen Sumber Daya Manusia </span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={p2}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Keperawatan Kesehatan komunitas</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={p3}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Atomic Habits</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={p4}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Panduan Pendidikan Anti Korupsi</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={p5}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Modul Teknologi Informasi dan Komuniasi Kelas X</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={p6}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Geografi SMA Kelas XI</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={p7}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Cerdas Cergas Berbahasa dan Bersastra Indonesia Kelas X</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={p8}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Informatika SMA Kelas X</span>
        </div>
        <div>
          <img
            onClick={() =>
              navigate("/koleksi/pendidikan/Buku-Siswa-Ekonomi-Kelas-XI-SMA")
            }
            src={p9}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Buku Siswa Ekonomi Kelas XI SMA </span>
        </div>
        <div>
          <img
            onClick={() => navigate("")}
            src={p10}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Matematika Contextual Reaching and Learning </span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={p11}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Panduan Database</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={p12}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Pendidikan Pancasila Sebuah Pelajaran Umum Untuk SMP/MTS</span>
        </div>
      </div>
      <Footer_putih />
    </div>
  );
};

export default Buku_pendidikan;
