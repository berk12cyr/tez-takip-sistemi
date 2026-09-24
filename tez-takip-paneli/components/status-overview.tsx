import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { tezler, durumEtiketleri, type TezDurumu } from "@/lib/data"

const siralama: TezDurumu[] = [
  "oneri",
  "yazim",
  "revizyon",
  "savunma",
  "tamamlandi",
]

const barRenkleri: Record<TezDurumu, string> = {
  oneri: "bg-chart-4",
  yazim: "bg-chart-1",
  revizyon: "bg-chart-5",
  savunma: "bg-chart-2",
  tamamlandi: "bg-chart-3",
}

export function StatusOverview() {
  const toplam = tezler.length
  const dagilim = siralama.map((durum) => ({
    durum,
    adet: tezler.filter((t) => t.durum === durum).length,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Aşamalara Göre Dağılım</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex h-3 w-full overflow-hidden rounded-full bg-muted">
          {dagilim.map(
            ({ durum, adet }) =>
              adet > 0 && (
                <div
                  key={durum}
                  className={barRenkleri[durum]}
                  style={{ width: `${(adet / toplam) * 100}%` }}
                  title={durumEtiketleri[durum].label}
                />
              ),
          )}
        </div>
        <ul className="space-y-2.5">
          {dagilim.map(({ durum, adet }) => (
            <li
              key={durum}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2">
                <span
                  className={`size-2.5 rounded-full ${barRenkleri[durum]}`}
                  aria-hidden
                />
                {durumEtiketleri[durum].label}
              </span>
              <span className="font-medium tabular-nums">{adet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
