import Sidebar_admin from "../components/sidebar_admin";
import ProfilePicture from "../assets/image/profile.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function TambahBuku() {
  const [id_buku, setId] = useState("");
  const [judul_buku, setJudul] = useState("");
  const [kode_buku, setKode] = useState("");
  const [penerbit_buku, setPenerbit] = useState("");
  const [bahasa_buku, setBahasa] = useState("");
  const [lokasi_buku, setDeskripsi] = useState("");
  const [isbn_issn, setIsbn_issn] = useState("");
  const [jumlah_buku, setJumlah] = useState("");
  const [ketersediaan, setTersedia] = useState("");
  const [cover_buku, setCover_bulu] = useState("");
  // const [isbn_issn, setIsbn_issn] = useState("");

  const SimpanBuku = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3102/data-buku/tambah-buku/v1", {
        id_buku,
        judul_buku,
        kode_buku,
        penerbit_buku,
        bahasa_buku,
        lokasi_buku,
        isbn_issn,
        jumlah_buku,
        ketersediaan,
        cover_buku,
      });
      navigate("/admin/databuku"); // Redirect ke halaman list-admin setelah menyimpan data
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-row  ">
      <Sidebar_admin />

      <div className="flex flex-col w-screen  ">
        <div className=" mb-10 h-16 flex justify-end">
          <div className=" text-black flex  items-center pr-5  gap-[30px]">
            <div>
              <h1 className="font-semibold text-sm leading-normal">Betty</h1>
              <span className="text-slate-300 ">Admin</span>
            </div>

            {/* Ini dibawah ntar diisi jd Image profile picturenya */}
            <div className="w-[45px] h-[45px] bg-black rounded-full">
              <img
                src={ProfilePicture}
                alt="profile picture"
                className="object-cover w-[45px] h-[45px]"
              />
            </div>
          </div>
        </div>
        <div className="px-16 font-semibold text-3xl">Tambah Buku</div>
        <form onSubmit={SimpanBuku} action="">
          <div className="px-16 mb-5">
            <div className="pt-3">
              <table className="[&>*:nth-child(odd)]:bg-white min-w-full [&>*:nth-child(even)]:bg-slate-400">
                <tbody>
                  <tr>
                    <td
                      className="text-center bg-gray-600 text-white p-2"
                      colSpan={2}
                    >
                      TAMBAH BUKU
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>id</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={id_buku}
                        onChange={(e) => setId(e.target.value)}
                        name="id"
                        id="id"
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Judul</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={judul_buku}
                        onChange={(e) => setJudul(e.target.value)}
                        name="judul"
                        id="judul"
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Kode</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={kode_buku}
                        onChange={(e) => setKode(e.target.value)}
                        name="kode"
                        id="kode"
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Penerbit</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={penerbit_buku}
                        onChange={(e) => setPenerbit(e.target.value)}
                        name="penerbit"
                        id="penerbit"
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Bahasa</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={bahasa_buku}
                        onChange={(e) => setBahasa(e.target.value)}
                        name="bahasa"
                        id="bahasa"
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Lokasi</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={lokasi_buku}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        name="deskripsi"
                        id="deskripsi"
                        placeholder="desk"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>ISBN/ISSN</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={isbn_issn}
                        onChange={(e) => setIsbn_issn(e.target.value)}
                        name=""
                        id=""
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Jumlah</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={jumlah_buku}
                        onChange={(e) => setJumlah(e.target.value)}
                        name="judul"
                        id="judul"
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Tersedia</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={ketersediaan}
                        onChange={(e) => setTersedia(e.target.value)}
                        name="judul"
                        id="judul"
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Cover Buku</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={cover_buku}
                        onChange={(e) => setCover_bulu(e.target.value)}
                        name="judul"
                        id="judul"
                        placeholder=""
                      />
                    </td>
                  </tr>
                  {/* Tambahkan baris lain sesuai dengan kebutuhan */}
                </tbody>
              </table>
              <div className="pt-10">
                <div className=" ">
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-medium w-[100px] rounded-md p-1"
                    >
                      Simpan
                    </button>
                    <button
                      onClick={() => navigate("/admin/databuku")}
                      className="bg-red-600 text-white font-medium w-[100px] rounded-md p-1"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TambahBuku;
