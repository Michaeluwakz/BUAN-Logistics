import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface SidebarLink {
  to: string
  icon: ReactNode
  label: string
}

interface SidebarProps {
  links: SidebarLink[]
}

export default function Sidebar({ links }: SidebarProps) {
  const location = useLocation()

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen p-6">
      <nav className="space-y-2">
        {links.map((link) => {
          const isActive = location.pathname === link.to
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#003366] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

