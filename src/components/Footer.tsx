import { MessageCircle, Mail, Globe, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">印尼支付系统</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              专业的印尼支付系统接入服务商，为企业提供全方位的支付解决方案。
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-primary-400 mr-3" />
                <span className="text-gray-400">indonesianpaymentsystem.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary-400 mr-3" />
                <span className="text-gray-400">7×24小时技术支持</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">支付服务</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#payment-methods" className="hover:text-white transition-colors">电子钱包支付</a></li>
              <li><a href="#payment-methods" className="hover:text-white transition-colors">QRIS统一码</a></li>
              <li><a href="#payment-methods" className="hover:text-white transition-colors">银行转账</a></li>
              <li><a href="#payment-methods" className="hover:text-white transition-colors">便利店支付</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">风险控制</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">技术支持</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#integration" className="hover:text-white transition-colors">接入指南</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API文档</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SDK下载</a></li>
              <li><a href="#" className="hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#" className="hover:text-white transition-colors">技术博客</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">联系我们</h4>
            <div className="space-y-4">
              <a 
                href="https://t.me/zfxt5" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <MessageCircle className="h-5 w-5 mr-3 text-primary-400 group-hover:text-primary-300" />
                <span>Telegram咨询</span>
              </a>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-primary-400" />
                <span>support@indonesianpaymentsystem.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://t.me/zfxt5" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle size={16} />
                立即咨询
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 印尼支付系统. 保留所有权利.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">服务条款</a>
              <a href="#" className="hover:text-white transition-colors">合规声明</a>
            </div>
          </div>
        </div>

        {/* Keywords for SEO */}
        <div className="mt-8 text-xs text-gray-600">
          <p className="opacity-50">
            关键词: 印尼支付系统, OVO支付, GoPay支付, DANA支付, QRIS收款, 印尼电子钱包, 支付接入, 印尼支付API, 印尼在线支付, 东南亚支付
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer