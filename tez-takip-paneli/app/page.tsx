import { ogrenciler, gorevler } from "@/lib/arastirma-data"
import { ArastirmaPanosu } from "@/components/arastirma-panosu"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
            Lisansüstü Araştırma ve Tez Takip Sistemi
          </h1>
          <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
            Öğrencilerin tez ilerlemelerini izleyin, danışman atamalarını görüntüleyin
            ve tez görevlerini tek bir yerden yönetin.
          </p>
        </header>

        <ArastirmaPanosu ogrenciler={ogrenciler} baslangicGorevleri={gorevler} />
      </div>
    </div>
  )
}
