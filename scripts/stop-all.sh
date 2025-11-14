#!/bin/bash

echo "🛑 Stopping all services..."

# Kill any process on port 80 (HTTP)
if lsof -i :80 > /dev/null 2>&1; then
    echo "Killing process on port 80..."
    sudo lsof -ti:80 | xargs kill -9 2>/dev/null || true
fi

# Kill any process on port 443 (HTTPS)
if lsof -i :443 > /dev/null 2>&1; then
    echo "Killing process on port 443..."
    sudo lsof -ti:443 | xargs kill -9 2>/dev/null || true
fi

# Kill any process on port 3000 (Frontend dev)
if lsof -i :3000 > /dev/null 2>&1; then
    echo "Killing process on port 3000..."
    sudo lsof -ti:3000 | xargs kill -9 2>/dev/null || true
fi

# Kill any process on port 8000 (Django)
if lsof -i :8000 > /dev/null 2>&1; then
    echo "Killing process on port 8000..."
    sudo lsof -ti:8000 | xargs kill -9 2>/dev/null || true
fi

# Docker compose down
docker-compose down 2>/dev/null || true

echo "✅ All services stopped"
