export type GorevDurumu = "bekliyor" | "devam" | "tamamlandi"

export const gorevDurumEtiketleri: Record<
  GorevDurumu,
  { label: string; className: string }
> = {
  bekliyor: {
    label: "Bekliyor",
    className: "bg-muted text-muted-foreground border-border",
  },
  devam: {
    label: "Devam Ediyor",
    className: "bg-chart-1/15 text-chart-1 border-chart-1/30",
  },
  tamamlandi: {
    label: "Tamamlandı",
    className: "bg-chart-3/15 text-chart-3 border-chart-3/30",
  },
}

export type Ogrenci = {
  id: string
  ad: string
  program: "Yüksek Lisans" | "Doktora"
  tezKonusu: string
  danisman: string
}

export type Gorev = {
  id: string
  ogrenciId: string
  ad: string
  teslimTarihi: string
  durum: GorevDurumu
}

export function ilerlemeHesapla(ogrenciId: string, gorevler: Gorev[]) {
  const ogrenciGorevleri = gorevler.filter((g) => g.ogrenciId === ogrenciId)
  const toplam = ogrenciGorevleri.length
  const tamamlanan = ogrenciGorevleri.filter(
    (g) => g.durum === "tamamlandi",
  ).length
  const yuzde = toplam === 0 ? 0 : Math.round((tamamlanan / toplam) * 100)
  return { toplam, tamamlanan, yuzde }
}

export const ogrenciler: Ogrenci[] = [
  {
    id: "OGR-01",
    ad: "A. Yılmaz",
    program: "Doktora",
    tezKonusu: "Derin Öğrenme ile Tıbbi Görüntü Segmentasyonu",
    danisman: "Prof. Dr. M. Kaya",
    ilerleme: 78,
  },
  {
    id: "OGR-02",
    ad: "B. Demir",
    program: "Yüksek Lisans",
    tezKonusu: "Sürdürülebilir Kentsel Ulaşım Modellemesi",
    danisman: "Doç. Dr. S. Aydın",
    ilerleme: 45,
  },
  {
    id: "OGR-03",
    ad: "C. Şahin",
    program: "Doktora",
    tezKonusu: "Kuantum Hesaplamada Hata Düzeltme Algoritmaları",
    danisman: "Prof. Dr. E. Öztürk",
    ilerleme: 92,
  },
  {
    id: "OGR-04",
    ad: "D. Arslan",
    program: "Yüksek Lisans",
    tezKonusu: "Mikroplastiklerin Deniz Ekosistemine Etkileri",
    danisman: "Dr. Öğr. Üyesi F. Çelik",
    ilerleme: 30,
  },
  {
    id: "OGR-05",
    ad: "E. Koç",
    program: "Doktora",
    tezKonusu: "Doğal Dil İşleme ile Hukuki Metin Analizi",
    danisman: "Prof. Dr. M. Kaya",
    ilerleme: 60,
  },
  {
    id: "OGR-06",
    ad: "F. Aksoy",
    program: "Yüksek Lisans",
    tezKonusu: "Yenilenebilir Enerji Sistemlerinde Depolama",
    danisman: "Doç. Dr. S. Aydın",
    ilerleme: 15,
  },
]

export const gorevler: Gorev[] = [
  {
    id: "GRV-101",
    ogrenciId: "OGR-01",
    ad: "Literatür taraması teslimi",
    teslimTarihi: "2026-10-05",
    durum: "tamamlandi",
  },
  {
    id: "GRV-102",
    ogrenciId: "OGR-02",
    ad: "Anket veri toplama raporu",
    teslimTarihi: "2026-10-12",
    durum: "devam",
  },
  {
    id: "GRV-103",
    ogrenciId: "OGR-03",
    ad: "Savunma sunumu hazırlığı",
    teslimTarihi: "2026-10-18",
    durum: "devam",
  },
  {
    id: "GRV-104",
    ogrenciId: "OGR-04",
    ad: "Etik kurul başvurusu",
    teslimTarihi: "2026-10-22",
    durum: "bekliyor",
  },
  {
    id: "GRV-105",
    ogrenciId: "OGR-05",
    ad: "Ara jüri değerlendirme formu",
    teslimTarihi: "2026-11-01",
    durum: "bekliyor",
  },
  {
    id: "GRV-106",
    ogrenciId: "OGR-01",
    ad: "Metodoloji bölümü revizyonu",
    teslimTarihi: "2026-11-08",
    durum: "devam",
  },
]
