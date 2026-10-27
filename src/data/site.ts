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
  positioning: 'Avikara Group · Holding Brand & Registered Tax Advisory',
  url: 'https://avikara.id',
  tagline: 'Building Better Business Through Intelligence.',
  motto: 'Solusi Tepat, Nilai Berkelanjutan.',
  description:
    'Avikara Group adalah One-Stop Intelligent Business Advisory: konsultan pajak terdaftar, jasa akuntansi, solusi ERP & AI in-house, serta pelatihan bisnis untuk perusahaan di Indonesia.',
  email: 'kkp.rizasukmapermana@gmail.com',
  whatsapp: '', // TODO: format internasional tanpa '+', mis. '6281234567890'
  phone: '', // TODO: mis. '+62 21 1234 5678'
  address: '', // TODO: alamat kantor lengkap
  hours: 'Senin – Jumat, 09.00 – 17.00 WIB',
};

export const nav = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#ekosistem', label: 'Ekosistem' },
  { href: '#pimpinan', label: 'Pimpinan' },
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
    unit: 'Dikelola di bawah lisensi Konsultan Riza Sukma Permana',
    desc: 'Solusi perpajakan komprehensif untuk memastikan kepatuhan hukum sekaligus mengoptimalkan efisiensi beban pajak secara legal dan strategis.',
    points: [
      'Tax Compliance & Reporting: kepatuhan pajak bulanan & tahunan',
      'Tax Advisory & Planning: konsultasi & perencanaan pajak',
      'Tax Dispute & Audit Assistance: pendampingan sengketa & pemeriksaan pajak',
      'Transfer Pricing Documentation (TP Doc)',
    ],
    image: imgTax,
    icon: 'landmark',
  },
  {
    id: 'accounting',
    title: 'Accounting Services',
    unit: 'Avikara Accounting Service',
    desc: 'Penyusunan laporan keuangan yang akurat dan transparan sesuai SAK/PSAK Indonesia, memberi gambaran kesehatan finansial perusahaan yang siap diaudit (audit-ready).',
    points: [
      'Bookkeeping & Accounting Outsource: jasa pembukuan rutin',
      'Financial Statement Preparation: penyusunan laporan keuangan',
      'Financial Review & Diagnostic, serta Pre-Audit & Assistance Preparation',
    ],
    image: imgAccounting,
    icon: 'calculator',
  },
  {
    id: 'erp-ai',
    title: 'ERP & AI Business Solutions',
    unit: 'Avikara Technology · In-House IT Advisory & Development',
    desc: 'Sistem berbasis teknologi informasi yang disesuaikan dengan proses bisnis dan regulasi perpajakan lokal, dipimpin langsung oleh IT Partner in-house kami.',
    points: [
      'ERP terintegrasi (penjualan, pembelian, inventory, HR/payroll, keuangan) sesuai karakteristik bisnis',
      'Tax Engine dalam ERP: e-Faktur & e-Bupot langsung dari sistem, kompatibel dengan Coretax',
      'Arsitektur proses bisnis & migrasi data dari legacy system ke cloud/ERP modern',
      'AI untuk dokumen: Invoice OCR, pemindaian nota otomatis & klasifikasi transaksi',
      'Predictive analytics & dashboard: tren penjualan, cash flow forecast, deteksi anomali',
      'AI Agent in-house di server sendiri, tanpa bergantung pihak luar, dengan keamanan data diutamakan',
    ],
    image: imgErp,
    icon: 'brain',
  },
  {
    id: 'academy',
    title: 'Training & Development',
    unit: 'Avikara Academy',
    desc: 'Pengembangan kapabilitas SDM perusahaan di bidang perpajakan, keuangan, dan adopsi teknologi agar tetap kompetitif dan patuh regulasi.',
    points: [
      'In-House Corporate Training sesuai kebutuhan industri & masalah spesifik klien',
      'Tax & Accounting Certification Preparation: bimbingan USKP & update regulasi (SPT Elektronik, Coretax)',
      'Technology & AI for Business Adoption untuk tim akuntansi & finansial',
    ],
    image: imgAcademy,
    icon: 'academy',
  },
];

export interface Leader {
  name: string;
  role: string;
  initials: string;
  bio: string;
  /** Pimpinan utama & dewan penasihat */
  board?: boolean;
}

export const leaders: Leader[] = [
  {
    name: 'Riza Sukma Permana',
    role: 'Managing Partner',
    initials: 'RP',
    board: true,
    bio: 'Pendiri Konsultan Riza Sukma Permana. Memegang izin praktik resmi dari Kementerian Keuangan RI serta memegang kendali strategis dan kepemimpinan utama di Avikara Group.',
  },
  {
    name: 'Sudirman Wu',
    role: 'Board of Advisors & Supervisors',
    initials: 'SW',
    board: true,
    bio: 'Direktur Utama PT Sinar Baru Kontruksi Grup dengan pengalaman puluhan tahun memimpin berbagai sektor bisnis di Indonesia. Bertindak sebagai pengawas independen sekaligus pemberi arahan strategis, business insight, dan nasihat keuangan untuk memastikan keselarasan arah bisnis dan tata kelola persekutuan.',
  },
  {
    name: 'Adhy Sulaksono',
    role: 'Tax & Accounting Partner',
    initials: 'AS',
    bio: 'Praktisi senior dengan pengalaman lebih dari belasan tahun di bidang asistensi pemeriksaan pajak, layanan akuntansi (accounting services), serta perancangan proses bisnis perusahaan (business process architecture).',
  },
  {
    name: 'Y. Nunung Pamungkas Jayuda',
    role: 'IT Partner',
    initials: 'NJ',
    bio: 'Praktisi dan software programmer berpengalaman yang memimpin perancangan serta integrasi solusi teknologi, ERP, dan kecerdasan buatan (AI) di Avikara Group.',
  },
];
