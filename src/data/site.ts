import type { ImageMetadata } from 'astro';
import imgTax from '../assets/img/svc-tax.jpg';
import imgAccounting from '../assets/img/svc-accounting.jpg';
import imgErp from '../assets/img/svc-erp.jpg';
import imgAi from '../assets/img/svc-ai.jpg';
import imgAcademy from '../assets/img/svc-academy.jpg';

/**
 * Data kontak. Kolom yang dikosongkan ('') otomatis disembunyikan di halaman.
 * TODO: isi dengan data resmi sebelum go-live.
 */
export const site = {
  name: 'Avikara Group',
  legalName: 'Avikara Group / KKP Riza Sukma Permana',
  url: 'https://avikara.id',
  tagline: 'Building Better Business Through Intelligence.',
  motto: 'Insight. Integrity. Innovation.',
  description:
    'Avikara Group adalah mitra konsultan pajak terdaftar (BKP Tingkat B), jasa akuntansi, serta solusi ERP & AI in-house untuk perusahaan menengah di Indonesia.',
  email: 'info@avikara.id', // TODO: pastikan alamat email ini aktif
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

export type IconName = 'landmark' | 'calculator' | 'boxes' | 'brain' | 'academy';

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
    title: 'Tax Advisory & Compliance',
    unit: 'Avikara Tax Advisory · KKP Riza S. Permana',
    desc: 'Pendampingan perpajakan oleh konsultan pajak berizin resmi Kementerian Keuangan RI, dari kepatuhan rutin hingga sengketa.',
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
    title: 'Accounting Service',
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
    id: 'erp',
    title: 'ERP Solutions',
    unit: 'Avikara Technology',
    desc: 'Implementasi dan kustomisasi ERP yang menyatukan operasional, keuangan, dan pajak dalam satu sistem terintegrasi.',
    points: [
      'Analisis kebutuhan & desain sistem',
      'Kustomisasi modul & integrasi data',
      'Implementasi, pelatihan & dukungan',
    ],
    image: imgErp,
    icon: 'boxes',
  },
  {
    id: 'ai',
    title: 'AI Business Solutions',
    unit: 'Avikara Technology',
    desc: 'Pemanfaatan kecerdasan buatan untuk otomasi proses, analisis data, dan pengambilan keputusan yang lebih cepat.',
    points: [
      'Otomasi proses akuntansi & dokumen',
      'Dashboard & analitik bisnis',
      'Integrasi AI ke sistem yang sudah ada',
    ],
    image: imgAi,
    icon: 'brain',
  },
  {
    id: 'academy',
    title: 'Avikara Academy',
    unit: 'Training & Development',
    desc: 'Pelatihan praktis perpajakan, akuntansi, dan teknologi untuk meningkatkan kapabilitas tim keuangan Anda.',
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
  advisor?: boolean;
}

export const leaders: Leader[] = [
  {
    name: 'Riza Sukma Permana',
    role: 'Managing Partner',
    initials: 'RP',
    bio: 'Pendiri KKP Riza Sukma Permana. Memegang izin praktik resmi dari Kementerian Keuangan RI dan bersertifikat Konsultan Pajak Tingkat B (BKP B). Memimpin arah strategis Avikara Group.',
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
    bio: 'Pengembang perangkat lunak berpengalaman yang memimpin perancangan dan integrasi solusi teknologi, ERP, serta kecerdasan buatan (AI) di Avikara Group.',
  },
  {
    name: 'Sudirman Wu',
    role: 'Board of Advisors & Supervisors',
    initials: 'SW',
    bio: 'Direktur Utama PT Sinar Baru Kontruksi Grup dengan pengalaman puluhan tahun memimpin berbagai sektor bisnis. Bertindak sebagai pengawas independen dan penasihat strategis.',
    advisor: true,
  },
];
