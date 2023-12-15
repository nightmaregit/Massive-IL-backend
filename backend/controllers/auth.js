const query = require("../database");
const bcryptjs = require("bcryptjs");

async function register(req, res) {
  const { nama, email, password } = req.body;

  if (
    nama === undefined ||
    nama === "" ||
    email === undefined ||
    email === "" ||
    password === undefined ||
    password === "" 
  )
    return res.status(400).json("Invalid data!");

  //if (password !== confPassword) return res.status(400).json("Password not match!");

  try {
    // logic handling
    const isDuplicate = await query(
      `
        SELECT id_anggota FROM tb_anggota WHERE nama = ? OR email = ? 
    `,
      [nama, email]
    );

    if (isDuplicate.length > 0) return res.status(400).json("User already exists!");

    const salt = await bcryptjs.genSalt(12);
    const hash = await bcryptjs.hash(password, salt);
    const role = "anggota";

    await query(
      `
        INSERT INTO tb_anggota (
            nama, email, role, password
        ) VALUES (
            ?, ?, ?, ?
        );
    `,
      [ nama, email, role ,hash]
    );
    return res.status(200).json("Register success!");
  } catch (error) {
    return res.status(400).json("Bermasalah lur");
  }
}

async function login(req, res) {
  const {} = req.body;
  try {
    
     
  } catch (error) {
    return res.status(400).json("Something went wrong!");
  }
}

async function coba(req, res) {
   const {nama} = req.body;
  try {
  
    const hai = await query(
      `
        SELECT nama FROM tb_anggota ; 
    `,
      [nama]
    );

    return res.status(200).json(hai);
     
  } catch (error) {
    return res.status(400).json("Sini!");
  }
}

module.exports = {
  register,
  login,
  coba
};
