# avikara.id — Landing Page

Situs statis Avikara Group, dibangun dengan Astro + Tailwind CSS.

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil di dist/
npm run preview   # cek hasil build
```

## Mengubah konten

Hampir semua teks penting ada di **`src/data/site.ts`**:

- `site`: email, WhatsApp, telepon, alamat, jam layanan. Kolom kosong (`''`) otomatis disembunyikan.
  **Isi `whatsapp` agar form kontak langsung membuka WhatsApp**; jika kosong, form membuka email.
- `services`: 5 layanan (judul, deskripsi, poin, foto).
- `leaders`: profil pimpinan.

Bagian halaman ada di `src/components/` (Hero, About, Services, Ecosystem, Leadership,
Partnership, Contact, Footer). Warna & font ada di `src/styles/global.css`.

## Deploy

Folder `dist/` bisa di-hosting di Vercel, Netlify, Cloudflare Pages, atau hosting statis apa pun.
Arahkan domain `avikara.id` ke hosting tersebut.

## Sebelum go-live

- [ ] Isi kontak resmi di `src/data/site.ts` (WhatsApp, telepon, alamat) dan pastikan `info@avikara.id` aktif
- [ ] Ganti logo dengan file resmi resolusi tinggi (lihat `CREDITS.md`)
- [ ] (Opsional) Foto asli pimpinan, menggantikan inisial

Kredit foto: lihat `CREDITS.md`.
