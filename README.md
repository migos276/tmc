# CamMarket+ - Plateforme Multi-services Camerounaise

Infrastructure Docker complète pour l'application CamMarket+ avec Django, React, PostgreSQL, Redis et Nginx.

## 🚀 Démarrage rapide

### Prérequis
- Docker & Docker Compose
- Git
- Domain name: tmc.supahuman.site

### Installation

1. **Clone le repository**
   \`\`\`bash
   git clone <repo-url>
   cd cammarket
   \`\`\`

2. **Initialize le projet**
   \`\`\`bash
   chmod +x scripts/*.sh
   ./scripts/init.sh
   \`\`\`

3. **Configure les variables d'environnement**
   \`\`\`bash
   cp .env.example .env
   # Edit .env with your settings
   \`\`\`

4. **Démarre les services**
   \`\`\`bash
   docker-compose up -d
   \`\`\`

5. **Crée l'utilisateur admin**
   \`\`\`bash
   docker-compose exec backend python manage.py createsuperuser
   \`\`\`

6. **Setup SSL (production)**
   \`\`\`bash
   ./scripts/setup-ssl.sh
   \`\`\`

## 📋 Services

- **Backend**: Django 4.2 + DRF @ http://localhost:8000
- **Frontend**: React 18 @ http://localhost:3000
- **Database**: PostgreSQL 15
- **Cache**: Redis 7
- **Reverse Proxy**: Nginx
- **Domain**: https://tmc.supahuman.site

## 🛠️ Commands

\`\`\`bash
# View logs
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f nginx

# Database migrations
docker-compose exec backend python manage.py makemigrations
docker-compose exec backend python manage.py migrate

# Create superuser
docker-compose exec backend python manage.py createsuperuser

# Backup database
./scripts/backup.sh

# Restore database
./scripts/restore.sh <backup_file>

# Stop services
docker-compose down

# Remove all data
docker-compose down -v
\`\`\`

## 📚 Architecture

\`\`\`
cammarket/
├── backend/               # Django application
│   ├── config/           # Settings, URLs, WSGI
│   ├── apps/             # Django apps (users, market, jobs, etc.)
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/             # React application
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── nginx/                # Nginx configuration
│   ├── nginx.conf
│   └── conf.d/default.conf
├── scripts/              # Deployment scripts
├── docker-compose.yml    # Local development
├── docker-compose.prod.yml # Production
└── .env.example
\`\`\`

## 🔒 SSL/HTTPS

Certificats automatiques via Let's Encrypt:

\`\`\`bash
./scripts/setup-ssl.sh
\`\`\`

## 🚀 Production Deployment

\`\`\`bash
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

## 📝 Modules

- **Marché**: Vente d'électronique et vêtements
- **Emplois**: Offres d'emploi et candidatures
- **Contenus Rares**: Vidéos, livres, applications
- **Horoscope**: Prédictions quotidiennes
- **Groupes**: Commerce privé entre utilisateurs
- **Paiements**: Intégration Lygos

## 💳 Paiements

Configuration Lygos dans .env:
\`\`\`
LYGOS_API_KEY=your-api-key
\`\`\`

## 📞 Support

Pour les problèmes, vérifiez les logs:
\`\`\`bash
docker-compose logs
