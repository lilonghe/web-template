package service

import (
	"restful-go/internal/global"
	"restful-go/internal/models"
)

type configService struct{}

func NewConfigService() *configService {
	return &configService{}
}

var ConfigService = NewConfigService()

// GetAllConfigs 获取所有配置
func (s *configService) GetAllConfigs() ([]models.Config, error) {
	var configs []models.Config
	result := global.DB.Find(&configs)
	return configs, result.Error
}

// GetConfigsByType 根据类型获取配置
func (s *configService) GetConfigsByType(configType string) ([]models.Config, error) {
	var configs []models.Config
	result := global.DB.Where("type = ?", configType).Find(&configs)
	return configs, result.Error
}

// GetConfigByID 根据ID获取配置
func (s *configService) GetConfigByID(id string) (models.Config, error) {
	var config models.Config
	result := global.DB.First(&config, id)
	return config, result.Error
}

// CreateConfig 创建配置
func (s *configService) CreateConfig(config *models.Config) error {
	result := global.DB.Create(config)
	return result.Error
}

// UpdateConfig 更新配置
func (s *configService) UpdateConfig(config *models.Config) error {
	result := global.DB.Save(config)
	return result.Error
}

// DeleteConfig 删除配置
func (s *configService) DeleteConfig(id string) error {
	result := global.DB.Delete(&models.Config{}, id)
	return result.Error
}
