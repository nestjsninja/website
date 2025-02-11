import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 sm:pt-14 sm:pb-32">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>Copyright &copy; {new Date().getFullYear()} NestJS-Ninja</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}
