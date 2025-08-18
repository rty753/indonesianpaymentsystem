import { 
  MessageCircle, FileText, Code, TestTube, 
  CheckCircle, ArrowRight, Download, Globe 
} from 'lucide-react'

const Integration = () => {
  const integrationSteps = [
    {
      step: "1",
      title: "联系咨询",
      description: "通过Telegram联系我们，了解具体需求和技术方案",
      icon: <MessageCircle className="h-8 w-8" />,
      action: "立即联系",
      actionLink: "https://t.me/zfxt5"
    },
    {
      step: "2", 
      title: "商务洽谈",
      description: "确定费率方案、服务内容，签署合作协议",
      icon: <FileText className="h-8 w-8" />,
      action: "了解费率",
      actionLink: "#pricing"
    },
    {
      step: "3",
      title: "技术对接", 
      description: "获取API密钥，下载SDK，配置开发环境",
      icon: <Code className="h-8 w-8" />,
      action: "查看文档",
      actionLink: "#"
    },
    {
      step: "4",
      title: "测试验证",
      description: "在测试环境完成功能测试，确保系统稳定运行",
      icon: <TestTube className="h-8 w-8" />,
      action: "开始测试", 
      actionLink: "#"
    },
    {
      step: "5",
      title: "正式上线",
      description: "切换到生产环境，开始处理真实交易",
      icon: <CheckCircle className="h-8 w-8" />,
      action: "上线运行",
      actionLink: "#"
    }
  ]

  const techSpecs = [
    {
      title: "API接口",
      items: ["RESTful API设计", "JSON格式数据", "HTTPS安全传输", "签名验证机制"]
    },
    {
      title: "SDK支持", 
      items: ["PHP SDK", "Java SDK", "Node.js SDK", "Python SDK"]
    },
    {
      title: "回调通知",
      items: ["实时Webhook", "支付状态通知", "自动重试机制", "签名验证"]
    },
    {
      title: "安全保障",
      items: ["SSL证书", "数据加密", "IP白名单", "风险控制"]
    }
  ]

  return (
    <>
      <section id="integration" className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              接入流程
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              简单5步，快速完成印尼支付系统接入，专业团队全程协助
            </p>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="flex justify-between items-start relative">
                {/* Timeline Line */}
                <div className="absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-600 z-0"></div>
                
                {integrationSteps.map((step, index) => (
                  <div key={index} className="relative flex flex-col items-center max-w-xs z-10">
                    {/* Step Circle */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg">
                      {step.step}
                    </div>
                    
                    {/* Step Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="text-primary-600 mb-4 flex justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
                        {step.description}
                      </p>
                      <div className="text-center">
                        <a
                          href={step.actionLink}
                          target={step.actionLink.startsWith('http') ? '_blank' : '_self'}
                          rel={step.actionLink.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                          {step.action}
                          <ArrowRight size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-8">
              {integrationSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex-1">
                    <div className="flex items-center mb-3">
                      <div className="text-primary-600 mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <a
                      href={step.actionLink}
                      target={step.actionLink.startsWith('http') ? '_blank' : '_self'}
                      rel={step.actionLink.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      {step.action}
                      <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://t.me/zfxt5" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
            >
              <MessageCircle size={20} />
              开始接入咨询
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              技术规格
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              完善的技术文档和工具，让开发接入更简单高效
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {techSpecs.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">完整的技术支持</h3>
            <p className="text-lg mb-6 opacity-90">
              提供详细的API文档、SDK下载、代码示例和技术支持
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                <Download size={16} />
                下载SDK
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                <FileText size={16} />
                查看文档
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                <Globe size={16} />
                在线演示
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Integration