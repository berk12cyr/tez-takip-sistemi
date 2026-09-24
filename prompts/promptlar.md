# Vercel v0 — Kullanılan Promptlar

Bu dosya, **Lisansüstü Araştırma ve Tez Takip Sistemi** uygulamasını üretmek için Vercel v0'ya verilen promptları ve alınan sonuçları içerir.

**Araç:** Vercel v0  
**Öğrenci:** Berk Karataş 
**Tarih:** 26 Ekim Pazartesi

---

## 1. Ana Dashboard Oluşturma

**Prompt:**
> Tez takip sistemi için Türkçe bir yönetim paneli (dashboard) oluştur. Akademik indigo temalı, açık/koyu mod uyumlu ve mobil duyarlı bir tasarım kullan.
>
> Panelde şunlar olsun:
> - Özet kartları: aktif tez, dönem içinde tamamlanan, savunma bekleyen ve gecikme riski taşıyan tezler
> - Aşamalara göre dağılım: öneri, yazım, revizyon, savunma ve tamamlandı aşamalarını gösteren renkli çubuk grafiği
> - Yaklaşan teslimler: son teslim tarihine kalan gün sayısına göre sıralanmış liste
> - Danışman yükü: her danışmanın aktif tez / kapasite oranı ilerleme çubuklarıyla
> - Tez tablosu: öğrenci, program, tez başlığı, danışman, durum rozeti, ilerleme yüzdesi ve son teslim

**Sonuç:** İlk denemede çalışan, estetik ve responsive dashboard üretildi. Kartlar, grafik ve tablo doğru şekilde render edildi.

---

## 2. Otomatik İlerleme Hesaplama

**Prompt:**
> İlerleme yüzdesi her öğrenci için otomatik olarak tamamlanan görev / toplam görev oranından hesaplansın. Görevi olmayan öğrenci için %0 gösterilsin. Öğrenci kartlarında yüzdenin yanında "1/2 görev" gibi tamamlanan/toplam sayısı da görünsün.

**Sonuç:**
- `lib/arastirma-data.ts` içine `ilerlemeHesapla(ogrenciId, gorevler)` fonksiyonu eklendi (tamamlanan, toplam ve yüzde döndürür)
- Statik ilerleme alanı kaldırıldı
- Görev durumu tek bir yerde tutuldu (`components/arastirma-panosu.tsx`), böylece kartlar ve tablo aynı veriyi paylaşıyor
- Yeni görev eklendiğinde ilgili öğrencinin ilerleme çubuğu anında güncelleniyor

**Test Sonuçları:**
- A. Yılmaz: 1/2 görev → %50 ✓
- F. Aksoy: 0/0 görev → %0 ✓
- Konsol hatası yok ✓

---

## 3. Yeni Görev Ekleme Formu

**Prompt:**
> Yeni görev ekleme formunda şu alanlar olsun: görev adı, ilgili öğrenci (dropdown), teslim tarihi (date picker), durum (select). Form gönderilince tabloya eklensin.

**Sonuç:**
- `components/yeni-gorev-formu.tsx` dosyası oluşturuldu
- Form gönderilince `gonder()` fonksiyonu zorunlu alanları doğruluyor
- `onEkle(...)` ile yeni görev `arastirma-panosu.tsx` içindeki ortak duruma ekleniyor
- Satır anında tabloda görünüyor, ilgili öğrencinin ilerleme çubuğu otomatik güncelleniyor

**Test:** Yeni görev eklendi → tablonun en üstünde, öğrencisi, tarihi ve "Bekliyor" rozetiyle göründü ✓

---

## 4. Filtreleme ve Sıralama

**Prompt:**
> Görev tablosuna üstte bir filtre çubuğu ekle:
> - Durum filtresi: Tümü / Bekliyor / Devam Ediyor / Tamamlandı (buton grubu veya select)
> - Teslim tarihine göre sıralama: "En yakın tarih önce" / "En uzak tarih önce"
>
> Filtre aktifken öğrenci kartlarındaki ilerleme yüzdeleri değişmesin (ilerleme her zaman tüm görevlere göre hesaplanır). Boş sonuç olursa "Bu filtreye uygun görev yok" mesajı göster.

**Sonuç:**
- Filtre çubuğu eklendi (durum + sıralama)
- İlk denemede tarih sıralaması yanlış çalıştı, ikinci prompt ile düzeltildi
- Boş sonuç mesajı doğru gösteriliyor
- İlerleme yüzdeleri filtre aktifken değişmiyor ✓

---

## 5. Tasarım Detayları ve İyileştirmeler

**Prompt:**
> Danışman alanı ve tarih formatı eklenmesini istediğimizde v0 aşağıdaki gibi isteklerimizi karşıladı:
> - Danışman yükü göstergesi: her danışmanın aktif tez / kapasite oranı
> - Koyu mod uyumlu tema
> - Mobil görünüm

**Sonuç:** Tema ve mobil uyumluluk sorunsuz çalıştı. Danışman yükü kartı grafikleri doğru render edildi.

---

## 📊 Genel Değerlendirme

| Kriter | Değerlendirme |
|---|---|
| **Toplam prompt sayısı** | ~7-8 |
| **İlk denemede çalışan** | Çoğu özellik (dashboard, kartlar, tablo, form) |
| **Düzeltme gerektiren** | Tarih sıralaması (1 kez düzeltildi) |
| **v0'nun güçlü yönü** | Hızlı ve estetik UI üretimi, Türkçe içeriği anlayabiliyor, modern stack (Next.js + shadcn/ui + Tailwind) |
| **v0'nun sınırlılığı** | Backend/veritabanı üretmiyor, ücretsiz plan kredisi hızla tükeniyor, büyük projelerde mesaj kredisi yetmiyor |
| **İnsan müdahalesi** | Tarih formatı, klasör yapısı, README içeriği ve sunum hazırlığı |

---

## 🐛 Hata Kaydı

### Hata 1: Klasör yapısının bir seviye derinde oluşması

- **Ne oldu:** GitHub web arayüzünden yüklerken klasörün kendisi (`tez-takip-paneli/`) sürüklendiği için tüm içerik bir alt seviyede kaldı.
- **Düzeltme:** Vercel deploy sırasında "Root Directory" ayarı `tez-takip-paneli` olarak belirtilecek.
- **Öğrenilen:** Web arayüzünden yükleme yaparken klasörün içeriği sürüklenmeli, klasörün kendisi değil.

### Hata 2: v0 ücretsiz plan kredisi tükendi

- **Ne oldu:** Uygulama geliştirme sırasında v0 ücretsiz plan kredisi tükendi, yeni promptlar için "Out of Credit" hatası alındı.
- **Düzeltme:** Mevcut kodu ZIP olarak indirip GitHub'a manuel yükleme yapıldı.
- **Öğrenilen:** v0 ücretsiz plan limitleri küçük ödevler için bile yetersiz olabilir; alternatif araçlar (Lovable, Bolt) ücretsiz planlarında daha cömerttir.
