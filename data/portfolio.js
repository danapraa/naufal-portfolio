export const profile = {
  name: "Naufal Wahyu Pradana",
  shortName: "Naufal",
  initials: "NW",
  status: "Fresh Graduate Informatika",
  headline: "Front-End Developer & Web Developer",
  intro:
    "Saya membangun aplikasi web yang fungsional, responsif, dan nyaman digunakan, dengan React.js, Next.js, Laravel, dan MySQL.",
  location: "Surabaya, Indonesia",
  email: "falxuee@gmail.com",
  phone: "0895-1756-1511",
  whatsapp: "https://wa.me/6289517561511",
  linkedin: "https://www.linkedin.com/in/naufalwahyu/",
  github: "https://github.com/danapraa",
  // Taruh file CV kamu di folder public/ dengan nama persis seperti ini
  cv: "/CV-Naufal-Wahyu-Pradana.pdf",
  heroTech: ["Laravel", "Next.js", "React.js", "Node.js", "MySQL", "Figma"],
};

export const about = {
  paragraphs: [
    "Saya merupakan fresh graduate Informatika yang memiliki minat di bidang Web Development dan Software Development. Saya memiliki pengalaman mengembangkan website menggunakan Laravel, Next.js, React, dan Node.js, serta memahami penggunaan MySQL untuk pengelolaan database dan Figma untuk desain antarmuka.",
    "Saya bersemangat untuk terus mengembangkan keterampilan teknis, mempelajari teknologi baru, dan berkontribusi dalam membangun solusi digital yang fungsional dan responsif.",
  ],
  stats: [
    { value: "2", label: "Pengalaman Kerja" },
    { value: "5", label: "Project" },
    { value: "S1", label: "Informatika, Lulus 2026" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Laravel", "PHP", "Node.js", "REST API"],
  },
  {
    title: "Database",
    items: ["MySQL"],
  },
  {
    title: "Tools & Design",
    items: ["Git", "GitHub", "Figma"],
  },
  {
    title: "Kompetensi",
    wide: true,
    items: [
      "Front-End Development",
      "Back-End Web Development",
      "Full-Stack Development",
      "Responsive Web Design",
      "UI/UX Implementation",
      "Problem Solving",
    ],
  },
];

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Bandung Techno Park",
    period: "Februari 2025 – Juni 2025",
    points: [
      "Mengembangkan antarmuka pengguna untuk platform JATIM BISSA sebagai Frontend Developer dalam program WRAP Entrepreneurship 1 Program 2025.",
      "Menerjemahkan konsep dan desain produk menjadi tampilan web yang fungsional, responsif, dan berorientasi pada pengalaman pengguna.",
      "Mengimplementasikan dan menyempurnakan fitur front-end sesuai kebutuhan produk dan tujuan pengembangan startup.",
      "Berkolaborasi dengan tim backend dan desain dalam mengintegrasikan fitur serta memastikan kesesuaian antara desain dan implementasi.",
      "Menjaga konsistensi desain, usability, dan kualitas tampilan pada setiap halaman platform.",
    ],
  },
  {
    role: "Web & Data Administration Intern",
    company: "Universitas Terbuka Surabaya",
    period: "September 2020 – April 2021",
    points: [
      "Mengelola dan mengolah data secara terstruktur untuk mendukung kebutuhan administrasi dan operasional Universitas Terbuka Surabaya.",
      "Mendukung proses pembuatan dan pengolahan kartu mahasiswa dengan memastikan data yang digunakan akurat dan konsisten.",
      "Mengembangkan kebutuhan desain web untuk mendukung penyajian informasi dan kebutuhan digital institusi.",
      "Berkolaborasi dengan tim internal dalam menerjemahkan kebutuhan administrasi dan operasional ke dalam solusi digital yang efektif.",
      "Memastikan pengelolaan data dan kebutuhan digital berjalan secara teliti, terstruktur, dan sesuai dengan kebutuhan pengguna.",
    ],
  },
];

