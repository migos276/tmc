#!/bin/bash

echo "🧹 Cleaning up CamMarket+ containers and volumes..."

docker-compose down -v

echo "✅ Cleanup complete"
echo "⚠️  All data has been removed!"
