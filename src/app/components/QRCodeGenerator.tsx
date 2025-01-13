// src/components/QRCodeGenerator.tsx
import React, { useState } from 'react';
import QRCode from 'react-qr-code'; // 使用替代库

const QRCodeGenerator: React.FC = () => {
    const [text, setText] = useState('');

    return (
        <div className="space-y-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="输入文本或链接"
                className="w-full px-4 py-2 border rounded"
            />
            <div className="flex justify-center">
                {text && <QRCode value={text} size={256} />}
            </div>
        </div>
    );
};

export default QRCodeGenerator;
