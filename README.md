# Desafio de Login

## Descrição
Desenvolver uma aplicação Dockerizada que realize um login com autenticação de usuário utilizando o keycloak.

## Desenvolvimento
### Docker
- Criar um arquivo `docker-compose.yml` com as configurações base.
- Criar um arquivo `docker-compose.dev.yml` com as configurações de desenvolvimento.
- Criar um arquivo `docker-compose.prod.yml` com as configurações de produção.
- Criar um Dockerfile para o Frontend com duas etapas:
  - Build do React
  - Servidor Nginx
- Configurar o Dockerfile para renomear o arquivo `dev.js` ou `prod.js` para `env.js` na etapa de build
- Injetar o argumento de build `ENV_NAME` no Docker Compose.

### Keycloak
- Configurar o Keycloak para atualizar os arquivos locais da máquina do desenvolvedor
- Se quiser, pode subir uma instancia de postgres para o Keycloak no docker-compose de PROD

### Aplicação
- Criar um AuthContext
  - Funções `login` e `logout`
  - Usuário | undefined
- Criar uma rota aberta e duas fechadas

## Entrega
- [ ] Docker Compose BASE
- [ ] Docker Compose DEV
- [ ] Docker Compose PROD
- [v] Variáveis de ambiente
- [v] Dockerfile com Build do React e Servidor Nginx
- [ ] Utilização do react-oidc-ts ou @axa-fr/react-oidc
- [ ] AuthContext
- [ ] Rota aberta e duas fechadas