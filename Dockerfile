# Define o diretório de trabalho no container
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package.json yarn.lock ./

# Instala as dependências
RUN yarn install

# Copia o restante do código do projeto
COPY . .

# Compila o TypeScript para JavaScript
RUN yarn tsc

# Define o ambiente como produção
ENV NODE_ENV=production

# Copia apenas os arquivos compilados para a imagem final
WORKDIR /usr/src/app
COPY ./dist ./dist

# Expõe a porta 3000
EXPOSE 3000

# Comando de execução
CMD ["node", "dist/index.js"]