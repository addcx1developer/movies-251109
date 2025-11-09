package repository

import (
	"database/sql"

	"github.com/addcx1developer/movies-251109/internal/models"
)

type DatabaseRepo interface {
	Connection() *sql.DB
	AllMovies() ([]*models.Movie, error)
}
