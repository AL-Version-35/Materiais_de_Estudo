**## BlogSpace**

Esta é uma aplicação em *JavaScript* que simula um simples *feed* de *blog*, com 5 postagens aleatórias, onde o usuário é capaz de fazer suas próprias postagens e enviá-las ao *feed*. Apesar desta aplicação fazer uma solicitação de *POST*, nada é enviado para o banco de dados. Ao invés disso, a postagem é mantida localmente no *feed* até que a aplicação seja reiniciada.
Esta aplicação possui foco na implementação da solicitação de *API* em *fetch*, tanto com o método *GET* quanto com o *POST*, e nos métodos *addEventListener* e *map* para enviar o formulário e organizar a disposição dos dados de *posts* obtidos pela solicitação em *fetch*, respectivamente.

**### Tecnologias Usadas**

* JavaScript
* HTML
* CSS

**## Modo de Uso**

Iniciada a aplicação, será renderizado o *feed* do *blog* abaixo e um cabeçalho acima com duas caixas de texto, com os títulos "Título" e "Postagem". Digitando qual será o título e o conteúdo da postagem, basta clicar no botão "Postar" para adicionar seu texto ao *feed*.
Ao reinicializar a aplicação, todas as postagens feitas anteriormente são removidas e se mantém apenas as 5 postagens iniciais.

**## Créditos**

* Maior parte do código criado por *Bob Ziroll*, no curso *The Frontend Developer Career Path*, módulo *Working with APIs* da plataforma *Scrimba* [https://scrimba.com/learn/frontend]