package routes

import (
	"net/http"

	"restful-go/internal/models"
	"restful-go/internal/service"
	"restful-go/pkg/response"

	"github.com/gin-gonic/gin"
)

// listConfigs 获取配置列表
func listConfigs(c *gin.Context) {
	configs, err := service.ConfigService.GetAllConfigs()
	if err != nil {
		response.Error(c, "获取配置列表失败")
		return
	}

	response.Success(c, configs)
}

// getConfigsByType 根据类型获取配置
func getConfigsByType(c *gin.Context) {
	configType := c.Param("type")

	configs, err := service.ConfigService.GetConfigsByType(configType)
	if err != nil {
		response.Error(c, "获取配置失败")
		return
	}

	response.Success(c, configs)
}

// createConfig 创建配置
func createConfig(c *gin.Context) {
	var config models.Config
	if err := c.ShouldBindJSON(&config); err != nil {
		response.Error(c, "无效的请求参数")
		return
	}

	if err := service.ConfigService.CreateConfig(&config); err != nil {
		response.Error(c, "创建配置失败")
		return
	}

	c.Status(http.StatusCreated)
	response.Success(c, config)
}

// updateConfig 更新配置
func updateConfig(c *gin.Context) {
	configID := c.Param("id")

	config, err := service.ConfigService.GetConfigByID(configID)
	if err != nil {
		response.Error(c, "配置不存在")
		return
	}

	if err := c.ShouldBindJSON(&config); err != nil {
		response.Error(c, "无效的请求参数")
		return
	}

	if err := service.ConfigService.UpdateConfig(&config); err != nil {
		response.Error(c, "更新配置失败")
		return
	}

	response.Success(c, config)
}

// deleteConfig 删除配置
func deleteConfig(c *gin.Context) {
	configID := c.Param("id")

	if err := service.ConfigService.DeleteConfig(configID); err != nil {
		response.ErrorWithCode(c, "删除配置失败", http.StatusInternalServerError)
		return
	}

	response.Success(c, nil)
}
