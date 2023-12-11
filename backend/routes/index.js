const express = require('express')
const router =express.Router()
const db = require('../data/database.js')

router.get('/data-buku',(req, res)=>{
    const sql = "SELECT * FROM tb_buku"
    db.query(sql,(err, result)=>{
        if (err) throw err
       
        res.send(result)
    })
})

router.post('/tambah-data', (req, res) => {
  console.log(req.body);
  const id = req.body.id
  const judul = req.body.judul;
  const kode = req.body.kode;
  const penerbit = req.body.penerbit;
  const bahasa = req.body.bahasa;
  const deskripsi = req.body.deskripsi;
  const isbn_issn = req.body.isbn_issn;
  const jumlah = req.body.jumlah;
  const tersedia = req.body.tersedia;

  const sql = "INSERT INTO tb_buku (id, judul, kode, penerbit, bahasa, deskripsi, isbn_issn, jumlah, tersedia) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)";
  const values = [id, judul, kode, penerbit, bahasa, deskripsi, isbn_issn, jumlah, tersedia];

  db.query(sql, values, (err, result) => {
  if (err) {
    console.error("Error executing query:", err);
    return res.status(500).json({ message: "Gagal menyimpan data ke database" });
  }

  console.log(result);

  // Mengirim respons dengan ID yang baru saja dimasukkan
  return res.status(200).json({ message: "Data berhasil disimpan ke database", insertedId: result.insertId });
});
});    

module.exports = router