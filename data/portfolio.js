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
  phone: "0812-3754-3608",
  whatsapp: "https://wa.me/6281237543608",
  linkedin: "https://www.linkedin.com/in/naufalwahyu/",
  github: "https://github.com/danapraa",
  cv: "/CV-ATS-NAUFAL.pdf",
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
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
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
    period: "November 2025 – Januari 2026",
    description:
      "Platform web untuk penjualan sayur dan buah segar langsung dari kebun. Mencakup fitur front-end dan back-end untuk mendukung interaksi pengguna, dengan antarmuka responsif yang fokus pada kemudahan penggunaan dan performa.",
    tech: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    image: "/proyek/nusagreenmarket.png",
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
    repo: "",
  },
  {
    title: "Pasarin",
    type: "Full-Stack Web Application Project",
    period: "Agustus 2026 – September 2026",
    description:
      "Marketplace multi-seller dengan tiga peran pengguna (Admin, Seller, Customer). Mencakup fitur front-end dan back-end: autentikasi dengan redirect otomatis sesuai role, panel admin untuk mengelola kategori dan produk dengan upload gambar, dashboard seller, serta storefront publik dengan pencarian, filter kategori, dan halaman detail produk. Antarmuka responsif dengan desain kustom yang playful dan konsisten.",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Alpine.js",
      "Spatie Permission",
    ],
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

export const achievements = [
  {
    title: "Peserta Hackathon 8.0 - Web3 Innovation",
    organizer: "Internet Computer (ICP) Hub Indonesia",
    year: " Juli 2025",
    level: "Nasional",
    description: "Berpartisipasi dalam Hackathon 8.0 yang diselenggarakan dalam ekosistem Internet Computer Protocol (ICP), dengan kontribusi terhadap pengembangan inovasi berbasis Web3.",
    image: "/prestasi/prestasi-satu.jpg",
  },
  {
    title: "HOLOGY 7.0 UX Design Achievement",
    organizer: "Fakultas Ilmu Komputer, Universitas Brawijaya",
    year: "November 2025",
    level: "Nasional",
    description: "Kegiatan ini mengusung tema “ICT for Human Capital Development: Leveraging Technology for Indonesian Societal Advancement” dan memberikan pengalaman dalam bidang desain pengalaman pengguna (UX Design) serta pengembangan solusi berbasis teknologi informasi.",
    image: "/prestasi/prestasi-dua.png",
  },
  {
    title: "Peraih Medali Emas Kompetisi Sains Se-Indonesia (KSSI) 2025 Bidang Matematika",
    organizer: "Generasi Maju Indonesia (GEMANESIA)",
    year: "Februari",
    level: "Nasional",
    description: "Meraih medali emas pada Kompetisi Sains Se-Indonesia (KSSI) 2025 bidang Matematika tingkat perguruan tinggi dengan predikat A+.",
    image: "/prestasi/prestasi-tiga.png",
  },
];

// ---------- SERTIFIKASI & PELATIHAN ----------
export const certificationGroups = [
  {
    title: "Sertifikasi Bahasa Inggris",
    items: [
      {
        name: "English Proficiency Test (EPrT)",
        issuer: "Telkom University Language Center",
        year: "2026 - 2028",
        score: "Skor 410",
        image: "/sertifikat/english-1.png",
      },
      {
        name: "English Communicative Competence Test (ECCT)",
        issuer: "Telkom University Language Center",
        year: "2025 - 2027",
        score: "Skor 2,5",
        image: "/sertifikat/english-2.png",
        link: "",
      },
    ],
  },
  {
    title: "Pelatihan",
    items: [
      {
        name: "Dasar-Dasar Node.js",
        issuer: "Bisa AI Academy",
        year: "2026",
        description:
          "Pelatihan Dasar-Dasar Node.js yang diselenggarakan oleh Bisa AI Academy untuk mempelajari konsep dasar Node.js, pengelolaan modul menggunakan NPM, instalasi dan pembaruan modul, serta pengelolaan dependensi dalam proyek JavaScript. Pelatihan ini bertujuan membangun pemahaman dasar mengenai lingkungan runtime JavaScript di sisi server sebagai landasan untuk pengembangan aplikasi berbasis web.",
        image: "/sertifikat/pelatihan-1.png",
      },
      {
        name: "Road to U-Connect 2022 - “Ngobrol Bareng Ahli Cybersecurity & Persiapan Berkarir di Bidang IT.",
        issuer: "Infradigital foundation",
        year: "2022",
        description:
          "Mengikuti webinar Road to U-Connect 2022 dengan tema “Ngobrol Bareng Ahli Cybersecurity & Persiapan Berkarir di Bidang IT”. Kegiatan ini memberikan wawasan mengenai bidang cybersecurity serta gambaran mengenai persiapan dan pengembangan kompetensi untuk membangun karier di bidang teknologi informasi.",
        image: "/sertifikat/pelatihan-2.jpg",
      },
      {
        name: "Basic Figma : Pembuatan UI Aplikasi Mobile",
        issuer: "Bisa AI Academy",
        year: "2026",
        description:
          "Pelatihan membahas dasar penggunaan Figma untuk merancang antarmuka (UI) aplikasi mobile, meliputi pembuatan desain antarmuka, penyusunan elemen visual, dan penerapan prinsip dasar desain UI/UX. Pelatihan bertujuan meningkatkan kompetensi dalam merancang tampilan aplikasi mobile menggunakan Figma.",
        image: "/sertifikat/pelatihan-3.png",
      },
    ],
  },
];
