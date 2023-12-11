import ProfilePicture from "../assets/image/profile.png";

import SidebarAdmin from "../components/sidebar_admin";

const DataAnggota = () => {
  const items = [
    {
      id: 1,
      No: "1",
      IdAnggota: "A001",
      Nama: "Nabila A",
      email: "Nabila123@gmail.com",
      username: "  Nabila_aa",
      NISN: "747845",
      Kelas: "  10 Mipa 2",
    },
    {
      id: 1,
      No: "2",
      IdAnggota: "A001",
      Nama: "Nabila A",
      email: "Nabila123@gmail.com",
      username: "  Nabila_aa",
      status: 1,
      Kelas: "  10 Mipa 2",
    },
    {
      id: 1,
      No: "3",
      IdAnggota: "A001",
      Nama: "Nabila A",
      email: "Nabila123@gmail.com",
      username: "  Nabila_aa",
      status: 1,
      Kelas: "  10 Mipa 2",
    },
    {
      id: 1,
      No: "3",
      IdAnggota: "A001",
      Nama: "Nabila A",
      email: "Nabila123@gmail.com",
      username: "  Nabila_aa",
      status: 1,
      Kelas: "  10 Mipa 2",
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

            <div className="w-[45px] h-[45px] bg-white rounded-full">
              <img
                src={ProfilePicture}
                alt="profile picture"
                className="object-cover w-[45px] h-[45px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[18px] mx-5 mt-[100px]">
          <h1 className="text-3xl font-medium leading-normal">Data Anggota</h1>
          <table className=" relative rounded-[50px] mt-5 max-w-screen-2xl">
            <thead className="bg-black/70">
              <tr className="text-sm font-normal text-white">
                <th className="p-3">No</th>
                <th className="p-3">Id Anggota</th>
                <th className="p-3">Nama</th>
                <th className="p-3">Email</th>
                <th className="p-3">Username</th>
                <th className="p-3">NISN</th>
                <th className="p-3">Kelas</th>
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
                    {item.Nama}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {item.email}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {item.username}
                  </td>
                  <td className="text-center border-gray-500 border-x">
                    {item.Kelas}
                  </td>
                  <td className="text-center">{item.Kelas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataAnggota;
