package routes

import (
	"restful-go/internal/schema"
	"restful-go/internal/service"
	"restful-go/pkg/response"

	"github.com/gin-gonic/gin"
)

// register 用户注册
func register(c *gin.Context) {
	var req schema.RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		response.Error(c, "无效的请求参数")
		return
	}

	if err := service.UserService.Register(&req); err != nil {
		response.Error(c, "用户创建失败")
		return
	}

	response.Success(c, nil)
}

// login 用户登录
func login(c *gin.Context) {
	var req schema.LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		response.Error(c, "无效的请求参数")
		return
	}

	tokenString, err := service.UserService.Login(&req)
	if err != nil || tokenString == "" {
		response.Error(c, "用户名或密码错误")
		return
	}

	response.Success(c, gin.H{"token": tokenString})
}

// getCurrentUser 获取当前用户信息
func getCurrentUser(c *gin.Context) {
	userID, _ := c.Get("user_id")

	user, err := service.UserService.GetUserByID(userID)
	if err != nil {
		response.Error(c, "用户不存在")
		return
	}

	response.Success(c, user)
}

// updateUser 更新用户信息
func updateUser(c *gin.Context) {
	userID, _ := c.Get("user_id")

	var updateData schema.UpdateUserRequest
	if err := c.ShouldBindJSON(&updateData); err != nil {
		response.Error(c, "无效的请求参数")
		return
	}

	user, err := service.UserService.UpdateUser(userID, &updateData)
	if err != nil {
		response.Error(c, "更新用户信息失败")
		return
	}

	response.Success(c, user)
}
