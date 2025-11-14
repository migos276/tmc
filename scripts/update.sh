#!/bin/bash

echo "🔄 Updating CamMarket+ to latest version"

# Pull latest code
echo "Pulling latest changes..."
git pull

# Build images
echo "Building updated images..."
docker-compose build

# Stop old containers
echo "Stopping old services..."
docker-compose down

# Start new containers
echo "Starting updated services..."
docker-compose up -d

# Run migrations
echo "Running migrations..."
docker-compose exec -T backend python manage.py migrate

# Collect static files
echo "Collecting static files..."
docker-compose exec -T backend python manage.py collectstatic --noinput

echo "✅ Update complete!"
