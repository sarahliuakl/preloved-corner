# Preloved Corner / 二手角落

A full-stack second-hand trading platform built with modern technologies.

一个使用现代技术栈构建的全栈二手交易平台。

## Tech Stack / 技术栈

### Frontend / 前端
- **React 18** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for styling
- **shadcn/ui** for UI components
- **Vitest** for testing

### Backend / 后端
- **FastAPI** with async support
- **SQLAlchemy 2.0** with async ORM
- **Alembic** for database migrations
- **Pydantic v2** for data validation
- **Pytest** for testing

### DevOps
- **pnpm** for package management (root)
- **Poetry** for Python dependency management
- **Docker** with multi-stage builds
- **ESLint & Prettier** for frontend linting
- **Ruff & Black** for backend linting
- **Husky + lint-staged** for pre-commit hooks

## Project Structure / 项目结构

```
preloved-corner/
├── apps/
│   ├── frontend/          # React frontend application
│   └── backend/           # FastAPI backend application
├── packages/
│   └── common/            # Shared types and utilities
├── .vscode/               # VS Code configuration
├── docker-compose.yml     # Docker development setup
├── Dockerfile.dev         # Development Dockerfile
└── README.md
```

## Quick Start / 快速开始

### Prerequisites / 前置要求

- **Node.js** 18+ and **pnpm**
- **Python** 3.11+ and **Poetry**
- **Docker** and **Docker Compose** (optional)

### Installation / 安装

1. **Clone the repository / 克隆仓库**
   ```bash
   git clone <repository-url>
   cd preloved-corner
   ```

2. **Install dependencies / 安装依赖**
   ```bash
   # Install frontend dependencies
   pnpm install
   
   # Install backend dependencies
   cd apps/backend
   poetry install
   cd ../..
   ```

3. **Database setup / 数据库设置**
   ```bash
   cd apps/backend
   
   # Initialize Alembic (first time only)
   poetry run alembic revision --autogenerate -m "Initial migration"
   
   # Run migrations
   poetry run alembic upgrade head
   
   # Or use Makefile
   make init-db
   ```

### Development / 开发

#### Option 1: Run services separately / 分别运行服务

**Frontend / 前端:**
```bash
# From project root
pnpm dev
# This runs: pnpm --filter frontend dev
```

**Backend / 后端:**
```bash
cd apps/backend
poetry install && make run
# Or for development with auto-reload:
make dev
```

#### Option 2: Using Docker Compose / 使用 Docker Compose

```bash
# Start both frontend and backend
docker-compose up

# Start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Available Scripts / 可用脚本

#### Frontend / 前端
```bash
cd apps/frontend
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm test         # Run tests
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
```

#### Backend / 后端
```bash
cd apps/backend
make run          # Start production server
make dev          # Start development server with auto-reload
make test         # Run tests
make lint         # Run linting (ruff + black)
make format       # Format code
make migrate      # Create new migration
make upgrade      # Apply migrations
make downgrade    # Rollback migration
```

### Testing / 测试

**Frontend tests / 前端测试:**
```bash
pnpm test
```

**Backend tests / 后端测试:**
```bash
cd apps/backend
make test
# Or directly:
poetry run pytest
```

### API Documentation / API 文档

Once the backend is running, visit:
- **Swagger UI:** http://localhost:8000/docs
- **ReDoc:** http://localhost:8000/redoc

### Database Schema / 数据库架构

The application includes 5 main tables:
- **users** - User accounts and profiles
- **items** - Items for sale
- **orders** - Purchase orders
- **order_items** - Items within orders
- **messages** - User communications

### VS Code Debugging / VS Code 调试

The project includes VS Code launch configurations for:
- Frontend debugging with Vite
- Backend debugging with FastAPI/Uvicorn
- Running tests
- Full-stack debugging (compound configuration)

Press `F5` or use the Debug panel to start debugging.

### Code Quality / 代码质量

The project enforces code quality through:
- **Pre-commit hooks** with husky and lint-staged
- **ESLint + Prettier** for frontend
- **Ruff + Black** for backend
- **Conventional commits** with commitlint

All commits must pass linting checks.

### Environment Variables / 环境变量

Create `.env` files in the backend directory for local configuration:

```bash
# apps/backend/.env
DATABASE_URL=sqlite+aiosqlite:///./preloved_corner.db
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=["http://localhost:3000"]
```

## Contributing / 贡献

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure tests pass and code is properly formatted
5. Submit a pull request

## License / 许可证

This project is licensed under the MIT License.