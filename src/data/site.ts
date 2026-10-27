import type { ImageMetadata } from 'astro';
import imgTax from '../assets/img/svc-tax.jpg';
import imgAccounting from '../assets/img/svc-accounting.jpg';
import imgErp from '../assets/img/svc-erp.jpg';
import imgAcademy from '../assets/img/svc-academy.jpg';

/**
 * Data kontak. Kolom yang dikosongkan ('') otomatis disembunyikan di halaman.
 * TODO: isi dengan data resmi sebelum go-live.
 */
export const site = {
  name: 'PT Avikara Sinar Konsultan',
  shortName: 'Avikara',
  legalName: 'PT Avikara Sinar Konsultan',
  positioning: 'Holding Brand & Registered Tax Advisory (BKP Level B)',
  url: 'https://avikara.id',
  tagline: 'Building Better Business Through Intelligence.',
  motto: 'Insight. Integrity. Innovation.',
  description:
    'PT Avikara Sinar Konsultan adalah One-Stop Intelligent Business Advisory: konsultan pajak terdaftar (BKP Level B), jasa akuntansi, solusi ERP & AI in-house, serta pelatihan bisnis untuk perusahaan di Indonesia.',
  email: 'kkp.rizasukmapermana@gmail.com',
  whatsapp: '', // TODO: format internasional tanpa '+', mis. '6281234567890'
  phone: '', // TODO: mis. '+62 21 1234 5678'
  address: '', // TODO: alamat kantor lengkap
  hours: 'Senin – Jumat, 09.00 – 17.00 WIB',
};

/** Data legal perseroan (sumber: "Avikara Sinar Konsultan - Summary.docx"). */
export const company = {
  authorizedCapital: 'Rp 1.000.000.000',
  paidUpCapital: 'Rp 250.000.000',
  shareholders: [
    { name: 'Riza Sukma Permana', share: 50, amount: 'Rp 125.000.000' },
    { name: 'Sudirman Wu', share: 20, amount: 'Rp 50.000.000' },
    { name: 'Suwati', share: 15, amount: 'Rp 37.500.000' },
    { name: 'Welly Susanti', share: 15, amount: 'Rp 37.500.000' },
  ],
  kbli: [
    { code: '69202', label: 'Aktivitas Konsultasi Pajak' },
    { code: '69201', label: 'Aktivitas Akuntansi, Pembukuan dan Pemeriksa' },
    { code: '85585', label: 'Pelatihan Kerja Bisnis dan Manajemen Perusahaan' },
    { code: '62209', label: 'Konsultasi Komputer & Manajemen Fasilitas Komputer' },
  ],
};

export const nav = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#ekosistem', label: 'Ekosistem' },
  { href: '#pimpinan', label: 'Pimpinan' },
  { href: '#legalitas', label: 'Legalitas' },
  { href: '#kemitraan', label: 'Kemitraan KAP' },
];

export type IconName = 'landmark' | 'calculator' | 'brain' | 'academy';

export interface Service {
  id: string;
  title: string;
  unit: string;
  desc: string;
  points: string[];
  image: ImageMetadata;
  icon: IconName;
}

export const services: Service[] = [
  {
    id: 'tax',
    title: 'Tax Compliance & Advisory',
    unit: 'Lisensi KKP Riza Sukma Permana · BKP Level B',
    desc: 'Pendampingan perpajakan oleh konsultan pajak terdaftar, dikelola di bawah lisensi KKP Riza Sukma Permana, dari kepatuhan rutin hingga pemeriksaan.',
    points: [
      'Asistensi SP2DK & pemeriksaan pajak',
      'Transfer Pricing Documentation (TP Doc)',
      'Perencanaan & kepatuhan pajak badan',
    ],
    image: imgTax,
    icon: 'landmark',
  },
  {
    id: 'accounting',
    title: 'Accounting Services',
    unit: 'Avikara Accounting Service',
    desc: 'Pembukuan yang rapi, selaras dengan regulasi perpajakan Indonesia, dan siap diaudit secara independen.',
    points: [
      'Bookkeeping & penyusunan laporan keuangan',
      'Perbaikan & rekonsiliasi pembukuan',
      'Perancangan proses bisnis',
    ],
    image: imgAccounting,
    icon: 'calculator',
  },
  {
    id: 'erp-ai',
    title: 'ERP & AI Business Solutions',
    unit: 'Avikara Technology · In-House IT Advisory & Development',
    desc: 'Implementasi ERP dan pemanfaatan AI yang menyatukan operasional, keuangan, dan pajak, dikerjakan sepenuhnya oleh tim IT internal.',
    points: [
      'Analisis kebutuhan, desain sistem & kustomisasi modul',
      'Otomasi proses, dashboard & analitik bisnis',
      'Integrasi sistem & AI, implementasi, pelatihan & dukungan',
    ],
    image: imgErp,
    icon: 'brain',
  },
  {
    id: 'academy',
    title: 'Training & Development',
    unit: 'Avikara Academy',
    desc: 'Pelatihan praktis manajemen, perpajakan, akuntansi, dan teknologi untuk meningkatkan kapabilitas tim Anda.',
    points: ['In-house training', 'Workshop regulasi terbaru', 'Pelatihan penggunaan sistem ERP'],
    image: imgAcademy,
    icon: 'academy',
  },
];

export interface Leader {
  name: string;
  role: string;
  initials: string;
  bio: string;
  /** Jajaran Direksi & Komisaris */
  board?: boolean;
}

export const leaders: Leader[] = [
  {
    name: 'Riza Sukma Permana',
    role: 'Direktur',
    initials: 'RP',
    board: true,
    bio: 'Direktur PT Avikara Sinar Konsultan dan pendiri KKP Riza Sukma Permana. Memegang izin praktik resmi dari Kementerian Keuangan RI dan bersertifikat Konsultan Pajak Level B (BKP B).',
  },
  {
    name: 'Adhy Sulaksono',
    role: 'Tax & Accounting Partner',
    initials: 'AS',
    bio: 'Praktisi senior dengan pengalaman lebih dari belasan tahun di asistensi pemeriksaan pajak, layanan akuntansi, serta perancangan proses bisnis perusahaan.',
  },
  {
    name: 'Y. Nunung Pamungkas Jayuda',
    role: 'IT Partner',
    initials: 'NJ',
    bio: 'Pengembang perangkat lunak berpengalaman yang memimpin perancangan dan integrasi solusi teknologi, ERP, serta kecerdasan buatan (AI) di Avikara.',
  },
  {
    name: 'Sudirman Wu',
    role: 'Komisaris',
    initials: 'SW',
    bio: 'Direktur Utama PT Sinar Baru Kontruksi Grup dengan pengalaman puluhan tahun memimpin berbagai sektor bisnis. Komisaris PT Avikara Sinar Konsultan, bertindak sebagai pengawas dan penasihat strategis perseroan.',
    board: true,
  },
];
