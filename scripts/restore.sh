#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: ./scripts/restore.sh <backup_file>"
    exit 1
fi

echo "📥 Restoring database from $1"

docker-compose exec -T db psql -U postgres cammarket < $1

echo "✅ Restore complete!"
