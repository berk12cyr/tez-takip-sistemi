import { GraduationCap, Search, Bell, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-3 md:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Tez Takip Sistemi</p>
            <p className="text-xs text-muted-foreground">
              Lisansüstü Eğitim Enstitüsü
            </p>
          </div>
        </div>

        <div className="relative order-last w-full min-w-0 flex-1 md:order-none md:w-auto">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Öğrenci, tez veya danışman ara..."
            className="pl-9"
            aria-label="Ara"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Bildirimler">
            <Bell className="size-5" />
          </Button>
          <Button className="gap-1.5">
            <Plus className="size-4" />
            <span className="hidden sm:inline">Yeni Tez</span>
          </Button>
          <Avatar className="size-9">
            <AvatarFallback className="bg-accent text-accent-foreground text-xs font-medium">
              SK
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
