import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { yaklasanTeslimler } from "@/lib/data"

function kalanRozet(gun: number) {
  if (gun <= 14) return "text-chart-5"
  if (gun <= 30) return "text-chart-4"
  return "text-muted-foreground"
}

export function UpcomingDeadlines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Yaklaşan Teslimler</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {yaklasanTeslimler.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-muted/60"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{t.ogrenci}</p>
              <p className="truncate text-xs text-muted-foreground">
                {t.baslik}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p
                className={`text-sm font-semibold tabular-nums ${kalanRozet(t.kalanGun)}`}
              >
                {t.kalanGun} gün
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(t.sonTeslim).toLocaleDateString("tr-TR", {
                  day: "2-digit",
                  month: "short",
                })}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
