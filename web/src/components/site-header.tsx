import { Separator } from "@/components/ui/separator"
import { MobXSidebarTrigger } from "./providers/MobXSidebarProviders"
import ThemeButton from "@/components/theme/ThemeButton"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b-1">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center **:data-[slot=separator]:!h-4">
          {/* Left aligned items */}
          <div className="flex items-center gap-2">
            <MobXSidebarTrigger />
            <Separator
              orientation="vertical"
              className="ml-2"
            />
          </div>
          
          {/* Center content that takes up all available space */}
          <div className="flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Linear Full Stack</span>
              <span className="text-xs text-muted-foreground">v1.0</span>
            </div>
          </div>
          
          {/* Right aligned items */}
          <div className="flex items-center gap-2">
            <Separator orientation="vertical" />
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  )
}