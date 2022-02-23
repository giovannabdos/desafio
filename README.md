# Desafio front-end

# Instalação

Execute o comando `npm install` para instalar os pacotes necessários.

# Executar o projeto

Execute o comando `npm start` para iniciar o projeto.

# Tabela

Na tabela é possível ver e excluir os usuários da API https://jsonplaceholder.typicode.com.

# Tecnologias e pacotes utilizadas

- React.js
- Typescript
- React Bootstrap
- React Icons

# Funcionalidades

- A tabela por padrão contém 5 colunas (Usuário, Email, Cliente, Perfil de acesso e ações).
- Ao clicar no ícone X, o usuário é deletado da lista.
  ![Alt paisagem](https://media.discordapp.net/attachments/886987574239977512/945760983903764490/unknown.png)

- Ao clicar no ícone dos 3 pontos, um dropdown apararecerá para o usuário controlar as colunas que vão parecer e a quantidade de usuários.

  ![Alt paisagem](https://media.discordapp.net/attachments/886987574239977512/945761087763148870/unknown.png)

  ![Alt paisagem](https://media.discordapp.net/attachments/886987574239977512/945761124975009832/unknown.png)

# Explicação do Código

## useEffect

- O useEffect foi usado juntamente com a variável `padrao` como dependência para que toda vez que a varíavel sofra uma alteração, a lista de usuários seja chamada novamente.

  ![Alt paisagem](https://media.discordapp.net/attachments/886987574239977512/945765552012533791/unknown.png)

## uso do Slice na requisição da API

1. A função `Slice` do javascript foi usada porque a API não proporciona a passagem de parâmetros para limitar a quantidade de usuários, como por exemplo: `?limit=5` ou `?limit=10?`.
2. Com o `Slice` foi possível pegar a quantidade desejada de usuários na lista de acordo com a quantidade de linhas salva na variável `padrao`.

   ![Alt paisagem](https://media.discordapp.net/attachments/886987574239977512/945763572804358184/unknown.png)

## Deletar usuário

1. Quando o usuário clica no ícone X em qualquer linha está sendo passado os dados do usuário para a função de deletar usuário.
2. Com os dados do usuário é possível usar a função `filter` do javascript para retirar o usuário da lista que esteja com o mesmo `ID` do que foi passado ao clicar no ícone.

   ![Alt paisagem](https://media.discordapp.net/attachments/886987574239977512/945764591575642223/unknown.png)

   ![Alt paisagem](https://media.discordapp.net/attachments/886987574239977512/945764592066363423/unknown.png)

## "Dropdown as={NavItem}" e "Dropdown.Toggle as={NavLink}":

1. Foi usado dessa forma por que na documentação do React-Bootstrap em [Dropdown](https://react-bootstrap.github.io/components/dropdowns/) todos os exemplos obtidos lá eram com botões.
2. Entretanto em [Navs - Using Dropdowns](https://react-bootstrap.github.io/components/navs/#using-dropdowns), há um exemplo que ficou melhor para o caso.
3. Com o exemplo implementado, ainda assim não ficou totalmente do jeito que eu queria, pois estava aparecendo do lado do ícone a seta para visualizar o dropdown.
4. Portanto para remover a seta utilizei o CSS conforme a imagem abaixo.

   ![Alt paisagem](https://media.discordapp.net/attachments/886987574239977512/945767472370425856/unknown.png)

   ![Alt paisagem](https://media.discordapp.net/attachments/886987574239977512/945767968871182356/unknown.png)
