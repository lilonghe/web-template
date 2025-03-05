package middleware

import (
	"restful-go/pkg/logger"
	"restful-go/pkg/response"
	"runtime/debug"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// ErrorHandler 全局错误处理中间件
func ErrorHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 使用 defer 确保在 panic 时也能捕获错误
		defer func() {
			if err := recover(); err != nil {
				// 获取错误堆栈
				stackTrace := string(debug.Stack())

				// 记录错误日志
				logger.Error("panic",
					zap.Any("error", err),
					zap.String("stack", stackTrace),
					zap.String("path", c.Request.URL.Path),
					zap.String("method", c.Request.Method),
				)

				// 返回 500 错误响应
				response.Error(c, "系统内部错误")
				c.Abort()
			}
		}()

		c.Next()
	}
}
