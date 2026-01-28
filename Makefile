# https://makefiletutorial.com/

# Get Environment Variables From a File into Makefile
# https://dev.to/serhatteker/get-environment-variables-from-a-file-into-makefile-2m5l

# defining a reusable code on makefile
# https://www.perplexity.ai/search/defining-a-reusable-code-on-ma-9VJODDcZQLq1PsZ8wBEnqA

#-------------------------------------------------------------------------------

default: setup

#-------------------------------------------------------------------------------

# load the dotenv file
-include .env

print-env-vars:
	@echo "Database"
	@echo "  name: $(DATABASE_NAME)"
	@echo "  username: $(DATABASE_USERNAME)"
	@echo "  password: $(DATABASE_PASSWORD)"

#-------------------------------------------------------------------------------


define docker_check_service
	@if [ "$(shell docker compose ps -q $(1))" != "" ]; then\
		echo "✅ The $(1) is running!!!";\
	else\
		echo "❌ The $(1) is not running...";\
	fi
endef

docker-check-db:
	$(call docker_check_service,database)

#---

docker-up:
	@echo ""

	@if [ "$(shell docker compose ps -q database)" != "" ]; then\
		echo "The Docker containers services are running.";\
	else\
		docker compose up -d;\
	fi

	@echo ""

docker-status: docker-up
	@docker compose ps -a --format "#{{.State}}# {{.Service}}" | sed -e 's/#running#/✅/' | sed -r 's/#[a-z]+#/❌/'

docker-check: docker-up
	@docker compose ps --format "{{.Service}} {{.State}}"

docker-down:
	@docker compose down

#-------------------------------------------------------------------------------

define check_dir
	@if [ -d $(1) ]; then\
		echo "$(1)/ is defined";\
	else\
	 mkdir $(1);\
	 echo "$(1)/ created";\
	fi
endef

check-dir-backups:
	$(call check_dir,backups)

setup-base-dirs:
	@echo "Setup directories"
	@echo ""
	$(call check_dir,backups)
	@echo ""

#-------------------------------------------------------------------------------

DOCKER_DB_CONTAINER_NAME := strapicms-database-1
DB_BACKUP_FILE := backups/database.sql

pg-backup: docker-up check-dir-backups
	docker exec -t $(DOCKER_DB_CONTAINER_NAME) pg_dump -U $(DATABASE_USERNAME) $(DATABASE_NAME) --clean > $(DB_BACKUP_FILE)

pg-restore: docker-up
	@if [ -f "$(DB_BACKUP_FILE)" ]; then\
		echo "Restoring the backup...\n";\
		cat $(DB_BACKUP_FILE) | docker exec -i $(DOCKER_DB_CONTAINER_NAME) psql -U $(DATABASE_USERNAME) -d $(DATABASE_NAME);\
		echo "\nDatabase restored.";\
	else\
		echo "There is no database backup available.";\
	fi

	@echo ""

#-------------------------------------------------------------------------------

setup-nodejs-deps:
	@echo "Installing the Node.js dependencies..."
	@npm i

setup: setup-base-dirs pg-restore setup-nodejs-deps