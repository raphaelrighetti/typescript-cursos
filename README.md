# TypeScript Cursos - Alura

Repositório para salvar e compartilhar meus códigos desenvlvidos durante a formação "Mergulhe no JavaScript com TypeScript" da Alura.

## TypeScript parte 1: evoluindo seu JavaScript

Neste curso irei aprender o básico do TypeScript e analisar as vantages de utilizá-lo no lugar do JavaScript.

### Aula 1

#### Entendendo a motivação do TypeScript

Nesta aula vi alguns problemas do JavaScript e como o TypeScript pode ajudar a resolvê-los.

### Aula 2

#### Configurando o compilador TypeScript

Nesta aula vi como podemos configurar o nosso compilador TypeScript utilizando o arquivo tsconfig.json e criando alguns scripts no package.json para a compilação ocorrer automaticamente e o servidor que escuta a pasta onde ficam os arquivos compilados escutar as modificações que ocorrem na compilação.

Também vi o recurso do modificador de visibilidade "private" no TypeScript, o que faz com que nossos atributos não sejam acessíveis a diretamente, ficando parecido com o Java.

### Aula 3

#### Entendendo tipagem

Nesta aula vi como funciona a tipagem no TypeScript, quais os benefícios de usá-la, a sintaxe de declaração de tipos e as boas práticas quando estamos trabalhando com as declarações de tipos no TS.

Além disso, vi como utilizar controllers no TypeScript para controlar as interações do usuário com a página criando uma classe controller e um método que escuta o submit do formulário da página.

Também vi um pouco sobre a inferência de tipos no TypeScript e quando usá-la.

### Aula 4

#### Entendendo Generics no TS

Nesta aula vi como funcionam Generics no TypeScript utilizando eles em um Array para definir o tipo dos itens dele, assim não permitindo a entrada de outros tipos em tempo de compilação.

Além disso, conheci o tipo "ReadonlyArray", que é um Array como outro qualquer, mas que não permite nenhuma operação que irá modificar os itens dentro dele em tempo de compilação.

### Aula 5

#### Simplificando o código

Nesta aula vi algumas maneiras de simplificar o código e deixá-lo mais enxuto utilizando atributos definidos no próprio construtor, outra sintaxe para definir Arrays e o modificador "readonly" em atributos públicos para não precisar de métodos getters.

Também aprendi algumas coisas a mais sobre o modificador "readonly" e técnicas para deixar as nossas classes mais encapsuladas utilizando a programação defensiva.

### Conclusão

Neste curso aprendi o básico de como o TypeScript funciona e pude ver como ele é um pouco parecido com o Java, apesar de ser diferente em diversos quesitos.

Gostei bastante da linguagem até agora e estou animado para os próximos cursos.

## TypeScript parte 2: avançando na linguagem

Neste curso irei me aprofundar um pouco mais na linguagem utilizando mais recursos dela e programando com a orientação a objeto, fazendo uma funcionalidade de visualização da nossa lista de negociações do projeto.

### Aula 1

#### Iniciando a View

Nesta aula aprendi a criar uma classe de View para o projeto do curso, utilizando um template HTML e inserindo dinamicamente as negociações incluidas na lista pelo usuário.

Também aprendi um pouco sobre o tipo "Intl", que nos permite fazer formatações de alguns tipos com base na localidade do navegador do usuário.

### Aula 2

#### Entendendo herança no TypeScript

Nesta aula aprendi como utilizar a herança no TypeScript, criando uma classe abstrata e genérica para todas as nossas Views estenderem, assim reduzindo a repetição de código e forçando as filhas a implementarem os métodos abstratos da mãe.

Para colocar isso em prática, também aprendi a utilizar Generics nas classes criadas por nós, assim fazendo as filhas dizerem o tipo do retorno dos métodos, parâmetros recebidos, etc. Tudo depende do que nós definirmos.
