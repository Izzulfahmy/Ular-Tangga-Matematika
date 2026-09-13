const bankSoal = [
  {
    id: 1,
    soal: "Mengapa setiap hewan perlu berkembang biak?",
    a: "Agar tubuhnya menjadi lebih besar",
    b: "Untuk menjaga kelangsungan hidup jenisnya agar tidak punah",
    c: "Untuk mengubah bentuk tubuhnya",
    d: "Agar dapat mencari makan lebih cepat",
    kunci: "B"
  },
  {
    id: 2,
    soal: "Tahapan pertumbuhan dan perkembangan makhluk hidup dari lahir atau menetas hingga dewasa disebut...",
    a: "Metamorfosis",
    b: "Perkembangbiakan",
    c: "Siklus atau daur hidup",
    d: "Daur energi",
    kunci: "C"
  },
  {
    id: 3,
    soal: "Contoh hewan yang berkembang biak dengan cara melahirkan adalah...",
    a: "Ayam dan bebek",
    b: "Kucing dan sapi",
    c: "Katak dan kupu-kupu",
    d: "Kecoak dan jangkrik",
    kunci: "B"
  },
  {
    id: 4,
    soal: "Hewan yang saat menetas atau lahir sudah memiliki bentuk tubuh yang mirip dengan induknya adalah...",
    a: "Kupu-kupu",
    b: "Katak",
    c: "Sapi",
    d: "Nyamuk",
    kunci: "C"
  },
  {
    id: 5,
    soal: "Perubahan bentuk tubuh hewan yang sangat berbeda dari awal lahir/menetas hingga dewasa disebut...",
    a: "Fotosintesis",
    b: "Metamorfosis",
    c: "Adaptasi",
    d: "Daur harian",
    kunci: "B"
  },
  {
    id: 6,
    soal: "Perbedaan utama antara metamorfosis sempurna dan metamorfosis tidak sempurna terletak pada adanya tahap...",
    a: "Telur",
    b: "Dewasa",
    c: "Pupa (kepompong)",
    d: "Berudu",
    kunci: "C"
  },
  {
    id: 7,
    soal: "Hewan muda pada metamorfosis tidak sempurna disebut...",
    a: "Larva",
    b: "Pupa",
    c: "Nimfa",
    d: "Berudu",
    kunci: "C"
  },
  {
    id: 8,
    soal: "Urutan siklus hidup ayam yang benar ditunjukkan oleh gambar...",
    a: "<img src='aset/hewan/8a.png' alt='Opsi A' class='h-20 sm:h-24 object-contain rounded-lg my-1'>",
    b: "<img src='aset/hewan/8b.png' alt='Opsi B' class='h-20 sm:h-24 object-contain rounded-lg my-1'>",
    c: "<img src='aset/hewan/8c.png' alt='Opsi C' class='h-20 sm:h-24 object-contain rounded-lg my-1'>",
    d: "<img src='aset/hewan/8d.png' alt='Opsi D' class='h-20 sm:h-24 object-contain rounded-lg my-1'>",
    kunci: "C"
  },
  {
    id: 9,
    soal: "Hewan berikut yang mengalami metamorfosis sempurna adalah...",
    a: "Jangkrik",
    b: "Kecoak",
    c: "Kupu-kupu",
    d: "Belalang",
    kunci: "C"
  },
  {
    id: 10,
    soal: "Tahap diam/transisi sebelum ulat berubah menjadi kupu-kupu dewasa dinamakan...",
    a: "Larva",
    b: "Pupa (kepompong)",
    c: "Nimfa",
    d: "Berudu",
    kunci: "B"
  },
  {
    id: 11,
    soal: "Urutan daur hidup kupu-kupu yang tepat adalah...",
    a: "Telur → kepompong → ulat → kupu-kupu dewasa",
    b: "Ulat → telur → kepompong → kupu-kupu dewasa",
    c: "Telur → ulat (larva) → kepompong (pupa) → kupu-kupu dewasa",
    d: "Kepompong → ulat → telur → kupu-kupu dewasa",
    kunci: "C"
  },
  {
    id: 12,
    soal: "Setelah menetas dari telur, katak akan berubah menjadi...",
    a: "Katak muda",
    b: "Berudu",
    c: "Nimfa",
    d: "Pupa",
    kunci: "B"
  },
  {
    id: 13,
    soal: "Kecebong atau berudu hidup dan bernapas di dalam air menggunakan...",
    a: "Paru-paru",
    b: "Kulit",
    c: "Insang",
    d: "Trakea",
    kunci: "C"
  },
  {
    id: 14,
    soal: "Tahapan siklus hidup katak yang benar adalah...",
    a: "Telur → katak muda → berudu → katak dewasa",
    b: "Telur → berudu → berudu berkaki → katak muda → katak dewasa",
    c: "Berudu → telur → katak muda → katak dewasa",
    d: "Telur → pupa → berudu → katak dewasa",
    kunci: "B"
  },
  {
    id: 15,
    soal: "Katak mengalami metamorfosis sempurna karena...",
    a: "Mengalami perubahan bentuk tubuh yang sangat berbeda dari berudu ke dewasa",
    b: "Bertelur di dalam air",
    c: "Memiliki kulit yang licin",
    d: "Tidak memiliki kaki saat dewasa",
    kunci: "A"
  },
  {
    id: 16,
    soal: "Urutan daur hidup kecoak yang benar adalah...",
    a: "Telur → pupa → kecoak dewasa",
    b: "Telur → nimfa → kecoak dewasa",
    c: "Larva → pupa → kecoak dewasa",
    d: "Nimfa → telur → kecoak dewasa",
    kunci: "B"
  },
  {
    id: 17,
    soal: "Mengapa kecoak dan jangkrik dikelompokkan dalam metamorfosis tidak sempurna?",
    a: "Karena bertelur di tempat lembap",
    b: "Karena tidak melalui tahap pupa/kepompong",
    c: "Karena bentuk nimfanya sangat berbeda dengan bentuk dewasa",
    d: "Karena tubuhnya makin lama makin kecil",
    kunci: "B"
  },
  {
    id: 18,
    soal: "Contoh hewan mamalia laut yang melahirkan anak dan mirip induknya sejak lahir adalah...",
    a: "Ikan hiu",
    b: "Paus",
    c: "Kupu-kupu",
    d: "Katak",
    kunci: "B"
  },
  {
    id: 19,
    soal: "Pada daur hidup kupu-kupu, tahap yang paling banyak memakan daun adalah...",
    a: "Telur",
    b: "Ulat (larva)",
    c: "Kepompong (pupa)",
    d: "Kupu-kupu dewasa",
    kunci: "B"
  },
  {
    id: 20,
    soal: "Manfaat kupu-kupu bagi tanaman bunga di sekitar kita adalah...",
    a: "Memakan daun bunga",
    b: "Membantu penyerbukan bunga",
    c: "Menyiram tanaman",
    d: "Melindungi akar tanaman",
    kunci: "B"
  },
  {
    id: 21,
    soal: "Apa yang akan terjadi pada burung pemburu jika ulat di kebun habis disemprot racun?",
    a: "Burung bertambah banyak",
    b: "Burung akan kelaparan karena kehilangan sumber makanan",
    c: "Burung berubah menjadi kupu-kupu",
    d: "Burung akan bertelur lebih banyak",
    kunci: "B"
  },
  {
    id: 22,
    soal: "Hewan serangga berikut yang mengalami metamorfosis tidak sempurna adalah...",
    a: "Kupu-kupu",
    b: "Katak",
    c: "Jangkrik",
    d: "Nyamuk",
    kunci: "C"
  },
  {
    id: 23,
    soal: "Bentuk hewan muda pada kecoak yang sudah menyerupai kecoak dewasa tetapi berukuran lebih kecil disebut...",
    a: "Larva",
    b: "Nimfa",
    c: "Pupa",
    d: "Ulat",
    kunci: "B"
  },
  {
    id: 24,
    soal: "Mengapa ulat tetap penting bagi ekosistem meskipun suka memakan daun?",
    a: "Ulat merupakan bahan membuat madu",
    b: "Ulat menjadi makanan burung dan berkembang menjadi kupu-kupu penyerbuk",
    c: "Ulat menghasilkan udara segar",
    d: "Ulat membuat tanaman cepat berbuah tanpa bunga",
    kunci: "B"
  },
  {
    id: 25,
    soal: "Manakah dari hewan berikut yang TIDAK mengalami metamorfosis?",
    a: "Katak",
    b: "Kupu-kupu",
    c: "Kucing",
    d: "Kecoak",
    kunci: "C"
  },
  {
    id: 26,
    soal: "Salah satu upaya yang dapat dilakukan untuk melestarikan populasi kupu-kupu adalah...",
    a: "Menangkap ulat sebanyak-banyaknya",
    b: "Menanam tanaman berbunga di halaman/kebun",
    c: "Mengurung kupu-kupu dalam stoples rapat",
    d: "Menebang pohon berdaun lebat",
    kunci: "B"
  },
  {
    id: 27,
    soal: "Keadaan lingkungan yang dapat membahayakan kehidupan hewan adalah...",
    a: "Kandang yang selalu dibersihkan",
    b: "Tersedianya makanan yang cukup",
    c: "Perburuan liar dan tempat tinggal yang kotor/rusak",
    d: "Banyaknya tanaman di sekitar tempat tinggal",
    kunci: "C"
  },
  {
    id: 28,
    soal: "Ciri hewan yang mengalami perkembangan tanpa metamorfosis adalah...",
    a: "Mengalami tahap kepompong",
    b: "Mengalami perubahan bentuk dari berudu menjadi berkaki",
    c: "Bentuk tubuh dari lahir/menetas mirip induknya, hanya ukuran yang membesar",
    d: "Hidup di dua alam sejak lahir hingga dewasa",
    kunci: "C"
  },
  {
    id: 29,
    soal: "Siklus hidup sering digambarkan menyerupai bentuk lingkaran karena...",
    a: "Tubuh hewan bentuknya bulat",
    b: "Tahapan pertumbuhannya terjadi secara berulang-ulang",
    c: "Hewan bergerak memutar",
    d: "Telur hewan berbentuk bulat",
    kunci: "B"
  },
  {
    id: 30,
    soal: "Apa yang harus kita lakukan jika melihat hewan peliharaan di rumah berada dalam kondisi kekurangan makanan?",
    a: "Membiarkannya sampai dewasa",
    b: "Memberinya makan dan merawatnya dengan baik",
    c: "Membuangnya ke hutan",
    d: "Memasukannya ke dalam wadah kedap udara",
    kunci: "B"
  }
];

// Ekspor variabel agar bisa digunakan oleh file JavaScript lain atau modul Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = bankSoal;
}