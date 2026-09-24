export type TezDurumu =
  | "oneri"
  | "yazim"
  | "revizyon"
  | "savunma"
  | "tamamlandi"

export const durumEtiketleri: Record<
  TezDurumu,
  { label: string; className: string }
> = {
  oneri: {
    label: "Öneri Aşaması",
    className: "bg-chart-4/15 text-chart-4 border-chart-4/30",
  },
  yazim: {
    label: "Yazım",
    className: "bg-chart-1/15 text-chart-1 border-chart-1/30",
  },
  revizyon: {
    label: "Revizyon",
    className: "bg-chart-5/15 text-chart-5 border-chart-5/30",
  },
  savunma: {
    label: "Savunma",
    className: "bg-chart-2/15 text-chart-2 border-chart-2/30",
  },
  tamamlandi: {
    label: "Tamamlandı",
    className: "bg-chart-3/15 text-chart-3 border-chart-3/30",
  },
}

export type Tez = {
  id: string
  ogrenci: string
  program: "Yüksek Lisans" | "Doktora"
  baslik: string
  danisman: string
  durum: TezDurumu
  ilerleme: number
  sonTeslim: string
  guncellenme: string
}

export const tezler: Tez[] = [
  {
    id: "TZ-2041",
    ogrenci: "Elif Yılmaz",
    program: "Doktora",
    baslik: "Derin Öğrenme ile Tıbbi Görüntü Segmentasyonu",
    danisman: "Prof. Dr. Ahmet Kaya",
    durum: "revizyon",
    ilerleme: 78,
    sonTeslim: "2026-11-12",
    guncellenme: "2 gün önce",
  },
  {
    id: "TZ-2038",
    ogrenci: "Mert Demir",
    program: "Yüksek Lisans",
    baslik: "Şehir İçi Trafik Akışının Optimizasyonu",
    danisman: "Doç. Dr. Selin Aydın",
    durum: "yazim",
    ilerleme: 54,
    sonTeslim: "2026-12-01",
    guncellenme: "5 saat önce",
  },
  {
    id: "TZ-2035",
    ogrenci: "Zeynep Şahin",
    program: "Doktora",
    baslik: "Kuantum Hesaplamada Hata Düzeltme Kodları",
    danisman: "Prof. Dr. Ahmet Kaya",
    durum: "savunma",
    ilerleme: 92,
    sonTeslim: "2026-10-08",
    guncellenme: "1 gün önce",
  },
  {
    id: "TZ-2044",
    ogrenci: "Can Öztürk",
    program: "Yüksek Lisans",
    baslik: "Sürdürülebilir Enerji Sistemlerinde Depolama",
    danisman: "Dr. Öğr. Üyesi Burak Çelik",
    durum: "oneri",
    ilerleme: 18,
    sonTeslim: "2027-03-20",
    guncellenme: "3 gün önce",
  },
  {
    id: "TZ-2029",
    ogrenci: "Ayşe Koç",
    program: "Doktora",
    baslik: "Sosyal Ağlarda Bilgi Yayılımı Modellemesi",
    danisman: "Doç. Dr. Selin Aydın",
    durum: "tamamlandi",
    ilerleme: 100,
    sonTeslim: "2026-09-15",
    guncellenme: "1 hafta önce",
  },
  {
    id: "TZ-2042",
    ogrenci: "Emre Arslan",
    program: "Yüksek Lisans",
    baslik: "Doğal Dil İşleme ile Duygu Analizi",
    danisman: "Dr. Öğr. Üyesi Burak Çelik",
    durum: "yazim",
    ilerleme: 47,
    sonTeslim: "2026-12-18",
    guncellenme: "4 saat önce",
  },
  {
    id: "TZ-2033",
    ogrenci: "Deniz Aksoy",
    program: "Doktora",
    baslik: "Biyomalzemelerde Yüzey Modifikasyonu",
    danisman: "Prof. Dr. Ahmet Kaya",
    durum: "revizyon",
    ilerleme: 71,
    sonTeslim: "2026-11-28",
    guncellenme: "6 gün önce",
  },
  {
    id: "TZ-2046",
    ogrenci: "Selin Yıldız",
    program: "Yüksek Lisans",
    baslik: "Blokzincir Tabanlı Tedarik Zinciri Takibi",
    danisman: "Doç. Dr. Selin Aydın",
    durum: "oneri",
    ilerleme: 12,
    sonTeslim: "2027-04-05",
    guncellenme: "2 gün önce",
  },
]

export const yaklasanTeslimler = tezler
  .filter((t) => t.durum !== "tamamlandi")
  .map((t) => ({
    ...t,
    kalanGun: Math.round(
      (new Date(t.sonTeslim).getTime() - new Date("2026-09-24").getTime()) /
        (1000 * 60 * 60 * 24),
    ),
  }))
  .sort((a, b) => a.kalanGun - b.kalanGun)
  .slice(0, 5)

export const danismanYuku = [
  { ad: "Prof. Dr. Ahmet Kaya", aktif: 3, kapasite: 6 },
  { ad: "Doç. Dr. Selin Aydın", aktif: 3, kapasite: 5 },
  { ad: "Dr. Öğr. Üyesi Burak Çelik", aktif: 2, kapasite: 4 },
]
