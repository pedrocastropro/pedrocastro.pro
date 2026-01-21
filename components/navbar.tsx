"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Workflow } from "lucide-react"

export function Navbar() {
    const pathname = usePathname()
    const isN8nActive = pathname === "/n8n"

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight text-gray-900">Pedro Castro</span>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/n8n"
                        className={cn(
                            "hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
                            isN8nActive
                                ? "bg-gray-200 text-gray-900 border border-gray-300/50 shadow-inner"
                                : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-transparent"
                        )}
                    >
                        <Workflow className={cn("w-4 h-4", isN8nActive ? "text-[#FF6D5A]" : "text-[#FF6D5A]/80")} />
                        Consultoría / n8n
                    </Link>
                    <Link
                        href="/#contact"
                        className={cn(
                            "hidden sm:inline-flex",
                            "inline-flex items-center justify-center rounded-full bg-[#0066FF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0052CC] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                        )}
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </header>
    )
}
