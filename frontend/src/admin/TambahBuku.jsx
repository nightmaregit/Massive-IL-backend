import Sidebar_admin from "../components/sidebar_admin";
import ProfilePicture from "../assets/image/profile.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function TambahBuku() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [judul, setJudul] = useState("");
  const [kode, setKode] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [bahasa, setBahasa] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [isbn_issn, setIsbn_issn] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [tersedia, setTersedia] = useState("");
  // const [isbn_issn, setIsbn_issn] = useState("");


  const SimpanBuku = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3102/tambah-data", {
        id,
        judul,
        kode,
        penerbit,
        bahasa,
        deskripsi,
        isbn_issn,
        jumlah,
        tersedia,
      });
      navigate("/admin/databuku"); // Redirect ke halaman list-admin setelah menyimpan data
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebar_admin />

      <div className="flex flex-col w-screen">
        <div className="mb-2 h-16 flex justify-end">
          <div className="text-black flex items-center pr-5 gap-[30px]">
            <div>
              <h1 className="font-semibold text-sm leading-normal">Betty</h1>
              <span className="text-slate-300">Admin</span>
            </div>

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
                        value={id}
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
                        value={judul}
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
                        value={kode}
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
                        value={penerbit}
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
                        value={bahasa}
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
                        <div>Deskripsi</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        value={deskripsi}
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
                        value={jumlah}
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
                        value={tersedia}
                        onChange={(e) => setTersedia(e.target.value)}
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
                <div>
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
