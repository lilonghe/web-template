package global

import (
	"fmt"

	"github.com/spf13/viper"
)

// Config 全局配置结构体
type Config struct {
	Database struct {
		Driver string
		DSN    string
	} `mapstructure:"database"`

	JWT struct {
		Secret     string `mapstructure:"secret"`
		Expiration int    `mapstructure:"expiration"`
	} `mapstructure:"jwt"`

	Server struct {
		Port int    `mapstructure:"port"`
		Mode string `mapstructure:"mode"`
	} `mapstructure:"server"`

	Log struct {
		Level      string `mapstructure:"level"`
		Path       string `mapstructure:"path"`
		MaxSize    int    `mapstructure:"max_size"`
		MaxBackups int    `mapstructure:"max_backups"`
		MaxAge     int    `mapstructure:"max_age"`
		Compress   bool   `mapstructure:"compress"`
	} `mapstructure:"log"`
}

// AppConfig 全局配置实例
var AppConfig Config

// LoadConfig 加载配置文件
func LoadConfig() error {
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath(".")

	if err := viper.ReadInConfig(); err != nil {
		return fmt.Errorf("读取配置文件失败: %w", err)
	}

	if err := viper.Unmarshal(&AppConfig); err != nil {
		return fmt.Errorf("解析配置文件失败: %w", err)
	}

	return nil
}
