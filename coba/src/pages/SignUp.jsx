
import Reading from "../assets/Reading.png";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div className="SignIn ">
        {/* 1 */}
        <div className="bagian1-signin">
          <img src={Reading} className="w-[380px] h-[380px]" alt="" />
          <div className="textbagian1">
            Masuk Untuk
            <br />
            Memulai Petualanganmu
          </div>
          <button
            onClick={() => navigate("/masuk")}
            className="buttonMasuk-signin "
          >
            Masuk
          </button>
        </div>
        {/* 1 end */}

        {/* 2 */}
        <div className="bagian2-signin">
          <div className="w-full ">
            {" "}
            <img src={Logo} className="w-[40%] " alt="" />{" "}
          </div>
          {/* form */}
          <div className="textbagian2 pb-[19px] ">Daftar</div>
          <div>
            <form>
              <div className="flex-col ">
                {/* masukan nama */}
                <div className="pt-[0px]">
                  <label className="label-signin  ">
                    Nama
                    <div className="pt-[6px] ">
                      <input
                        className="input-signin  "
                        type="text"
                        placeholder="Masukan Nama"
                      />
                    </div>
                  </label>
                </div>
                {/* masukan nama end */}

                {/* masukan Email */}
                <div className="pt-[15px] ">
                  <label className="label-signin">
                    Email
                    <div className="pt-[6px] ">
                      <input
                        className="input-signin  "
                        type="text"
                        placeholder="Masukan Email"
                      />
                    </div>
                  </label>
                </div>
                {/* masukan Email end */}

                {/* masukan Kata Sandi */}
                <div className="pt-[15px] ">
                  <label className="label-signin">
                    Kata Sandi
                    <div className="pt-[6px] ">
                      <input
                        className="input-signin  "
                        type="text"
                        placeholder="Masukan Kata Sandi"
                      />
                    </div>
                  </label>
                </div>
                {/* masukan Kata Sandi end */}

                {/* button daftar */}
                <div className="pt-[49px]">
                  <button className="buttonDaftar-signin"> Daftar </button>
                </div>
                {/* button daftar end */}
              </div>
            </form>
          </div>

          {/* form end */}
        </div>
        {/* 2 end */}
      </div>
    </div>
  );
}

export default SignUp;
