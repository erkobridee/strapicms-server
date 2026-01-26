# Get Environment Variables From a File into Makefile
# https://dev.to/serhatteker/get-environment-variables-from-a-file-into-makefile-2m5l

# load the dotenv file
-include .env


print-env-vars:
	@echo "Database"
	@echo "  name: $(DATABASE_NAME)"
	@echo "  username: $(DATABASE_USERNAME)"
	@echo "  password: $(DATABASE_PASSWORD)"