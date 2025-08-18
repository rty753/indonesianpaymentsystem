import { Menu, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-gray-900">
              印尼支付系统
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
              功能特色
            </a>
            <a href="#payment-methods" className="text-gray-600 hover:text-primary-600 transition-colors">
              支付方式
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">
              费率说明
            </a>
            <a href="#integration" className="text-gray-600 hover:text-primary-600 transition-colors">
              接入流程
            </a>
            <a 
              href="https://t.me/zfxt5" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <MessageCircle size={16} />
              立即咨询
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                功能特色
              </a>
              <a href="#payment-methods" className="text-gray-600 hover:text-primary-600 transition-colors">
                支付方式
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">
                费率说明
              </a>
              <a href="#integration" className="text-gray-600 hover:text-primary-600 transition-colors">
                接入流程
              </a>
              <a 
                href="https://t.me/zfxt5" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 w-fit"
              >
                <MessageCircle size={16} />
                立即咨询
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header