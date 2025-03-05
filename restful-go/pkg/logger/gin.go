package logger

import (
	"io"

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
