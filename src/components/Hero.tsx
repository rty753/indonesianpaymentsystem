import { CheckCircle, MessageCircle, Zap, Shield, Users, ExternalLink } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-50 pt-16 pb-20">
      <div className="container-max section-padding">
        <div className="text-center">
          <div className="animate-fade-in">
            {/* 核心业务引导 */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-full text-sm font-medium mb-4 border border-green-200">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                专业游戏支付通道服务商 · 业务扩展至支付系统搭建
              </div>
              <a 
                href="https://indonesiapayments.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-6"
              >
                🎮 访问我们的核心业务：印尼支付通道
                <ExternalLink size={18} className="ml-2" />
              </a>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                为游戏平台提供专业收款解决方案，现扩展业务至完整支付系统搭建服务
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              印尼支付系统<br />
              <span className="text-primary-600">全渠道接入方案</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              支持OVO、GoPay、DANA等主流电子钱包，提供QRIS统一码收款、虚拟账户、便利店支付全方案
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://t.me/zfxt5" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 flex items-center gap-3 justify-center"
              >
                <MessageCircle size={20} />
                免费咨询接入
              </a>
              <a 
                href="#payment-methods" 
                className="btn-secondary text-lg px-8 py-4 flex items-center gap-3 justify-center"
              >
                查看支付方式
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-slide-up">
                <Zap className="h-12 w-12 text-primary-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">最快1天接入</h3>
                <p className="text-gray-600">专业团队7x24小时技术支持，快速完成系统对接</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-slide-up" style={{animationDelay: '0.1s'}}>
                <Shield className="h-12 w-12 text-secondary-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">费率低至0.1%</h3>
                <p className="text-gray-600">行业最优费率，降低交易成本，提升业务竞争力</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <Users className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">多渠道支持</h3>
                <p className="text-gray-600">覆盖印尼主流支付方式，满足不同用户支付习惯</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero