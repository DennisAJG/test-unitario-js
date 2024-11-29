# Variáveis
DOCKER_COMPOSE = docker-compose
DOCKER_COMPOSE_BUILD = $(DOCKER_COMPOSE) build
DOCKER_COMPOSE_UP = $(DOCKER_COMPOSE) up -d
DOCKER_COMPOSE_DOWN = $(DOCKER_COMPOSE) down
RUN_TESTS = docker-compose exec app npm test

# Comandos
build:
	$(DOCKER_COMPOSE_BUILD)

up:
	$(DOCKER_COMPOSE_UP)

down:
	$(DOCKER_COMPOSE_DOWN)

test:
	$(RUN_TESTS)

# Combinação para build, up e testes
build-up-test: build up test