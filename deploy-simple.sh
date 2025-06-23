#!/bin/bash

# 简化版部署脚本 - 使用简化版Dockerfile
# 使用方法: ./deploy-simple.sh

set -e  # 遇到错误立即退出

# 配置变量
SERVER_IP="172.245.62.112"
SERVER_USER="root"
SERVER_PASSWORD="pbf05SV7l90XurFQ9S"
DOCKER_IMAGE_NAME="qrwebui-simple"
CONTAINER_NAME="qrwebui-app"
PORT="8100"

echo "🚀 开始部署 QRWebUI (简化版) 到服务器 $SERVER_IP..."

# 检查是否安装了sshpass
if ! command -v sshpass &> /dev/null; then
    echo "❌ 需要安装 sshpass 来支持密码认证"
    echo "请运行: brew install sshpass (macOS) 或 sudo apt-get install sshpass (Ubuntu)"
    exit 1
fi

# 1. 构建Docker镜像（使用简化版Dockerfile）
echo "📦 构建Docker镜像..."
docker build --platform linux/amd64 -f Dockerfile.simple -t $DOCKER_IMAGE_NAME .

if [ $? -ne 0 ]; then
    echo "❌ Docker镜像构建失败"
    exit 1
fi

echo "✅ Docker镜像构建成功"

# 2. 保存镜像为tar文件
echo "💾 保存Docker镜像..."
docker save $DOCKER_IMAGE_NAME > qrwebui-simple.tar

if [ $? -ne 0 ]; then
    echo "❌ Docker镜像保存失败"
    exit 1
fi

echo "✅ Docker镜像保存成功"

# 3. 传输镜像到服务器
echo "📤 传输镜像到服务器..."
sshpass -p "$SERVER_PASSWORD" scp -o StrictHostKeyChecking=no qrwebui-simple.tar $SERVER_USER@$SERVER_IP:/tmp/

if [ $? -ne 0 ]; then
    echo "❌ 镜像传输失败"
    exit 1
fi

echo "✅ 镜像传输成功"

# 4. 在服务器上部署
echo "🔧 在服务器上部署应用..."
sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP << EOF
    set -e
    
    echo "📥 加载Docker镜像..."
    docker load < /tmp/qrwebui-simple.tar
    
    echo "🛑 停止并删除旧容器（如果存在）..."
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
    
    echo "🚀 启动新容器..."
    docker run -d \
        --name $CONTAINER_NAME \
        --restart unless-stopped \
        -p $PORT:$PORT \
        $DOCKER_IMAGE_NAME
    
    echo "🧹 清理临时文件..."
    rm -f /tmp/qrwebui-simple.tar
    
    echo "📊 检查容器状态..."
    docker ps | grep $CONTAINER_NAME
    
    echo "🌐 应用部署完成！"
    echo "访问地址: http://$SERVER_IP:$PORT"
EOF

if [ $? -ne 0 ]; then
    echo "❌ 服务器部署失败"
    exit 1
fi

# 5. 清理本地临时文件
echo "🧹 清理本地临时文件..."
rm -f qrwebui-simple.tar

echo "✅ 部署完成！"
echo "🌐 应用已成功部署到: http://$SERVER_IP:$PORT"
echo "📝 查看日志: sshpass -p '$SERVER_PASSWORD' ssh $SERVER_USER@$SERVER_IP 'docker logs $CONTAINER_NAME'"
echo "🛑 停止应用: sshpass -p '$SERVER_PASSWORD' ssh $SERVER_USER@$SERVER_IP 'docker stop $CONTAINER_NAME'" 