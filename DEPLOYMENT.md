# QRWebUI 一键部署指南

## 概述

本项目提供了一键部署脚本，可以将 QRWebUI 应用部署到远程服务器上，使用 Docker 容器化部署。

## 前置要求

### 本地环境
- Docker Desktop 已安装并运行
- Node.js 18+ 
- sshpass 工具（用于密码认证）

### 服务器环境
- Docker 已安装
- 8100 端口可访问

## 安装 sshpass

### macOS
```bash
brew install sshpass
```

### Ubuntu/Debian
```bash
sudo apt-get install sshpass
```

### CentOS/RHEL
```bash
sudo yum install sshpass
```

## 部署步骤

### 1. 一键部署
```bash
./deploy.sh
```

这个脚本会自动执行以下操作：
1. 构建 Docker 镜像
2. 保存镜像为 tar 文件
3. 传输镜像到服务器 (172.245.62.112)
4. 在服务器上加载镜像并启动容器
5. 清理临时文件

### 2. 验证部署
部署完成后，访问以下地址验证应用是否正常运行：
```
http://172.245.62.112:8100
```

## 服务器管理

### 查看应用状态
```bash
sshpass -p 'pbf05SV7l90XurFQ9S' ssh root@172.245.62.112 'docker ps | grep qrwebui-app'
```

### 查看应用日志
```bash
sshpass -p 'pbf05SV7l90XurFQ9S' ssh root@172.245.62.112 'docker logs qrwebui-app'
```

### 停止应用
```bash
sshpass -p 'pbf05SV7l90XurFQ9S' ssh root@172.245.62.112 'docker stop qrwebui-app'
```

### 重启应用
```bash
sshpass -p 'pbf05SV7l90XurFQ9S' ssh root@172.245.62.112 'docker restart qrwebui-app'
```

### 更新应用
```bash
# 重新运行部署脚本
./deploy.sh
```

## 故障排除

### 1. 构建失败
- 检查 Docker 是否正在运行
- 检查网络连接
- 查看构建日志

### 2. 传输失败
- 检查服务器 IP 地址是否正确
- 检查服务器密码是否正确
- 检查网络连接

### 3. 应用无法访问
- 检查 8100 端口是否开放
- 检查防火墙设置
- 查看容器日志

### 4. 容器启动失败
```bash
# 查看详细错误信息
sshpass -p 'pbf05SV7l90XurFQ9S' ssh root@172.245.62.112 'docker logs qrwebui-app'
```

## 文件说明

- `Dockerfile` - Docker 镜像构建文件
- `deploy.sh` - 一键部署脚本
- `server-manage.sh` - 服务器端管理脚本
- `.dockerignore` - Docker 构建忽略文件
- `nginx.conf` - Nginx 配置文件（备用）

## 安全注意事项

1. 生产环境建议使用 SSH 密钥认证而不是密码
2. 定期更新应用和依赖
3. 监控服务器资源使用情况
4. 配置防火墙规则

## 联系支持

如果遇到问题，请检查：
1. 服务器 Docker 服务状态
2. 网络连接
3. 端口占用情况
4. 容器日志 