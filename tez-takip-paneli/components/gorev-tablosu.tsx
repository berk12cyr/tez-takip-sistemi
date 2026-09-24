"use client"

import { useState } from "react"
import {
  type Gorev,
  type GorevDurumu,
  type Ogrenci,
  gorevDurumEtiketleri,
} from "@/lib/arastirma-data"
import { ArrowDown, ArrowUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { YeniGorevFormu } from "@/components/yeni-gorev-formu"

type DurumFiltresi = "tumu" | GorevDurumu
type SiralamaYonu = "artan" | "azalan"

const durumFiltreleri: { deger: DurumFiltresi; label: string }[] = [
  { deger: "tumu", label: "Tümü" },
  { deger: "bekliyor", label: "Bekliyor" },
  { deger: "devam", label: "Devam Ediyor" },
  { deger: "tamamlandi", label: "Tamamlandı" },
]

function tarihBicimle(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export function GorevTablosu({
  gorevler,
  setGorevler,
  ogrenciler,
}: {
  gorevler: Gorev[]
  setGorevler: React.Dispatch<React.SetStateAction<Gorev[]>>
  ogrenciler: Ogrenci[]
}) {
  const [filtre, setFiltre] = useState<DurumFiltresi>("tumu")
  const [siralama, setSiralama] = useState<SiralamaYonu>("artan")

  const ogrenciAdi = (id: string) =>
    ogrenciler.find((o) => o.id === id)?.ad ?? "—"

  const gorunenGorevler = gorevler
    .filter((g) => filtre === "tumu" || g.durum === filtre)
    .sort((a, b) => {
      const fark =
        new Date(a.teslimTarihi).getTime() - new Date(b.teslimTarihi).getTime()
      return siralama === "artan" ? fark : -fark
    })

  function gorevEkle(yeni: {
    ad: string
    ogrenciId: string
    teslimTarihi: string
    durum: GorevDurumu
  }) {
    setGorevler((mevcut) => [
      {
        id: `GRV-${Math.floor(Math.random() * 900 + 100)}`,
        ...yeni,
      },
      ...mevcut,
    ])
  }

  return (
    <section aria-labelledby="gorevler-baslik">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 id="gorevler-baslik" className="text-lg font-semibold text-foreground">
          Görevler
        </h2>
        <YeniGorevFormu ogrenciler={ogrenciler} onEkle={gorevEkle} />
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div
          role="group"
          aria-label="Durum filtresi"
          className="flex flex-wrap items-center gap-1 rounded-lg border border-border bg-card p-1"
        >
          {durumFiltreleri.map((f) => (
            <Button
              key={f.deger}
              type="button"
              size="sm"
              variant={filtre === f.deger ? "default" : "ghost"}
              aria-pressed={filtre === f.deger}
              onClick={() => setFiltre(f.deger)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        <Button
          type="button"
          size="sm"
          variant="outline"
          aria-label="Teslim tarihine göre sıralama"
          onClick={() =>
            setSiralama((y) => (y === "artan" ? "azalan" : "artan"))
          }
        >
          {siralama === "artan" ? (
            <ArrowUp className="size-4" />
          ) : (
            <ArrowDown className="size-4" />
          )}
          {siralama === "artan" ? "En yakın tarih önce" : "En uzak tarih önce"}
        </Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Görev</TableHead>
              <TableHead>Öğrenci</TableHead>
              <TableHead>Teslim Tarihi</TableHead>
              <TableHead className="text-right">Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gorunenGorevler.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={4}
                  className="py-8 text-center text-muted-foreground"
                >
                  Bu filtreye uygun görev yok.
                </TableCell>
              </TableRow>
            ) : (
              gorunenGorevler.map((g) => {
                const durum = gorevDurumEtiketleri[g.durum]
                return (
                  <TableRow key={g.id}>
                    <TableCell className="font-medium text-foreground">{g.ad}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {ogrenciAdi(g.ogrenciId)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {tarihBicimle(g.teslimTarihi)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className={durum.className}>
                        {durum.label}
                      </Badge>
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
