package models

import (
	"time"
)

type Config struct {
	ID        uint      `json:"id"`
	Type      string    `json:"type"`
	Key       string    `json:"key"`
	Value     string    `json:"value"`
	Desc      string    `json:"desc"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
