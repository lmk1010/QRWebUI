'use client';

import React, { useState } from 'react';
import GiftBoxCanvas from '../components/GiftBoxCanvas';

export default function GiftBoxDemo() {
  const [selectedText, setSelectedText] = useState<'SCAN' | 'PAY' | 'THIS' | 'MODERN' | 'COMMON'>('SCAN');
  const [backgroundColor, setBackgroundColor] = useState('#F7DC6F');
  const [frameColor, setFrameColor] = useState('#F4D03F');
  const [showQR, setShowQR] = useState(true);

  const textOptions = [
    { 
      value: 'SCAN', 
      label: 'SCAN ME', 
      subLabel: 'Scan function',
      color: '#F7DC6F',
      frameColor: '#F4D03F',
      icon: '📱',
      description: 'Applicable to scanning payment, scanning attention, etc.'
    },
    { 
      value: 'PAY', 
      label: 'PAY HERE', 
      subLabel: 'Payment function',
      color: '#85E89D',
      frameColor: '#58D68D',
      icon: '💳',
      description: 'Designed for business style for payment scenarios'
    },
    { 
      value: 'THIS', 
      label: 'THIS WAY', 
      subLabel: 'Guidance function',
      color: '#85C1E9',
      frameColor: '#5DADE2',
      icon: '👉',
      description: 'Used for navigation and guidance'
    },
    { 
      value: 'MODERN', 
      label: 'QR CODE', 
      subLabel: 'Modern simplicity',
      color: '#E8E8E8',
      frameColor: '#9E9E9E',
      icon: '✨',
      description: 'Simple modern style, suitable for premium brands'
    },
    { 
      value: 'COMMON', 
      label: 'WELCOME', 
      subLabel: 'Common function',
      color: '#F1948A',
      frameColor: '#EC7063',
      icon: '🎯',
      description: 'Classic universal design, suitable for various occasions'
    }
  ] as const;

  const handleTextChange = (text: 'SCAN' | 'PAY' | 'THIS' | 'MODERN' | 'COMMON') => {
    setSelectedText(text);
    const option = textOptions.find(opt => opt.value === text);
    if (option) {
      setBackgroundColor(option.color);
      setFrameColor(option.frameColor);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎁 Gift Box Frame Designer
          </h1>
          <p className="text-gray-600 text-lg">
            Select different functional types to create professional QR code border designs
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 items-start justify-center">
          {/* 控制面板 */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-full xl:w-96">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Function Options</h2>
            
            {/* 功能类型选择 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Frame Function Type
              </label>
              <div className="space-y-3">
                {textOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleTextChange(option.value)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedText === option.value
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{option.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{option.value}</div>
                        <div className="text-sm text-gray-600">{option.label}</div>
                        <div className="text-xs text-gray-500 mt-1">{option.subLabel}</div>
                      </div>
                      {selectedText === option.value && (
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-2 pl-11">
                      {option.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 颜色自定义 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Background Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Border Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={frameColor}
                  onChange={(e) => setFrameColor(e.target.value)}
                  className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={frameColor}
                  onChange={(e) => setFrameColor(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* 显示选项 */}
            <div className="mb-6">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={showQR}
                  onChange={(e) => setShowQR(e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Show QR Code Area
                </span>
              </label>
            </div>

            {/* 快速主题切换 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Quick Function Switch
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleTextChange('SCAN')}
                  className="p-3 bg-yellow-100 hover:bg-yellow-200 rounded-lg text-sm text-yellow-800 transition-colors flex items-center gap-2"
                >
                  <span>📱</span>
                  <span>Scan</span>
                </button>
                <button
                  onClick={() => handleTextChange('PAY')}
                  className="p-3 bg-green-100 hover:bg-green-200 rounded-lg text-sm text-green-800 transition-colors flex items-center gap-2"
                >
                  <span>💳</span>
                  <span>Pay</span>
                </button>
                <button
                  onClick={() => handleTextChange('MODERN')}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-800 transition-colors flex items-center gap-2"
                >
                  <span>✨</span>
                  <span>Modern</span>
                </button>
                <button
                  onClick={() => handleTextChange('COMMON')}
                  className="p-3 bg-red-100 hover:bg-red-200 rounded-lg text-sm text-red-800 transition-colors flex items-center gap-2"
                >
                  <span>🎯</span>
                  <span>Common</span>
                </button>
              </div>
            </div>
          </div>

          {/* Canvas展示区域 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Live Preview</h3>
            <GiftBoxCanvas
              text={selectedText}
              backgroundColor={backgroundColor}
              frameColor={frameColor}
              showQR={showQR}
              width={400}
              height={500}
            />
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg w-full max-w-md">
              <p className="text-gray-600 mb-2 font-medium">Current Configuration</p>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Function Type:</span>
                  <span className="font-medium">{textOptions.find(opt => opt.value === selectedText)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span>Background:</span>
                  <span className="font-mono text-xs">{backgroundColor}</span>
                </div>
                <div className="flex justify-between">
                  <span>Border:</span>
                  <span className="font-mono text-xs">{frameColor}</span>
                </div>
                <div className="flex justify-between">
                  <span>QR Code:</span>
                  <span>{showQR ? '✅ Visible' : '❌ Hidden'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 功能展示区域 */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            All Frame Functions Preview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
            {textOptions.map((option) => (
              <div key={option.value} className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-xl">{option.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-700">{option.value}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{option.label}</p>
                <p className="text-xs text-gray-500 mb-4">{option.subLabel}</p>
                <GiftBoxCanvas
                  text={option.value}
                  backgroundColor={option.color}
                  frameColor={option.frameColor}
                  width={280}
                  height={350}
                  qrSize={100}
                />
                <p className="text-xs text-gray-500 mt-3 px-2">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 使用说明 */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frame Function Instructions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📱</span>
                <h3 className="font-semibold text-yellow-800">SCAN Code</h3>
              </div>
              <p className="text-sm text-yellow-700">
                Designed specifically for scanning scenarios, includes &quot;Scan Me&quot; prompt, suitable for WeChat and Alipay scanning.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">💳</span>
                <h3 className="font-semibold text-green-800">PAY Payment</h3>
              </div>
              <p className="text-sm text-green-700">
                Business style design, specifically for payment scenarios, with thicker borders to provide trust.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">👉</span>
                <h3 className="font-semibold text-blue-800">THIS Guide</h3>
              </div>
              <p className="text-sm text-blue-700">
                Directional design for navigation and guidance, suitable for locations that require user direction.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">✨</span>
                <h3 className="font-semibold text-gray-800">MODERN Style</h3>
              </div>
              <p className="text-sm text-gray-700">
                Simple modern style, removes decorative elements, suitable for premium brands and modern scenarios.
              </p>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎯</span>
                <h3 className="font-semibold text-red-800">COMMON Universal</h3>
              </div>
              <p className="text-sm text-red-700">
                Classic universal design, retains traditional gift box elements, suitable for various general occasions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 