#!/bin/bash

BACKUP_DIR="./backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

echo "💾 Backing up database..."

docker-compose exec -T db pg_dump -U postgres cammarket > $BACKUP_DIR/backup_$TIMESTAMP.sql

echo "✅ Backup complete: $BACKUP_DIR/backup_$TIMESTAMP.sql"
