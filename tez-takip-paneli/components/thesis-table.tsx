"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tezler, durumEtiketleri, type TezDurumu } from "@/lib/data"

const filtreler: { value: TezDurumu | "hepsi"; label: string }[] = [
  { value: "hepsi", label: "Tümü" },
  { value: "oneri", label: "Öneri" },
  { value: "yazim", label: "Yazım" },
  { value: "revizyon", label: "Revizyon" },
  { value: "savunma", label: "Savunma" },
  { value: "tamamlandi", label: "Tamamlandı" },
]

function bashHarfleri(ad: string) {
  return ad
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
}

export function ThesisTable() {
  const [filtre, setFiltre] = useState<TezDurumu | "hepsi">("hepsi")

  const gorunen =
    filtre === "hepsi" ? tezler : tezler.filter((t) => t.durum === filtre)

  return (
    <Card>
      <CardHeader className="gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CardTitle className="text-base">Tezler</CardTitle>
        <Tabs
          value={filtre}
          onValueChange={(v) => setFiltre(v as TezDurumu | "hepsi")}
        >
          <TabsList className="flex-wrap">
            {filtreler.map((f) => (
              <TabsTrigger key={f.value} value={f.value}>
                {f.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="px-0 sm:px-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Öğrenci</TableHead>
                <TableHead className="hidden md:table-cell">Tez Başlığı</TableHead>
                <TableHead className="hidden lg:table-cell">Danışman</TableHead>
                <TableHead>Durum</TableHead>
                <TableHead className="w-40">İlerleme</TableHead>
                <TableHead className="text-right">Son Teslim</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gorunen.map((t) => (
                <TableRow key={t.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                          {bashHarfleri(t.ogrenci)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="leading-tight">
                        <p className="text-sm font-medium">{t.ogrenci}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.program} · {t.id}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden max-w-xs md:table-cell">
                    <p className="truncate text-sm">{t.baslik}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.guncellenme} güncellendi
                    </p>
                  </TableCell>
                  <TableCell className="hidden text-sm text-muted-foreground lg:table-cell">
                    {t.danisman}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={durumEtiketleri[t.durum].className}
                    >
                      {durumEtiketleri[t.durum].label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={t.ilerleme} className="h-1.5" />
                      <span className="w-9 shrink-0 text-right text-xs tabular-nums text-muted-foreground">
                        %{t.ilerleme}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums">
                    {new Date(t.sonTeslim).toLocaleDateString("tr-TR")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {gorunen.length === 0 && (
          <p className="py-8 text-center text-sm text-muted-foreground">
            Bu aşamada tez bulunmuyor.
          </p>
        )}
      </CardContent>
    </Card>
  )
}
