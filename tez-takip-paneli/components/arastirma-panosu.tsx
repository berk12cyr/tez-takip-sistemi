"use client"

import { useState } from "react"
import type { Gorev, Ogrenci } from "@/lib/arastirma-data"
import { OgrenciKartlari } from "@/components/ogrenci-kartlari"
import { GorevTablosu } from "@/components/gorev-tablosu"

export function ArastirmaPanosu({
  ogrenciler,
  baslangicGorevleri,
}: {
  ogrenciler: Ogrenci[]
  baslangicGorevleri: Gorev[]
}) {
  const [gorevler, setGorevler] = useState<Gorev[]>(baslangicGorevleri)

  return (
    <div className="flex flex-col gap-12">
      <OgrenciKartlari ogrenciler={ogrenciler} gorevler={gorevler} />
      <GorevTablosu
        gorevler={gorevler}
        setGorevler={setGorevler}
        ogrenciler={ogrenciler}
      />
    </div>
  )
}
