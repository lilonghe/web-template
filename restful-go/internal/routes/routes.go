package routes

import (
	"net/http"
	"restful-go/internal/middleware"
	"restful-go/pkg/response"

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
	configGroup.Use(middleware.AuthRequired())
	{
		configGroup.GET("", listConfigs)            // 获取配置列表
		configGroup.GET("/:type", getConfigsByType) // 根据类型获取配置
		configGroup.POST("", createConfig)          // 创建配置
		configGroup.PUT("/:id", updateConfig)       // 更新配置
		configGroup.DELETE("/:id", deleteConfig)    // 删除配置
	}

	// 添加 404 处理
	r.NoRoute(func(c *gin.Context) {
		response.ErrorWithCode(c, "接口不存在", http.StatusNotFound)
	})
}
