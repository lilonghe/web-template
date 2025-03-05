package logger

import (
	"io"
	"time"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type ginWriter struct {
	logger *zap.Logger
}

func (w *ginWriter) Write(p []byte) (n int, err error) {
	w.logger.Info(string(p), zap.String("source", "gin"))
	return len(p), nil
}

// GetGinWriter 返回一个实现了 io.Writer 接口的写入器
// 用于将 Gin 的日志输出重定向到 Zap logger
func GetGinWriter() io.Writer {
	return &ginWriter{
		logger: Logger,
	}
}

// LoggerMiddleware 返回一个 Gin 的日志中间件
func LoggerMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 开始时间
		start := time.Now()

		// 处理请求
		c.Next()

		// 结束时间
		end := time.Now()
		// 执行时间
		latency := end.Sub(start)

		// 请求方法
		method := c.Request.Method
		// 请求路由
		path := c.Request.URL.Path
		// 状态码
		statusCode := c.Writer.Status()
		// 客户端 IP
		clientIP := c.ClientIP()
		// Agent
		agent := c.Request.UserAgent()

		// 日志格式
		Info("access",
			zap.String("method", method),
			zap.String("path", path),
			zap.Int("status", statusCode),
			zap.String("ip", clientIP),
			zap.Duration("latency", latency),
			zap.String("user_agent", agent),
		)
	}
}
