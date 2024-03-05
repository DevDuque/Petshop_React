# Petshop_React
<h1 align="center"> 
<img src="./public/dog.svg" height="300px" alt="devduque" />
</h1>

## Execução da aplicação

Para executar o programa é necessário ter instalado o [NodeJS](https://nodejs.org/en);

1. Clone o repositório para sua máquina:

```
git clone https://github.com/DevDuque/Petshop_React
```

2. Navegue para o diretório:
```
cd web
```

3. Instale as dependências necessárias:
```
npm install
```

4. Iniciar o servidor de desenvolvimento:
```
npm start
```
5. O sistema estará disponível em [LocalHost](http://localhost:3000) no seu navegador.

6. Entre a data da seguinte forma:
```
MM-DD-YYYY
```

### Premissas Assumidas
#### Positivas
1. **Facilidade de uso:** A aplicação oferece uma interface simples e intuitiva, permitindo que os usuários forneçam facilmente a data do banho e a quantidade de cães pequenos e grandes para calcular o melhor petshop.

2. **Feedback imediato:** A aplicação fornece feedback imediato ao usuário, alertando sobre campos obrigatórios não preenchidos ou valores inválidos, garantindo uma experiência fluida.

3. **Eficiência na escolha:** Com base nos preços dos petshops e na distância em relação ao canil, a aplicação ajuda os usuários a escolherem o petshop mais econômico, economizando tempo e dinheiro.

#### Negativas
1. **Precisão das informações:** A precisão dos preços e distâncias dos petshops depende das informações fornecidas, e quaisquer alterações nas políticas dos petshops ou nas condições de trânsito podem afetar a precisão dos resultados.

2. **Complexidade dos cálculos:** Embora a aplicação forneça uma solução conveniente para encontrar o melhor petshop, os cálculos envolvidos podem ser complexos, especialmente ao considerar várias variáveis como preços, distâncias e dias da semana.

3. **Necessidade de manutenção:** A aplicação pode exigir manutenção contínua para garantir que os dados dos petshops estejam atualizados e que quaisquer problemas ou bugs sejam corrigidos.


### Decisões de Projeto
**ReactJS:** Optou-se por utilizar o ReactJS devido à sua eficiência na criação de interfaces de usuário dinâmicas e responsivas, além da sua popularidade e vasta comunidade de desenvolvedores.

**TypeScript:** A escolha do TypeScript foi feita visando melhorar a segurança e a manutenibilidade do código, adicionando tipagem estática e recursos avançados de desenvolvimento, como IntelliSense e refatoração segura.

**Node.js:** Embora não mencionado explicitamente, presume-se que o Node.js seja utilizado no backend para fornecer funcionalidades adicionais à aplicação.

**CSS:** A decisão de utilizar CSS é motivada pela sua abordagem de estilo baseada na facilidade e ampla usabilidade.

**Separação em Componentes e Utils:** Para manter um código organizado e de fácil manutenção, a aplicação é estruturada de acordo com o paradigma de componentização do React, onde cada componente é responsável por uma parte específica da interface do usuário. Além disso, as funcionalidades compartilhadas são encapsuladas em utilitários (Utils), promovendo a reutilização do código e a modularidade.


### O que mais você achar importante compartilhar sobre o projeto

Uma observação importante sobre o projeto é a escolha do uso do ReactJS com TypeScript. Esta combinação oferece muitos benefícios, incluindo tipagem estática para detectar erros com mais facilidade, maior legibilidade e manutenibilidade do código.

Como eu já fiz alguns projetos com essas tecnologias optei por utiliza-las e fazer algo que aproveite desses benifícios.

A separação das funcionalidades em componentes e utils segue as melhores práticas de desenvolvimento, tornando o código mais limpo, reutilizável e fácil de dar manutenção.


### Considerações Finais

Sinta-se livre para olhar os repositórios aqui presente, para ter um perfil mais claro sobre os projetos que trabalhei!

[Clique aqui para ver o meu currículo](https://drive.google.com/file/d/1f86QCROaa_OolPdghZAWnKX9I0fCirNz/view?usp=sharing)
