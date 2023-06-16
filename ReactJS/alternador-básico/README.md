**##Alternador Básico**

Esta é uma aplicação em *ReactJS* que visa demonstrar as funcionalidades de revelar e esconder um menu e favoritar um objeto, alterando o estado de um elemento com um clique.
Esta aplicação possui uma estilização mínima pois o foco é na implementação de um *state* em componentes de classe em *React* e na herança de *props* e *props* de renderização, através da propriedade *render*, de um componente pai para um filho.

**###Tecnologias Usadas**

* JavaScript
* HTML
* CSS
* ReactJS

**##Instalação**

Para utilizar esta aplicação, é necessário instalar as dependências do pacote *npm* no repositório clonado, através do comando:

```powershell
npm install
```

Após isso, inicie a aplicação com o comando:

```powershell
npm start
```

**##Modo de Uso**

Iniciada a aplicação, serão renderizados um botão para mostrar o menu, um texto demonstrando como favoritar e um coração clicável.
Ao clicar no botão, um pequeno menu será mostrado onde apresentará o texto "Assinado por **React**", além disso o botão que antes dizia "Mostrar Menu" agora torna-se "Esconder Menu", que ao fazê-lo retornará este menu ao seu estado original.
Abaixo estará o texto "Clique no coração para favoritar!" e um *emoji* de coração em branco. Clicando no coração ele se tornará vermelho e o texto anterior trocará o "favoritar!" por "desfavoritar!", permitindo que ao clicar novamente estas mudanças sejam desfeitas.

**##Créditos**

* Maior parte do código criado por *Bob Ziroll*, no curso *The Frontend Developer Career Path*, módulo *Working with APIs* da plataforma *Scrimba* [https://scrimba.com/learn/frontend]