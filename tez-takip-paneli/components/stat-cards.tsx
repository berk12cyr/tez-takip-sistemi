import { Card, CardContent } from "@/components/ui/card"
import {
  FileStack,
  CheckCircle2,
  Clock,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react"

type Stat = {
  label: string
  value: string
  detay: string
  icon: LucideIcon
  tint: string
}

const stats: Stat[] = [
  {
    label: "Aktif Tez",
    value: "48",
    detay: "12 doktora · 36 yüksek lisans",
    icon: FileStack,
    tint: "bg-chart-1/15 text-chart-1",
  },
  {
    label: "Bu Dönem Tamamlanan",
    value: "9",
    detay: "%18 tamamlanma oranı",
    icon: CheckCircle2,
    tint: "bg-chart-3/15 text-chart-3",
  },
  {
    label: "Savunma Bekleyen",
    value: "5",
    detay: "Önümüzdeki 30 gün içinde",
    icon: Clock,
    tint: "bg-chart-2/15 text-chart-2",
  },
  {
    label: "Gecikme Riski",
    value: "3",
    detay: "Teslim tarihi yaklaşıyor",
    icon: AlertTriangle,
    tint: "bg-chart-5/15 text-chart-5",
  },
]

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label}>
          <CardContent className="flex items-start justify-between gap-3 p-5">
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight">
                {s.value}
              </p>
              <p className="mt-1 truncate text-xs text-muted-foreground">
                {s.detay}
              </p>
            </div>
            <div
              className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${s.tint}`}
            >
              <s.icon className="size-5" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
