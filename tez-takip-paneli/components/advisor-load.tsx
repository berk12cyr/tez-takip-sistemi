import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { danismanYuku } from "@/lib/data"

export function AdvisorLoad() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Danışman Yükü</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {danismanYuku.map((d) => (
          <div key={d.ad} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="truncate font-medium">{d.ad}</span>
              <span className="shrink-0 text-muted-foreground tabular-nums">
                {d.aktif}/{d.kapasite}
              </span>
            </div>
            <Progress value={(d.aktif / d.kapasite) * 100} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
