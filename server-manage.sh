#!/bin/bash

# 服务器端管理脚本
# 使用方法: ./server-manage.sh [start|stop|restart|status|logs|update]

CONTAINER_NAME="qrwebui-app"
IMAGE_NAME="qrwebui"
PORT="8100"

case "$1" in
    start)
        echo "🚀 启动 QRWebUI 应用..."
        docker run -d \
            --name $CONTAINER_NAME \
            --restart unless-stopped \
            -p $PORT:$PORT \
            $IMAGE_NAME
        echo "✅ 应用已启动"
        ;;
    stop)
        echo "🛑 停止 QRWebUI 应用..."
        docker stop $CONTAINER_NAME
        echo "✅ 应用已停止"
        ;;
    restart)
        echo "🔄 重启 QRWebUI 应用..."
        docker restart $CONTAINER_NAME
        echo "✅ 应用已重启"
        ;;
    status)
        echo "📊 应用状态:"
        docker ps -a | grep $CONTAINER_NAME
        ;;
    logs)
        echo "📝 应用日志:"
        docker logs -f $CONTAINER_NAME
        ;;
    update)
        echo "🔄 更新应用..."
        docker stop $CONTAINER_NAME
        docker rm $CONTAINER_NAME
        docker load < /tmp/qrwebui.tar
        docker run -d \
            --name $CONTAINER_NAME \
            --restart unless-stopped \
            -p $PORT:$PORT \
            $IMAGE_NAME
        echo "✅ 应用已更新"
        ;;
    clean)
        echo "🧹 清理未使用的Docker资源..."
        docker system prune -f
        echo "✅ 清理完成"
        ;;
    *)
        echo "使用方法: $0 {start|stop|restart|status|logs|update|clean}"
        echo ""
        echo "命令说明:"
        echo "  start   - 启动应用"
        echo "  stop    - 停止应用"
        echo "  restart - 重启应用"
        echo "  status  - 查看应用状态"
        echo "  logs    - 查看应用日志"
        echo "  update  - 更新应用"
        echo "  clean   - 清理Docker资源"
        exit 1
        ;;
esac 