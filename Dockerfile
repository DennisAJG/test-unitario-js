# Use uma imagem base com Node.js
FROM node:16

# Define o diretório de trabalho no container
WORKDIR /usr/src/app

# Copia o código da aplicação para o container
COPY . .

# Instala as dependências
RUN yarn install
RUN yarn typeorm migration:run


# Roda os testes
RUN yarn test

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]