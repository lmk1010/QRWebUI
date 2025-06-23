#!/bin/bash

# 测试服务器连接脚本
SERVER_IP="172.245.62.112"
SERVER_USER="root"
SERVER_PASSWORD="pbf05SV7l90XurFQ9S"

echo "🔍 测试与服务器 $SERVER_IP 的连接..."

# 测试SSH连接
echo "📡 测试SSH连接..."
if sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 $SERVER_USER@$SERVER_IP "echo 'SSH连接成功'" 2>/dev/null; then
    echo "✅ SSH连接正常"
else
    echo "❌ SSH连接失败"
    exit 1
fi

# 测试Docker是否安装
echo "🐳 检查Docker安装..."
if sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "docker --version" 2>/dev/null; then
    echo "✅ Docker已安装"
else
    echo "❌ Docker未安装或无法访问"
    exit 1
fi

# 检查端口占用
echo "🔌 检查8100端口..."
if sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "netstat -tlnp | grep :8100" 2>/dev/null; then
    echo "⚠️  8100端口已被占用"
else
    echo "✅ 8100端口可用"
fi

echo "�� 连接测试完成！可以开始部署了。" 