package response

import "github.com/gin-gonic/gin"

// Response 统一API响应结构
type Response struct {
	Code    int         `json:"code"`
	Message string      `json:"message,omitempty"`
	Data    interface{} `json:"data,omitempty"`
}

// Success 返回成功响应
func Success(c *gin.Context, data interface{}) {
	c.JSON(200, Response{
		Code: 200,
		Data: data,
	})
}

// Error 返回错误响应
func Error(c *gin.Context, message string) {
	c.JSON(400, Response{
		Code:    400,
		Message: message,
	})
}

func ErrorWithCode(c *gin.Context, message string, code int) {
	c.JSON(code, Response{
		Code:    code,
		Message: message,
	})
}
