import { 
  Zap, Shield, Clock, Globe, Users, BarChart3, 
  Headphones, Code, CheckCircle, Wallet, RefreshCw, Lock 
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "快速接入",
      description: "专业团队支持，最快1天完成接入，提供完整的API文档和SDK",
      highlights: ["1天快速上线", "完整技术文档", "多语言SDK"]
    },
    {
      icon: <Shield className="h-12 w-12 text-green-500" />,
      title: "安全可靠",
      description: "银行级安全标准，PCI DSS认证，多重风控保护，资金安全有保障",
      highlights: ["PCI DSS认证", "多重风控", "银行级安全"]
    },
    {
      icon: <Wallet className="h-12 w-12 text-blue-500" />,
      title: "费率优势",
      description: "行业最优费率，低至0.1%起，无隐藏费用，大客户享受更优惠费率",
      highlights: ["费率0.1%起", "无隐藏费用", "大客户优惠"]
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-500" />,
      title: "实时到账",
      description: "T+0实时清算，资金快速到账，支持自动对账和财务报表导出",
      highlights: ["T+0到账", "自动对账", "财务报表"]
    },
    {
      icon: <Globe className="h-12 w-12 text-indigo-500" />,
      title: "全渠道覆盖",
      description: "支持印尼主流支付方式，覆盖90%以上用户支付习惯，提升转化率",
      highlights: ["90%覆盖率", "主流渠道", "高转化率"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-red-500" />,
      title: "数据分析",
      description: "实时交易数据监控，详细的商户后台，支持多维度数据分析",
      highlights: ["实时监控", "商户后台", "数据分析"]
    },
    {
      icon: <Headphones className="h-12 w-12 text-orange-500" />,
      title: "7×24技术支持",
      description: "专业技术团队全天候在线支持，快速响应技术问题和业务咨询",
      highlights: ["全天候在线", "快速响应", "专业团队"]
    },
    {
      icon: <Code className="h-12 w-12 text-teal-500" />,
      title: "开发友好",
      description: "RESTful API设计，Webhook回调机制，支持测试环境，开发调试简单",
      highlights: ["RESTful API", "Webhook回调", "测试环境"]
    }
  ]

  const pricingTiers = [
    {
      name: "标准版",
      rate: "0.3%",
      features: ["基础支付功能", "标准技术支持", "基础数据报表"],
      recommended: false
    },
    {
      name: "专业版",
      rate: "0.2%",
      features: ["全功能支持", "优先技术支持", "详细数据分析", "自定义回调"],
      recommended: true
    },
    {
      name: "企业版",
      rate: "0.1%",
      features: ["专属客户经理", "7×24电话支持", "定制化开发", "专线接入"],
      recommended: false
    }
  ]

  return (
    <>
      <section id="features" className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择我们
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专业的印尼支付系统解决方案，为您的业务提供全方位支持
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-primary-600">
                      <CheckCircle size={14} className="mr-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              费率说明
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              透明的费率体系，根据业务规模提供最优惠的费率方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                  tier.recommended ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      推荐方案
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {tier.rate}
                    <span className="text-lg text-gray-500 font-normal">起</span>
                  </div>
                  <p className="text-gray-500">每笔交易费率</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  tier.recommended 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  选择方案
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              * 具体费率根据业务类型和交易量确定，大客户享受更优惠费率
            </p>
            <a 
              href="https://t.me/zfxt5" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              联系我们获取定制报价
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features