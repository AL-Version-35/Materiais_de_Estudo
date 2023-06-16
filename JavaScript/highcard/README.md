**## High Card**

Esta é uma aplicação em *JavaScript* que cria um jogo entre duas pessoas, onde ambos compram uma carta cada do topo do baralho e a carta de valor mais alto decidirá o vencendor, adicionando 1 ponto ao vencedor. Ao esvaziar o deck, os pontos serão comparados e o vencedor final será decidido.
Esta aplicação apesar de possuir uma estrutura robusta, a maioria dos códigos são simples códigos de *JavaScript*, onde o estudo teve maior foco em sua estruturação, além da implementação da solicitação de *API* em *fetch* para adicionar um novo baralho com ordem de cartas aleatórias e nos métodos *addEventListener* e *map* para comprar as cartas do baralho e construir a apresentação delas no *DOM*, respectivamente.

**### Tecnologias Usadas**

* JavaScript
* HTML
* CSS

**## Modo de Uso**

Iniciada a aplicação, serão renderizados um plano de fundo de mesa de jogos, dois botões, um para adicionar um baralho novo com o título *"New Deck"* e outro para comprar uma carta para cada jogador com o título *"Draw Cards"*, além de espaços para as cartas compradas e a pontuação para cada jogador. Só poderão ser compradas cartas assim que um baralho com mais de 0 cartas for adicionado, assim ao fazê-lo, o número de cartas remanescentes no baralho aparecerá ao lado do botão de adicioná-lo e o jogo poderá começar de fato.
A cada dupla de cartas compradas o vencedor daquela rodada receberá um ponto, porém caso as cartas possuam o mesmo valor, nenhum jogador receberá pontos. Ao comprar as duas últimas cartas do baralho, os pontos de ambos os jogadores serão comparados e o vencedor final será decidido em tela, além de não ser mais possível clicar no botão de comprar cartas.
Para reiniciar o jogo, basta clicar no botão de adicionar um novo baralho e o estado de todos os outros elementos do jogo retornaram aos seus estados originais.

**## Créditos**

* Parte do código criado por *Bob Ziroll*, no curso *The Frontend Developer Career Path*, módulo *Working with APIs* da plataforma *Scrimba* [https://scrimba.com/learn/frontend]