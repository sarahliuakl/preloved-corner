.PHONY: install run dev test lint format clean migrate upgrade downgrade

# Install dependencies
install:
	poetry install

# Run the application
run:
	poetry run uvicorn app.main:app --host 0.0.0.0 --port 8000

# Run in development mode with auto-reload
dev:
	poetry run uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

# Run tests
test:
	poetry run pytest

# Run tests with coverage
test-cov:
	poetry run pytest --cov=app --cov-report=html

# Lint code
lint:
	poetry run ruff check .
	poetry run black --check .

# Format code
format:
	poetry run ruff check --fix .
	poetry run black .

# Clean cache and temporary files
clean:
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	find . -type f -name "*.pyo" -delete
	find . -type f -name "*.pyd" -delete
	find . -type f -name ".coverage" -delete
	find . -type d -name "*.egg-info" -exec rm -rf {} +

# Database migrations
migrate:
	poetry run alembic revision --autogenerate -m "$(msg)"

# Apply migrations
upgrade:
	poetry run alembic upgrade head

# Rollback migrations
downgrade:
	poetry run alembic downgrade -1

# Initialize database
init-db:
	poetry run alembic upgrade head