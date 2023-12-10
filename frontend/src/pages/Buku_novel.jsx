import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer_putih from "../components/Footer";
import Aksara from '../assets/image/Novel/Aksara.jpg'
import Bumi_Manusia from '../assets/image/Novel/Bumi Manusia.jpg'
import Cinta_Untuk_Perempuan_Yang_Tidak_Sempurna from '../assets/image/Novel/Cinta Untuk Perempuan Yang Tidak Sempurna.jpg'
import Hujan_Tere_Liye from '../assets/image/Novel/Hujan-Tere Liye.jpg'
import Jingga_Senja from '../assets/image/Novel/Jingga & Senja.jpg'
import Lapar from '../assets/image/Novel/Lapar.jpg'
import Perahu_Kertas from '../assets/image/Novel/Perahu Kertas.jpg'
import Pulang_Tere_Liye from '../assets/image/Novel/Pulang_Tere Liye.jpg'
import Raja_untuk_Ratu from '../assets/image/Novel/Raja untuk Ratu.jpg'
import Rindu_Tere_Liye from '../assets/image/Novel/Rindu-Tere Liye.jpg'
import Sekolah_Sambil_Petualangan from '../assets/image/Novel/Sekolah Sambil Petualangan.jpg'
import Heartbroken_Heartbreaker from '../assets/image/Novel/The Heartbroken Heartbreaker.jpg'
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
            src={Aksara}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Manajemen Sumber Daya Manusia </span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={Bumi_Manusia}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Keperawatan Kesehatan komunitas</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={Cinta_Untuk_Perempuan_Yang_Tidak_Sempurna}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Atomic Habits</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={Hujan_Tere_Liye}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Panduan Pendidikan Anti Korupsi</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={Jingga_Senja}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Modul Teknologi Informasi dan Komuniasi Kelas X</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={Lapar}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Geografi SMA Kelas XI</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={Perahu_Kertas}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Cerdas Cergas Berbahasa dan Bersastra Indonesia Kelas X</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={Pulang_Tere_Liye}
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
            src={Raja_untuk_Ratu}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Buku Siswa Ekonomi Kelas XI SMA </span>
        </div>
        <div>
          <img
            onClick={() => navigate("")}
            src={Rindu_Tere_Liye}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Matematika Contextual Reaching and Learning </span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={Sekolah_Sambil_Petualangan}
            alt=""
            className="transition ease-in-out border border-masuk bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <span>Panduan Database</span>
        </div>
        <div>
          <img
            onClick={() => navigate("#")}
            src={Heartbroken_Heartbreaker}
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
