# NestJS Estudos

Para criar um novo projeto em NestJS, utiliza-se o seguinte comando:

```bash
nest new project-name
```

Esse comando gera automaticamente toda a estrutura inicial do projeto, com os arquivos organizados de forma modular. Cada arquivo possui uma responsabilidade bem definida por padrão, seguindo os princípios de arquitetura do NestJS.


O fluxo principal da aplicação segue a seguinte ordem:

```
main.ts → module.ts → controller.ts → service.ts
```

------

## main.ts

O `main.ts` é o arquivo **raiz da aplicação**. Ele é responsável por inicializar o projeto NestJS.

Nesse arquivo são definidas configurações globais, como:

- qual módulo principal será utilizado;
- a porta onde a aplicação irá rodar;
- middlewares e configurações iniciais do servidor.

------

## module.ts

O `module.ts` é o **módulo principal** da aplicação. Ele é responsável por organizar a estrutura do sistema.

Nesse arquivo são definidos:

- quais **controllers** fazem parte do módulo;
- quais **services** serão utilizados;
- quais outros módulos o NestJS deve reconhecer.


------

## controller.ts

O `controller.ts` é responsável por **controlar as requisições HTTP** da aplicação.

Ele define as rotas (endpoints) e recebe as requisições do cliente, encaminhando os dados para o service responsável pelo processamento.


------

## service.ts

O `service.ts` é onde fica a **regra de negócio** da aplicação.

Toda a lógica do sistema deve ser implementada aqui, como:

- cálculos;
- validações;
- acesso ao banco de dados;
- processamento de dados.

O controller apenas chama os métodos do service, mantendo a aplicação organizada e seguindo o princípio de separação de responsabilidades.




# CRUD