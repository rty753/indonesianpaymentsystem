'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 过滤掉MetaMask相关错误，不显示给用户
    if (error.message.includes('MetaMask') || error.message.includes('chrome-extension')) {
      console.log('Browser extension error filtered:', error.message)
      return
    }
    console.error(error)
  }, [error])

  // 如果是MetaMask错误，不显示错误页面
  if (error.message.includes('MetaMask') || error.message.includes('chrome-extension')) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          出现了一些问题
        </h2>
        <p className="text-gray-600 mb-6">
          页面遇到了意外错误，请尝试刷新页面。
        </p>
        <button
          onClick={reset}
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          重试
        </button>
      </div>
    </div>
  )
}