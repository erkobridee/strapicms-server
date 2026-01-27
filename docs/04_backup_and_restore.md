🔙 [README.md](../README.md)

# Project Backup and Restore

## Strapi CLI

### Data export

- [Data export | Strapi Docs](https://docs.strapi.io/cms/data-management/export)

CLI example

```sh
npm run strapi export -- --no-encrypt
```

### Data Import

- [Data import | Strapi Docs](https://docs.strapi.io/cms/data-management/import)

CLI example

```sh
npm run strapi import -- -f /path/to/my/file/backup.tar.gz
```

## PostgreSQL

- [How to Backup a PostgreSQL Database in Docker: Step-by-Step Guide | DEV Community](https://dev.to/mdarifulhaque/how-to-backup-a-postgresql-database-in-docker-step-by-step-guide-cp2)

- [Dump & Restore PostgreSQL database in a Docker | Peter's Notes](https://petersnotes.com/posts/dump--restore-postgresql-database-in-a-docker/)

## Export

Run pg_dump inside the PostgreSQL container

```sh
docker exec -t strapicms-database-1 pg_dump -U $DATABASE_USERNAME $DATABASE_NAME > database/backup/export.sql
```

## Restore

Restore the database

```sh
cat database/backup/export.sql | docker exec -i strapicms-database-1 psql -U $DATABASE_USERNAME -d $DATABASE_NAME
```
