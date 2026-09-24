"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import type { GorevDurumu, Ogrenci } from "@/lib/arastirma-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type YeniGorev = {
  ad: string
  ogrenciId: string
  teslimTarihi: string
  durum: GorevDurumu
}

export function YeniGorevFormu({
  ogrenciler,
  onEkle,
}: {
  ogrenciler: Ogrenci[]
  onEkle: (gorev: YeniGorev) => void
}) {
  const [acik, setAcik] = useState(false)
  const [ad, setAd] = useState("")
  const [ogrenciId, setOgrenciId] = useState("")
  const [teslimTarihi, setTeslimTarihi] = useState("")
  const [durum, setDurum] = useState<GorevDurumu>("bekliyor")

  const gecerli = ad.trim() && ogrenciId && teslimTarihi

  function gonder(e: React.FormEvent) {
    e.preventDefault()
    if (!gecerli) return
    onEkle({ ad: ad.trim(), ogrenciId, teslimTarihi, durum })
    setAd("")
    setOgrenciId("")
    setTeslimTarihi("")
    setDurum("bekliyor")
    setAcik(false)
  }

  return (
    <Dialog open={acik} onOpenChange={setAcik}>
      <DialogTrigger
        render={
          <Button>
            <Plus className="h-4 w-4" />
            Yeni Görev
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Yeni Görev Ekle</DialogTitle>
          <DialogDescription>
            Bir öğrenciye yeni bir tez görevi tanımlayın.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={gonder} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="gorev-ad">Görev adı</Label>
            <Input
              id="gorev-ad"
              value={ad}
              onChange={(e) => setAd(e.target.value)}
              placeholder="Örn. Metodoloji bölümü teslimi"
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="gorev-ogrenci">Öğrenci</Label>
            <Select value={ogrenciId} onValueChange={setOgrenciId}>
              <SelectTrigger id="gorev-ogrenci">
                <SelectValue placeholder="Öğrenci seçin" />
              </SelectTrigger>
              <SelectContent>
                {ogrenciler.map((o) => (
                  <SelectItem key={o.id} value={o.id}>
                    {o.ad}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="gorev-tarih">Teslim tarihi</Label>
            <Input
              id="gorev-tarih"
              type="date"
              value={teslimTarihi}
              onChange={(e) => setTeslimTarihi(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="gorev-durum">Durum</Label>
            <Select
              value={durum}
              onValueChange={(v) => setDurum(v as GorevDurumu)}
            >
              <SelectTrigger id="gorev-durum">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bekliyor">Bekliyor</SelectItem>
                <SelectItem value="devam">Devam Ediyor</SelectItem>
                <SelectItem value="tamamlandi">Tamamlandı</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="mt-2">
            <Button type="button" variant="outline" onClick={() => setAcik(false)}>
              İptal
            </Button>
            <Button type="submit" disabled={!gecerli}>
              Görev Ekle
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
