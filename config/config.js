const config = {
    // 这个ip是AWS的弹性IP，分配后可固定，防止因为重启实例而变更ip；这个端口需要和后端服务器的端口保持一致
    // 因此如果没有使用云主机而是用本地计算机测试，需改回localhost
    BASE_URL: 'http://127.0.0.1:8110'
}

export default config