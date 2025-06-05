'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Tipos
type MenuItem = {
  label: string
  href: string
}

const menuItems: MenuItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Ministérios', href: '#ministerios' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Logo Igreja Presbiteriana"
              width={40}
              height={40}
              className="w-10 h-10"
              priority
            />
            <span className="ml-2 font-merriweather font-bold text-black">
              IPB Peniel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-azul-900 hover:text-coral-500 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#visite"
              className="bg-azul-900 text-white px-4 py-2 rounded-md hover:bg-coral-500 transition-colors duration-200"
            >
              Visite-nos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-azul-900 hover:text-coral-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-azul-900 hover:text-coral-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#visite"
                className="block py-2 text-center bg-azul-900 text-white rounded-md hover:bg-coral-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Visite-nos
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 