export const projects = [
  {
    title: "NusaGreenMarket",
    type: "Full-Stack Web Application Project",
    period: "November 2025 – Sekarang",
    description:
      "Platform web untuk penjualan sayur dan buah segar langsung dari kebun. Mencakup fitur front-end dan back-end untuk mendukung interaksi pengguna, dengan antarmuka responsif yang fokus pada kemudahan penggunaan dan performa.",
    tech: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"], 
    image: "/proyek/nusagreenmarket.png",
    demo: "", 
    repo: "https://github.com/danapraa/nusagreenmarket.git",
  },
  {
    title: "JatimBissa",
    type: "Frontend Development",
    period: "Februari 2025 – Juni 2025",
    description:
      "JATIM BISSA merupakan platform yang menghubungkan penyandang disabilitas dengan peluang kerja yang inklusif melalui kerjasama strategis dengan berbagai pihak untuk menciptakan ekosistem ketenagakerjaan yang berkelanjutan. Platform ini dikembangkan atas kerjasama dari Disnakertrans Provinsi Jawa Timur, Komisi Nasional Disabilitas, dan Universitas Telkom Kampus Surabaya. Berperan sebagai Frontend Developer dalam membangun dan mengembangkan Jatim Bissa, sebuah startup dalam program WRAP Entrepreneurship 1 Program 2025 di Bandung Techno Park. Bertanggung jawab menerjemahkan konsep produk menjadi antarmuka digital yang fungsional, responsif, dan berorientasi pada pengalaman pengguna. Terlibat langsung dalam proses pengembangan dan penyempurnaan produk, serta berkolaborasi dengan tim untuk memastikan implementasi front-end selaras dengan kebutuhan produk dan tujuan bisnis startup.",
    tech: ["Next.js", "Tailwind CSS", "REST API", "Figma"],
    image: "/proyek/jatimbissa.png",
    demo: "https://jatimbissa.id/",
    repo: "",
  },
    {
    title: "Resto LimKokTong Kopitiam Wiyung Surabaya",
    type: "Full-Stack Web Application Project",
    period: "September 2026 – Oktober 2026",
    description:
      "Dari antre dan catatan manual ke satu platform: customer bisa memesan menu dan mereservasi meja dari HP, sementara admin memantau semuanya real-time lewat dashboard. Dibangun full-stack dengan Laravel dan MySQL, lengkap dengan autentikasi berbasis role, keranjang, checkout yang aman, dan manajemen status pesanan.",
    tech: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "Alpine.js"],
    image: "/proyek/limkoktong.png",
    repo: "https://github.com/danapraa/resto-laravel.git",
  },
    {
    title: "Absensi QR Dinamis",
    type: "Full-Stack Web Application Project",
    period: "Agustus 2026 – September 2026 ",
    description:
      "Sistem absensi berbasis web dengan QR dinamis yang berganti otomatis setiap 30 detik. Karyawan atau siswa cukup scan QR dengan kamera HP untuk absen masuk dan pulang. Dilengkapi dua peran (admin dan user), validasi token kedaluwarsa, dashboard dan riwayat absensi pribadi, serta rekap harian dan bulanan dengan ekspor Excel untuk admin.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],
    image: "/proyek/absensi-qr.png",
    demo: "https://jatimbissa.id/",
    repo: "",
  },
    {
    title: "Pasarin",
    type: "Full-Stack Web Application Project",
    period: "Agustus 2026 – September 2026",
    description:
      "Marketplace multi-seller dengan tiga peran pengguna (Admin, Seller, Customer). Mencakup fitur front-end dan back-end: autentikasi dengan redirect otomatis sesuai role, panel admin untuk mengelola kategori dan produk dengan upload gambar, dashboard seller, serta storefront publik dengan pencarian, filter kategori, dan halaman detail produk. Antarmuka responsif dengan desain kustom yang playful dan konsisten.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Alpine.js", "Spatie Permission"],
    image: "/proyek/pasarin.png",
    repo: "https://github.com/danapraa/pasarin-laravel.git",
  },
];

export const education = {
  degree: "Sarjana Informatika (S1)",
  school: "Universitas Telkom Surabaya",
  period: "2022 – 2026",
  detail:
    "Program Studi Informatika, Fakultas Informatika. Menyelesaikan proyek akademik terkait pengembangan aplikasi web dan desain antarmuka pengguna.",
};

export const certifications = [
  {
    name: "Dasar-Dasar Node.js",
    issuer: "Bisa AI Academy", 
    year: "2026",
  },
];