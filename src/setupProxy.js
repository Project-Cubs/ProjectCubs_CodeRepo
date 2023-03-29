const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use('/api', createProxyMiddleware(
        {
            target: 'https://krdict.korean.go.kr',
            changeOrigin: true,
            secure: false
        }
    ));
};
