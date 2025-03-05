package routes

import (
	"restful-go/internal/middleware"

	"github.com/gin-gonic/gin"
)

// SetupRoutes 设置路由
func SetupRoutes(r *gin.Engine) {
	// 用户模块路由组
	userGroup := r.Group("/api/users")
	{
		// 公开路由
		userGroup.POST("/register", register)
		userGroup.POST("/login", login)

		// 需要认证的路由
		auth := userGroup.Group("/")
		auth.Use(middleware.AuthRequired())
		{
			auth.GET("/profile", getCurrentUser)
			auth.PUT("/profile", updateUser)
		}
	}

	// 配置模块路由组
	configGroup := r.Group("/api/configs")
	{
		// 需要认证的路由
		auth := configGroup.Group("/")
		auth.Use(middleware.AuthRequired())
		{
			auth.GET("", listConfigs)            // 获取配置列表
			auth.GET("/:type", getConfigsByType) // 根据类型获取配置
			auth.POST("", createConfig)          // 创建配置
			auth.PUT("/:id", updateConfig)       // 更新配置
			auth.DELETE("/:id", deleteConfig)    // 删除配置
		}
	}
}
