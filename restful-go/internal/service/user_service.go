package service

import (
	"restful-go/internal/global"
	"restful-go/internal/models"
	"restful-go/internal/schema"
	"restful-go/pkg/logger"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"go.uber.org/zap"
)

type userService struct{}

func NewUserService() *userService {
	return &userService{}
}

var UserService = NewUserService()

// Register 用户注册
func (s *userService) Register(req *schema.RegisterRequest) error {
	user := models.User{
		Username: req.Username,
		Password: req.Password,
		Email:    req.Email,
	}

	result := global.DB.Create(&user)
	return result.Error
}

// Login 用户登录
func (s *userService) Login(req *schema.LoginRequest) (string, error) {
	var user models.User
	result := global.DB.Where("username = ?", req.Username).First(&user)
	if result.Error != nil {
		logger.Error("无效用户名", zap.String("username", req.Username), zap.Error(result.Error))
		return "", result.Error
	}

	if !user.ValidatePassword(req.Password) {
		return "", nil
	}

	// 生成 JWT token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": user.ID,
		"exp":     time.Now().Add(time.Second * time.Duration(global.AppConfig.JWT.Expiration)).Unix(),
	})

	return token.SignedString([]byte(global.AppConfig.JWT.Secret))
}

// GetUserByID 根据ID获取用户信息
func (s *userService) GetUserByID(id interface{}) (models.User, error) {
	var user models.User
	result := global.DB.First(&user, id)
	return user, result.Error
}

// UpdateUser 更新用户信息
func (s *userService) UpdateUser(id interface{}, updateData *schema.UpdateUserRequest) (models.User, error) {
	var user models.User
	user, err := s.GetUserByID(id)
	if err != nil {
		return user, err
	}
	user.Email = updateData.Email
	err = global.DB.Save(&user).Error
	return user, err
}
