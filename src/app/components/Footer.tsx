import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

// Links rápidos
const quickLinks = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Ministérios', href: '#ministerios' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Contato', href: '#contato' },
]

// Redes sociais
const socialLinks = [
  {
    icon: FaFacebook,
    href: 'https://facebook.com/igrejapresbiteriana',
    label: 'Facebook',
  },
  {
    icon: FaInstagram,
    href: 'https://instagram.com/igrejapresbiteriana',
    label: 'Instagram',
  },
  {
    icon: FaYoutube,
    href: 'https://youtube.com/igrejapresbiteriana',
    label: 'YouTube',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-azul-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo e Lema */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Logo Igreja Presbiteriana"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="ml-2 font-merriweather font-bold text-xl">
                IPB Peniel
              </span>
            </Link>
            <p className="mt-4 text-white/80">
              "Conhecendo a Cristo e fazendo-o conhecido"
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-merriweather text-lg font-bold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-dourado-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-merriweather text-lg font-bold mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-dourado-500 transition-colors duration-200"
                  aria-label={label}
                >
                  <div className="w-6 h-6">
                    <Icon />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>
            © {currentYear} Igreja Presbiteriana do Brasil - Peniel. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 