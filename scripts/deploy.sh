#!/bin/bash

echo "🚀 Deploying CamMarket+ to Production"

# Build images
docker-compose build --no-cache

# Start services
docker-compose up -d

# Run migrations
docker-compose exec -T backend python manage.py migrate

# Create superuser (optional)
echo "💡 Run this manually to create admin user:"
echo "docker-compose exec backend python manage.py createsuperuser"

# Show logs
docker-compose logs -f
