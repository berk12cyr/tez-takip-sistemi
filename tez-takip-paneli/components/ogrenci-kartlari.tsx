import { type Gorev, type Ogrenci, ilerlemeHesapla } from "@/lib/arastirma-data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

function bashHarfleri(ad: string) {
  return ad
    .split(" ")
    .map((p) => p.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function OgrenciKartlari({
  ogrenciler,
  gorevler,
}: {
  ogrenciler: Ogrenci[]
  gorevler: Gorev[]
}) {
  return (
    <section aria-labelledby="ogrenciler-baslik">
      <h2 id="ogrenciler-baslik" className="mb-4 text-lg font-semibold text-foreground">
        Öğrenciler
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ogrenciler.map((o) => {
          const { toplam, tamamlanan, yuzde } = ilerlemeHesapla(o.id, gorevler)
          return (
            <Card key={o.id} className="flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between gap-3 space-y-0">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {bashHarfleri(o.ad)}
                </div>
                <div>
                  <p className="font-medium leading-tight text-foreground">{o.ad}</p>
                  <p className="text-xs text-muted-foreground">{o.danisman}</p>
                </div>
              </div>
              <Badge variant="secondary" className="shrink-0 font-normal">
                {o.program}
              </Badge>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col gap-4">
              <p className="text-sm leading-snug text-foreground">{o.tezKonusu}</p>
              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    İlerleme
                    <span className="ml-1.5 text-muted-foreground/70">
                      {tamamlanan}/{toplam} görev
                    </span>
                  </span>
                  <span className="font-medium text-foreground">{yuzde}%</span>
                </div>
                <Progress value={yuzde} aria-label={`${o.ad} tez ilerlemesi`} />
              </div>
            </CardContent>
          </Card>
          )
        })}
      </div>
    </section>
  )
}
