const EditAkun = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F5F5F5]">
      <div className="container mx-auto pt-6 bg-white pb-[53px] rounded-b-[20px] px-6">
        <div className="w-full rounded-t-[20px] bg-masuk h-[60px]">
          <h1 className="text-4xl font-bold leading-normal text-white ml-[30px]">
            Perbaharui Akun
          </h1>
        </div>

        <div className="px-[30px] w-full mt-[35px] flex gap-6">
          {/* Left Section */}
          <div className="w-[192px] flex flex-col gap-4">
            <p className="font-semibold text-lg leading-normal">Foto *</p>
            <div className="w-[175px] h-[175px] border border-dashed border-[#C1BBEB] flex justify-center items-center">
              <span className="font-normal leading-normal text-sm text-[#A098AE] px-[11px] text-center">
                Seret dan lepas atau Klik di sini untuk memilih file
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col gap-[33px]">
            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">
                Nama Lengkap *
              </h3>
              <input
                type="text"
                className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                placeholder="Masukkan nama lengkap anda"
              />
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">
                Tempat & Tanggal Lahir *
              </h3>
              <div className="flex gap-6">
                <input
                  type="text"
                  className="font-normal leading-normal pl-2 py-[13px] text-sm text-[#A098AE] rounded-[5px] border border-solid border-[#C1BBEB] w-[220px]"
                  placeholder="Tempat Lahir"
                />
                <input
                  type="text"
                  className="font-normal leading-normal pl-2 py-[13px] text-sm text-[#A098AE] rounded-[5px] border border-solid border-[#C1BBEB] w-[220px]"
                  placeholder="Tanggal Lahir"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">Email *</h3>
              <input
                type="text"
                className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                placeholder="Masukkan email anda"
              />
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">Alamat *</h3>

              <textarea
                className="font-normal leading-normal pt-[15px] px-[9px] text-sm text-[#A098AE] rounded-[5px] border border-solid border-[#C1BBEB] resize-none w-[577px] h-[175px]"
                placeholder="Masukkan email anda"
                maxLength={2000}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-[33px] relative">
            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">NISN *</h3>
              <input
                type="text"
                className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                placeholder="Masukkan NISN anda"
              />
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">Kelas *</h3>
              <input
                type="text"
                className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                placeholder="Masukkan Kelas anda"
              />
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">
                Kata Sandi *
              </h3>
              <input
                type="text"
                className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                placeholder="Masukkan kata sandi"
              />
            </div>

            <button className="flex items-center justify-center w-[129px] h-[60px] rounded-full bg-masuk absolute bottom-0 right-[47px] text-white">
              <p className="text-lg leading-normal font-normal">Kirim</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAkun;
