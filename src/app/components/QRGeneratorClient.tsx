"use client";

import React from 'react';
import QRCodePage from './QRCodePage';

interface QRGeneratorClientProps {
    // 可以添加任何需要从服务端传递的props
}

const QRGeneratorClient: React.FC<QRGeneratorClientProps> = () => {
    return <QRCodePage />;
};

export default QRGeneratorClient; 