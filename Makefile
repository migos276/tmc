.PHONY: help build up down logs migrate shell test clean backup restore ssl deploy init

help:
	@echo "CamMarket+ Management Commands"
	@echo "=============================="
	@echo "make init        - Initialize project"
	@echo "make build       - Build Docker images"
	@echo "make up          - Start all services"
	@echo "make down        - Stop all services"
	@echo "make logs        - View service logs"
	@echo "make migrate     - Run database migrations"
	@echo "make shell       - Access Django shell"
	@echo "make test        - Run tests"
	@echo "make clean       - Remove containers and volumes"
	@echo "make backup      - Backup database"
	@echo "make restore     - Restore database"
	@echo "make ssl         - Setup SSL certificate"
	@echo "make deploy      - Deploy to production"

init:
	@chmod +x scripts/*.sh
	./scripts/init.sh

build:
	docker-compose build

up: build
	@chmod +x scripts/*.sh
	@./scripts/stop-all.sh 2>/dev/null || true
	./scripts/start-dev.sh

down:
	./scripts/stop.sh

logs:
	./scripts/logs.sh

migrate:
	docker-compose exec backend python manage.py migrate

shell:
	docker-compose exec backend python manage.py shell

test:
	docker-compose exec backend python manage.py test

clean:
	./scripts/clean.sh

backup:
	./scripts/backup.sh

restore:
	@read -p "Enter backup file path: " backup_file; \
	./scripts/restore.sh $$backup_file

ssl:
	./scripts/setup-ssl.sh

deploy:
	./scripts/deploy.sh

createsuperuser:
	docker-compose exec backend python manage.py createsuperuser

collectstatic:
	docker-compose exec backend python manage.py collectstatic --noinput

refresh-db:
	docker-compose down -v
	docker-compose up -d db
	sleep 5
	docker-compose exec -T backend python manage.py migrate
	@echo "✅ Database refreshed!"

install-deps:
	docker-compose exec backend pip install -r requirements.txt
	docker-compose exec frontend npm install
