package main

import (
	"io"
	"restful-go/internal/global"
	"restful-go/internal/middleware"
	"restful-go/internal/routes"
	"restful-go/pkg/logger"
	"strconv"

	"github.com/gin-gonic/gin"
)

func main() {
	global.Init()

	// 将 gin 的日志输出重定向到自定义 logger
	gin.DefaultWriter = io.MultiWriter(logger.GetGinWriter())

	// 创建 Gin 实例
	r := gin.New()

	// 使用日志中间件和恢复中间件
	r.Use(logger.LoggerMiddleware())
	r.Use(gin.Recovery())

	// 使用中间件
	r.Use(middleware.CORS())
	r.Use(middleware.ErrorHandler())

	// 注册路由
	routes.SetupRoutes(r)

	// 启动服务器
	r.Run(":" + strconv.Itoa(global.AppConfig.Server.Port))
}
