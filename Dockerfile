# Usando uma imagem oficial do Node.js como base
FROM node:18

# Diretório de trabalho no container
WORKDIR /usr/src/app

# Copia o arquivo package.json e yarn.lock para instalar as dependências
COPY package.json yarn.lock ./

# Instala as dependências
RUN yarn install

# Copia o restante do código para o container
COPY . .

# Exponha a porta que a aplicação vai usar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["yarn", "start"]