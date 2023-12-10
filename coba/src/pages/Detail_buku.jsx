import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import p9 from "../assets/image/buku-pendidikan/p9.png";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Detail_buku = () => {
  const navigate = useNavigate();
  const [newReport, setNewReport] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewReport(true);
  };

  return (
    <>
      <Navbar />
      {newReport && (
        <div className="h-[80rem] w-screen bg-whiteSecondary bg-opacity-10 backdrop-blur-sm absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999999] ">
          <div
            className={`flex items-center bg-white border border-collapse flex-col gap-5 w-[500px] py-7  p-5 text-bg-primary text-xl font-bold rounded-lg   bg-whiteSecondary absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            <img src={Logo} alt="" />
            <h1 className="text-3xl ">Bukti Peminjaman</h1>
            <div className="pt-9 pb-3">
              <table class="table-fixed font-normal text-lg w-[400px]">
                <tbody>
                  <tr>
                    <td className=" w-44">Id Anggota</td>
                    <td className="">A001</td>
                  </tr>
                  <tr>
                    <td className="">Nama</td>
                    <td className="">Nabila A</td>
                  </tr>
                  <tr>
                    <td className="">Tgl Pinjam</td>
                    <td className="">11 Juli 2023</td>
                  </tr>
                  <tr>
                    <td className=" vertic align-text-top">Judul Buku</td>
                    <td className="">Ekonomi Kelas XI Peminatan Ilmu Sosial</td>
                  </tr>
                  <tr>
                    <td className="">Kode Buku</td>
                    <td className="">U 330 END e 3</td>
                  </tr>
                  <tr>
                    <td className="">Tgl Kembali</td>
                    <td className="">10 Juni 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              onClick={() => setNewReport(false)}
              className="bg-masuk w-24 h-8 rounded-full text-white hover:bg-perpus hover:text-black border border-black"
            >
              Ok
            </button>
          </div>
        </div>
      )}

      <div className="px-16 mb-5 ">
        <div className="flex pt-5">
          <div className="">
            <img className="w-96" src={p9} alt="" />
          </div>
          <div className="ml-3">
            <div className="flex">
              <span className=" font-bold">Judul Buku :</span>
              <p>Ekonomi Kelas XI Peminatan Ilmu Sosial </p>
            </div>
            <div className=" flex">
              <span className="  font-bold">Penulis :</span>
              <p>Endang Mulyani, Asep Nurcahyanto </p>
            </div>
            <div className="">
              <span className=" font-bold">Deskripsi :</span>
              <p>
                Buku ini dirancang sebagai panduan utama bagi siswa kelas XI SMA
                dan MA yang memilih kelompok peminatan Ilmu-Ilmu Sosial,
                khususnya dalam bidang Ekonomi. Dengan pendekatan yang
                komprehensif dan aplikatif, buku ini menyajikan materi-materi
                ekonomi yang sesuai dengan kurikulum yang berlaku.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <div className="border border-black ">
            <label
              className="flex justify-center bg-slate-800 text-white"
              htmlFor=""
            >
              DETAIL BUKU
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Judul Seri     :<p className="px-3"> - </p>{" "}
            </label>
            <label className="flex  bg-slate-300" htmlFor="">
              Kode Buku     :<p className="px-3"> - </p>
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Penerbit     &nbsp; : <p className="px-3"> Tiga Serangkai</p>
            </label>
            <label className="flex  bg-slate-300" htmlFor="">
              Bahasa      &nbsp;  : <p className="px-3"> Indonesia</p>
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Deskripsi Fisik   : <p />
            </label>
            <label className="flex  bg-slate-300" htmlFor="">
              ISBN / ISSN    : <p className="px-3"> 978-623-209-311-9</p>
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Lokasi       &nbsp;&nbsp; &nbsp; :{" "}
              <p className="px-3"> Perpustakaan</p>
            </label>
            <label
              className="flex justify-center bg-slate-800 text-white"
              htmlFor=""
            >
              KETERSEDIAAN
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Jumlah Buku    : <p className="px-3"> 52</p>
            </label>
          </div>
          <div className="pt-3">
            <div className="flex justify-end  ">
              <form onSubmit={handleSubmit}>
                <button className="px-4 focus:text-pink-500">
                  <MdFavorite className="text-4xl items-center" />
                </button>
                <button className="bg-masuk w-24 h-8 rounded-full text-white hover:bg-perpus hover:text-black border border-black">
                  pinjam
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail_buku;
