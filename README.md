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

### Aula 3

#### Entendendo Enums no TypeScript

Nesta aula aprendi como usar enums no TypeScript para criar constantes que ficam mais claras do que representam, assim deixando a leitura do nosso código bem melhor.

Além disso, vi um pouco mais sobre os modificadores de visibilidade quando se trata de métodos.

### Aula 4

#### Melhorando o código

Nesta aula aprendi a melhorar o código isolando a lógica de criação do modelo Negociacao em um método estático no próprio modelo que recebe strings como parâmetros e faz a lógica de conversão dos valores, chamando o construtor da classe com os valores convertidos.

Também aprendi a proteger o template HTML fazendo um replace de tags script, para que não seja possível adicioná-las no innerHTML.

Também vi que é possível utilizar parâmetros opcionais em métodos/funções no TypeScript, mas não utilizei esse recurso no meu projeto, pois achei que nesse caso não faria sentido.

### Aula 5

#### strictNullChecks no compilador

Nesta aula aprendi a utilizar a configuração "strictNullChecks": true no compilador para não permitir que ele infira que todas nossas variáveis podem ser do tipo null também, o que causa alguns problema com a API do "querySelector();", que sempre retornar uma referência que pode ser null, nos obrigando a tratá-la.

Também aprendi como usar o casting para deixar explicito ao compilador que eu tenho certeza do tipo daquela referência, assim tendo uma forma de utilizar a referência sem ter que fazer validações de se ela é null ou não.

Além disso, aprendi a utilizar a configuração "removeComments": true, para não levar os comentários que adicionarmos nos arquivos .ts para os arquivos .js compilados.

### Conclusão

Neste curso aprendi algumas coisas um pouco mais avançadas da linguagem TypeScript com o foco no desenvolvimento utilizando o paradigma de orientação a objetos, coisa que já tenho certa familiaridade e facilitou muito a entender alguns conceitos por conta da minha experiência com o Java.

Foi um curso muito bom e estou animado para o próximo, onde irei melhorar ainda mais o código, deixando-o mais parecido com o que é usar o TypeScript quando estamos trabalhando com algum framework.

## Typescript parte 3: mais técnicas e boas práticas

Neste curso irei aprender mais recursos da linguagem TypeScript e melhorar o meu código seguindo um padrão mais semlhante ao padrão utilizado quando estamos trabalhando com algum framework que dá suporte ao uso do TypeScript.

### Aula 1

#### Entendendo Decorators

Nesta aula aprendi o básico de como se trabalhar com Decorators no TypeScript, um recurso ainda experimental na linguagem, mas utilizado em frameworks como Angular e React, pois nos traz uma funcionalidade muito legal para deixarmos o nosso código mais genérico quando precisamos de um decorator para mudar a funcionalidade de métodos da nossa classe, por exemplo.

Apesar de ser um pouco semelhante com as annotations do Java em alguns aspectos, é um assunto bem complexo para mim e ainda tenho que estudar um pouco para consolidar o meu conhecimento nele, pois são muitas regras de uso desse recurso e ainda não estou acostumado com o fluxo, apesar de o conceito ser bem simples e se encaixar com o design pattern decorator, onde recebemos algo por parâmetro, decoramos esse algo e retornamos outro algo com coisas a mais, mas ainda com as funcionalidades que tínhamos no algo original.

### Aula 2

#### Mais detalhes sobre Decorators

Nesta aula aprendi a usar parâmetros nos nossos Decorators, assim permitindo com que façamos uma lógica diferenciada dependendo de algum parâmetro recebido e vi que o único intuito de termos uma função que retorna outra função como nosso Decorator é justamente esse, ou seja, se não precisarmos de parâmetros no nosso Decorator, podemos simplesmente exportar a função que está fazendo toda a lógica diretamente.

Além disso, aprendi sobre a ordem de execução dos Decorators quando temos mais de um em algum método e aprendi a acessar mais informações sobre o método que estamos decorando a partir do this do "descriptor.value".
