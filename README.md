# Lisansüstü Araştırma ve Tez Takip Sistemi

**Araç:** Vercel v0  
**Öğrenci:** İbrahim SÜNBÜL  
**Ders:** Lisansüstü Ders — Ödev 1  
**Sunum Tarihi:** 26 Ekim Pazartesi

---

## 📌 Proje Hakkında

Vercel v0 kullanılarak üretilmiş, lisansüstü öğrencilerin tez süreçlerini takip eden küçük bir web uygulaması. Sistem; öğrenci, tez konusu, danışman, görev, teslim tarihi ve ilerleme durumu gibi örnek veriler üzerinden çalışır. **Gerçek kişisel veri içermez.**

## 🎯 Uygulama Özellikleri

- **Özet kartları:** Aktif tez, dönem içinde tamamlanan, savunma bekleyen ve gecikme riski taşıyan tezler
- **Aşamalara göre dağılım:** Öneri, yazım, revizyon, savunma ve tamamlandı aşamalarını gösteren çubuk grafiği
- **Yaklaşan teslimler:** Son teslim tarihine kalan gün sayısına göre sıralı liste
- **Danışman yükü:** Her danışmanın aktif tez / kapasite oranı
- **Tez tablosu:** Öğrenci, program, tez başlığı, danışman, durum, ilerleme yüzdesi ve son teslim; sekmelerle filtrelenebilir
- **Yeni görev ekleme:** Görev adı, ilgili öğrenci, teslim tarihi ve durum alanlarıyla form
- **Otomatik ilerleme hesaplama:** Tamamlanan görev / toplam görev oranından yüzde hesaplanır

## 🛠️ Kullanılan Teknolojiler

- Next.js (React)
- Tailwind CSS
- shadcn/ui
- TypeScript

## 🔗 Linkler

- **Canlı Uygulama:** https://tez-takip.vercel.app (Vercel'de yayına alındıktan sonra güncellenecek)
- **Demo Videosu:** (3-5 dakikalık demo videosu bağlantısı buraya eklenecek)
- **Sunum PDF:** `sunum/ibrahim-sunbul-v0-sunum.pdf`
- **Kullanılan Promptlar:** `prompts/promptlar.md`

## ⚙️ Kurulum ve Çalıştırma

```bash
cd tez-takip-paneli
pnpm install
pnpm dev
