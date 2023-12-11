import ProfilePicture from "../assets/image/profile.png";

import SidebarAdmin from "../components/sidebar_admin";

const PeminjamanBuku = () => {
  const items = [
    {
      id: 1,
      No: "1",
      IdAnggota: "A001",
      NoPanggil: "F 813 SAI",
      tanggalPinjam: "11-07-23",
      tanggalKembali: "10-06-24",
      status: 1,
      statusMsg: "PINJAM",
    },
    {
      id: 1,
      No: "2",
      IdAnggota: "A001",
      NoPanggil: "U 330 END e 3",
      tanggalPinjam: "11-07-23",
      tanggalKembali: "10-06-24",
      status: 1,
      statusMsg: "PINJAM",
    },
    {
      id: 1,
      No: "3",
      IdAnggota: "A001",
      NoPanggil: "F 813 SAI",
      tanggalPinjam: "11-07-23",
      tanggalKembali: "10-06-24",
      status: 1,
      statusMsg: "PINJAM",
    },
  ];

  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="flex flex-col w-full mb-96 ">
        <div className=" h-16 flex justify-end">
          <div className=" text-black flex  items-center pr-5  gap-[30px]">
            <div>
              <h1 className="font-semibold text-sm leading-normal">Betty</h1>
              <span>Admin</span>
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
          <h1 className="text-3xl font-medium leading-normal">
            Peminjaman Buku
          </h1>
          <table className=" relative rounded-[50px] mt-5 max-w-screen-2xl">
            <thead className="bg-black/70">
              <tr className="text-sm font-normal text-white">
                <th className="p-3">No</th>
                <th className="p-3">Id Anggota</th>
                <th className="p-3">No Panggil</th>
                <th className="p-3">Tanggal Pinjam</th>
                <th className="p-3">Tanggal Kembali</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="[&>*:nth-child(odd)]:bg-[#D9D9D9]">
              {items.map((item) => (
                <tr key={item.No} className="text-sm font-normal text-15px">
                  <td className="p-3 text-center border-gray-500 border-r">
                    {item.No}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {item.IdAnggota}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-r">
                    {item.NoPanggil}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {item.tanggalPinjam}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {item.tanggalKembali}
                  </td>
                  <td
                    className={
                      item.status === 1
                        ? "p-3 flex justify-center"
                        : item.status === 2
                        ? "p-3 flex justify-center"
                        : "p-3 flex justify-center"
                    }
                  >
                    <span
                      className={
                        item.status === 1
                          ? "p-2 flex justify-center bg-green-500 text-center text-white font-normal tracking-[1.12px] text-sm text-15px"
                          : item.status === 2
                          ? "p-2 flex justify-center bg-blue-500 text-center text-white font-normal tracking-[1.12px] text-sm text-15px"
                          : "p-2 flex justify-center bg-red-500 text-center text-white font-normal tracking-[1.12px] text-sm text-15px"
                      }
                    >
                      {item.statusMsg}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PeminjamanBuku;