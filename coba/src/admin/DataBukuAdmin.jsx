import Sidebar_admin from "../components/sidebar_admin";
import ProfilePicture from "../assets/image/profile.png";
import { RiPencilFill } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import p9 from "../assets/image/buku-pendidikan/p9.png";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DataBukuAdmin() {
  const navigate = useNavigate();
  const items = [
    {
      id: 1,
      judulBuku: "",
      kodeBuku: "",
      penerbit: "Tiga Serangkai",
      bahasa: "Indonesia",
      deskripsiFisik: "",
      isbnIssn: "978-623-209-311-9",
      jumlahBuku: "1",
      ketersedian:"1",
      coverBuku: p9,
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",
    },
    {
      id: 2,
      judulBuku: "",
      kodeBuku: "",
      penerbit: "",
      bahasa: "",
      deskripsiFisik: "",
      isbnIssn: "",
      jumlahBuku: "",
      ketersedian:"",
      coverBuku: "",
      hapus: 1,
      ubah: 2,
    },
    {
      id: 3,
      judulBuku: "",
      kodeBuku: "",
      penerbit: "",
      bahasa: "",
      deskripsiFisik: "",
      isbnIssn: "",
      jumlahBuku: "",
      ketersedian:"",
      coverBuku: "",
      hapus: 1,
      ubah: 2,
    },
    {
      id: 4,
      judulBuku: "",
      kodeBuku: "",
      penerbit: "",
      bahasa: "",
      deskripsiFisik: "",
      isbnIssn: "",
      jumlahBuku: "",
      ketersedian:"",
      coverBuku: "",
      hapus: 1,
      ubah: 2,
    },
    
  ];
  return (
    <div className="flex flex-row  ">
    <Sidebar_admin />


    <div className="flex flex-col w-screen  ">
    <div className=" mb-3 h-16 flex justify-end">
        <div className=" text-black flex  items-center pr-5  gap-[30px]">
          <div>
            <h1 className="font-semibold text-sm leading-normal">
              Betty
            </h1>
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

    <div className="mx-3 pt-5 pb-5">
        <button onClick={()=>navigate("/admin/databuku/tambahbuku")} className="flex flex-row border-2 border-black border-solid rounded-lg">
          <div className="p-2 text-[28px]"><FaPlus/></div>
          <div className="p-2 text-xl">Tambah Data buku</div>
        </button>
    </div>
      <div className="flex flex-col ">
      <table className=" p-2 border border-solid border-collapse mt-3 mx-3">
          <thead className="bg-slate-400">
            <tr className=" text-xs text-white">
              <th className="p-2 border-slate-300 border border-solid">No</th>
              <th className="p-2 border-slate-300 border border-solid">Judul Buku</th>
              <th className="p-2 border-slate-300 border border-solid">Kode Buku</th>
              <th className="p-2 border-slate-300 border border-solid">Penerbit</th>
              <th className="p-2 border-slate-300 border border-solid">Bahasa</th>
              <th className="p-2 border-slate-300 border border-solid">Deskripsi fisik</th>
              <th className="p-2 border-slate-300 border border-solid">ISBN/ISSN</th>
              <th className="p-2 border-slate-300 border border-solid">Jumlah Buku</th>
              <th className="p-2 border-slate-300 border border-solid">Ketersedian</th>
              <th className=" border-slate-300 border border-solid">Cover Buku</th>
              <th className="p-2 border-slate-300 border border-solid">Tindakan</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-white  [&>*:nth-child(even)]:bg-slate-300">
            {items.map((item) => (
              <tr
                key={item.bookingId}
                className="text-sm font-normal text-15px"
              >
                <td className="align-top text-center border-[1px] border-slate-300 border-solid">{item.id}</td>
                <td className="align-top text-center border-[1px] border-slate-300 border-solid">{item.judulBuku}</td>
                <td className="align-top text-center border-[1px] border-slate-300 border-solid">{item.kodeBuku}</td>
                <td className="align-top text-center border-[1px] border-slate-300 border-solid">{item.penerbit}</td>
                <td className="align-top text-center border-[1px] border-slate-300 border-solid">{item.bahasa}</td>
                <td className="align-top text-center border-[1px] border-slate-300 border-solid">{item.deskripsiFisik}</td>
                <td className="align-top text-center border-[1px] border-slate-300 border-solid">{item.isbnIssn}</td>
                <td className="align-top text-center border-[1px] border-slate-300 border-solid">{item.jumlahBuku}</td>
                <td className="align-top text-center border-[1px] border-slate-300 border-solid">{item.ketersedian}</td>
                <td className="flex justify-center border-[1px] border-slate-300 border-solid "><img src={item.coverBuku} className=" p-2 " alt="" /></td>
                <td className=" border-[1px] border-slate-300 border-solid ">
                  <div className="flex justify-center gap-1">
                    <div>
                  <button onClick={()=> navigate("/admin/databuku/editbuku")} className=" bg-yellow-500 p-1 text-black">
                    <RiPencilFill className="text-[20px]"/>
                  </button>
                  </div>
                  <div>
                  <button className=" bg-red-500 p-1 text-black">
                    <FaRegTrashCan className="text-[20px]"/>
                  </button>
                  </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
  )
}

export default DataBukuAdmin