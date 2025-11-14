#!/bin/bash

echo "🏥 Health Check for CamMarket+"
echo "=============================="

# Check Docker status
echo "📦 Docker Status:"
docker ps --filter "label=com.docker.compose.project=cammarket" --format "{{.Names}}: {{.Status}}"

# Check Backend
echo ""
echo "🔙 Backend Health:"
curl -s http://localhost:8000/admin/ > /dev/null && echo "✅ Backend running" || echo "❌ Backend down"

# Check Frontend
echo "🎨 Frontend Health:"
curl -s http://localhost:3000/ > /dev/null && echo "✅ Frontend running" || echo "❌ Frontend down"

# Check Database
echo "🗄️  Database Health:"
docker-compose exec -T db pg_isready > /dev/null && echo "✅ Database running" || echo "❌ Database down"

# Check Redis
echo "💾 Redis Health:"
docker-compose exec -T redis redis-cli ping > /dev/null && echo "✅ Redis running" || echo "❌ Redis down"

echo ""
echo "✅ Health check complete"
