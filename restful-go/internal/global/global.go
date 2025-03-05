package global

import (
	"restful-go/internal/models"
	"restful-go/pkg/logger"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

// InitDB 初始化数据库连接
func InitDB() {
	db, err := gorm.Open(mysql.Open(AppConfig.Database.DSN), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// 自动迁移数据库结构
	err = db.AutoMigrate(&models.User{}, &models.Config{})
	if err != nil {
		panic(err)
	}

	DB = db
}

func Init() {
	err := LoadConfig()
	if err != nil {
		panic(err)
	}

	// 初始化日志
	logger.InitLogger(
		AppConfig.Log.Path,
		AppConfig.Log.Level,
		AppConfig.Log.MaxSize,
		AppConfig.Log.MaxBackups,
		AppConfig.Log.MaxAge,
		AppConfig.Log.Compress,
	)

	InitDB()
}
