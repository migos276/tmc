#!/bin/bash

echo "🚀 CamMarket+ Docker Setup"

# Create necessary directories
mkdir -p nginx/conf.d
mkdir -p certbot/conf
mkdir -p certbot/www
mkdir -p backend/apps/users
mkdir -p backend/apps/market
mkdir -p backend/apps/jobs
mkdir -p backend/apps/content
mkdir -p backend/apps/horoscope
mkdir -p backend/apps/groups
mkdir -p backend/apps/payments
mkdir -p backend/apps/admin_panel

# Create __init__.py files
touch backend/apps/__init__.py
touch backend/apps/users/__init__.py
touch backend/apps/market/__init__.py
touch backend/apps/jobs/__init__.py
touch backend/apps/content/__init__.py
touch backend/apps/horoscope/__init__.py
touch backend/apps/groups/__init__.py
touch backend/apps/payments/__init__.py
touch backend/apps/admin_panel/__init__.py

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ .env created from .env.example - Please configure it!"
fi

echo "✅ Initialization complete!"
echo "📝 Next steps:"
echo "1. Edit .env with your configuration"
echo "2. Run: docker-compose up -d"
echo "3. Run: docker-compose exec backend python manage.py createsuperuser"
echo "4. Setup SSL with certbot"
