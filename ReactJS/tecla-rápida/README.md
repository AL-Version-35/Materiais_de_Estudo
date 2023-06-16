**##Tecla Rápida**

Esta é uma aplicação em *ReactJS* que apresenta um jogo de digitar o maior número de palavras enquanto o tempo durar, assim no final mostrando quantas palavras foram redigidas. Como esta aplicação não se utiliza de um banco de dados, ela não verificará se a palavra de fato existe, apenas se é uma *string* válida.
Esta aplicação possui como foco a implementação de diversos *hooks* como *useState* para guardar os valores e estados de tempo e palavras, *useRef* para trazer foco à área de texto no *DOM* e *useEffect* para executar o método *setTimeout* assim que o jogo iniciar, além dos componentes funcionais em *React*.

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

Iniciada a aplicação, serão renderizados uma caixa de texto desabilitada, um botão para iniciar o jogo, além de um texto introdutório acima da caixa de texto, uma contagem de tempo abaixo e uma contagem de palavras abaixo do botão.
Assim que apertar o botão "Começar", a caixa de texto ficará habilitada e mudará para a cor verde, possiblitando que palavras sejam digitadas. Enquanto isso, o contador de tempo irá decair a cada segundo até chegar em 0 e retornar a caixa de texto ao seu estado original. Caso algo fora escrito durante essa contagem, o número de palavras será mostrado abaixo do botão, atualizando o valor inicial de 0.
Ao apertar o botão novamente, o texto digitado anteriormente, o tempo remanescente e o número de palavras contadas serão todos retornados aos seus estados anteriores, reiniciando o jogo.

**##Créditos**

* Maior parte do código criado por *Bob Ziroll*, no curso *The Frontend Developer Career Path*, módulo *Advanced React* da plataforma *Scrimba* [https://scrimba.com/learn/frontend]