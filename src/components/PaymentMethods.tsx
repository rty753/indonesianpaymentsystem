import { CreditCard, Smartphone, QrCode, Building2 } from 'lucide-react'

const PaymentMethods = () => {
  const paymentMethods = [
    {
      category: "电子钱包",
      icon: <Smartphone className="h-8 w-8" />,
      methods: [
        { name: "OVO", description: "印尼最大的电子钱包之一", logo: "🟠" },
        { name: "GoPay", description: "Gojek旗下支付平台", logo: "🟢" },
        { name: "DANA", description: "蚂蚁金服投资的电子钱包", logo: "🔵" },
        { name: "ShopeePay", description: "Shopee购物平台支付", logo: "🟠" },
        { name: "LinkAja", description: "国有电信运营商支付", logo: "🔴" }
      ]
    },
    {
      category: "QRIS统一码",
      icon: <QrCode className="h-8 w-8" />,
      methods: [
        { name: "QRIS收款", description: "印尼央行统一二维码标准", logo: "📱" },
        { name: "动态码", description: "支持金额预设的动态二维码", logo: "🔄" },
        { name: "静态码", description: "适合固定场所的静态收款码", logo: "📍" }
      ]
    },
    {
      category: "银行转账",
      icon: <Building2 className="h-8 w-8" />,
      methods: [
        { name: "虚拟账户", description: "BCA、Mandiri、BNI等主流银行", logo: "🏦" },
        { name: "网银转账", description: "支持所有印尼本地银行", logo: "💳" },
        { name: "ATM转账", description: "覆盖全国ATM网点", logo: "🏧" }
      ]
    },
    {
      category: "便利店支付",
      icon: <CreditCard className="h-8 w-8" />,
      methods: [
        { name: "Indomaret", description: "印尼最大连锁便利店", logo: "🏪" },
        { name: "Alfamart", description: "覆盖全国的便利店网络", logo: "🏪" },
        { name: "其他便利店", description: "支持多种便利店渠道", logo: "🛒" }
      ]
    }
  ]

  return (
    <section id="payment-methods" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            支持的支付方式
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            全面覆盖印尼主流支付渠道，为您的用户提供最便捷的支付体验
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {paymentMethods.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.methods.map((method, methodIndex) => (
                  <div key={methodIndex} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="text-2xl mr-4 mt-1">{method.logo}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{method.name}</h4>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">全渠道覆盖</h3>
            <p className="text-lg mb-4">支持印尼90%以上的主流支付方式</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">实时到账</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">自动对账</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">风险控制</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">7x24支持</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentMethods