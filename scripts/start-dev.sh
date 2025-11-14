#!/bin/bash

set -e

echo "🚀 Starting CamMarket+ Development Environment"

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ .env file not found!"
    echo "Please run: ./scripts/init.sh first"
    exit 1
fi

# Build if needed
echo "📦 Building Docker images..."
docker-compose build

# Start services
echo "🏃 Starting services..."
docker-compose up -d

# Wait for database
echo "⏳ Waiting for database..."
sleep 5

# Run migrations
echo "📊 Running migrations..."
docker-compose exec -T backend python manage.py migrate

# Create cache table
echo "💾 Setting up cache..."
docker-compose exec -T backend python manage.py createcachetable 2>/dev/null || true

echo "✅ Development environment ready!"
echo ""
echo "📍 Access points:"
echo "  Backend API:  http://localhost:8000"
echo "  Admin Panel:  http://localhost:8000/admin"
echo "  Frontend:     http://localhost:3000"
echo "  Nginx:        http://localhost"
echo ""
echo "👤 To create an admin user:"
echo "  docker-compose exec backend python manage.py createsuperuser"
echo ""
