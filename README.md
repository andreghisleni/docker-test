antes de rodar os as aplicações rode os seguintes comandos:

`
  cd test-docker-to-pc-request;  yarn
`

e voltando para a pasta raiz

`
  cd test-docker-to-pc-request-backend-out-docker;  yarn
`

e por fim, na pasta `test-docker-to-pc-request-backend-out-docker` rodamos `yarn start`

e na pasta `test-docker-to-pc-request` rodamos `docker-compose up --force-recreate --build` 

e para testar podemos acessar: `http://localhost:3000/api/:texto-aleatório` que se estiver tudo funcionando, no terminal onde estiver rodando a aplicação do `test-docker-to-pc-request-backend-out-docker` é para dar um log com o valor enviado