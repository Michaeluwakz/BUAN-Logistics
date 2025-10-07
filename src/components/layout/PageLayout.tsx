import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface PageLayoutProps {
  children: ReactNode
  showFooter?: boolean
}

export default function PageLayout({ children, showFooter = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      {showFooter && <Footer />}
    </div>
  )
}

