#!/bin/bash

DOMAIN="tmc.supahuman.site"
EMAIL="admin@supahuman.site"

echo "🔒 Setting up SSL certificate for $DOMAIN"

# Create directories
mkdir -p certbot/conf
mkdir -p certbot/www

if [ -n "$(docker ps -a --format '{{.Names}}' | grep -E '^certbot$|^zen_agnesi$')" ]; then
    echo "🧹 Cleaning up conflicting containers..."
    docker rm -f certbot 2>/dev/null || true
    docker rm -f zen_agnesi 2>/dev/null || true
    sleep 2
fi

echo "🔓 Freeing port 80..."
sudo lsof -ti:80 | xargs kill -9 2>/dev/null || true
sleep 1

# Run certbot in standalone mode
docker run -it --rm \
  -v ./certbot/conf:/etc/letsencrypt \
  -v ./certbot/www:/var/www/certbot \
  -p 80:80 \
  certbot/certbot certonly \
  --standalone \
  -d $DOMAIN \
  -d www.$DOMAIN \
  -m $EMAIL \
  --agree-tos \
  --non-interactive

echo "✅ SSL certificate installed!"
echo "📝 Your certificates are in: ./certbot/conf/live/$DOMAIN/"
