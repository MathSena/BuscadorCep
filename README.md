# 📍 Buscador de CEP

Um projeto simples e prático desenvolvido em HTML, CSS e JavaScript, que utiliza o Axios para realizar chamadas de API para o serviço externo viacep.com.br.

## 💼 Sobre o projeto

Este projeto é uma ferramenta web que permite aos usuários inserir um Código de Endereçamento Postal (CEP) e obter informações detalhadas sobre ele. Tudo o que você precisa fazer é digitar um CEP válido, e a magia acontece!

## 🚀 Como funciona

O projeto é alimentado por uma combinação de tecnologias front-end e uma API externa. Aqui está uma visão simplificada do que acontece sob o capô:

### Explicação do Código JavaScript: Buscador de CEP

Olá! Vamos mergulhar juntos no código e entender passo a passo o que está acontecendo:

1. **Estrutura do Objeto: app**
    - **Método init**: Inicializa o aplicativo chamando os métodos `cacheDOMElements` e `bindEvents`.
    - **Método cacheDOMElements**: Otimize o desempenho "lembrando" dos elementos DOM.
    - **Método bindEvents**: Conecta eventos do usuário a suas respectivas funções.
    - **Método isValidZip**: Valida o formato do CEP.
    - **Método run**: É a função principal executada quando o botão é clicado.
    - **Método handleError**: Trata erros durante a busca do CEP.
    - **Método displayData**: Exibe os dados recebidos.
    - **Método createLine**: Cria um novo parágrafo no DOM.

Finalmente, `app.init()` inicia tudo!

> Espero que essa explicação tenha esclarecido o funcionamento do código! A estruturação do código em um objeto e a divisão de tarefas entre diferentes métodos tornam o código organizado e mais fácil de manter. Isso é uma prática comum em JavaScript, especialmente quando se trabalha com interações mais complexas no DOM. 🌟🚀

## 📦 Instalação

1. Clone este repositório para sua máquina.
2. Abra o `index.html` em seu navegador de preferência.
3. Comece a buscar CEPs!

## 🌟 Recursos

- Design amigável e responsivo.
- Busca em tempo real de CEPs.
- Uso do Axios para requisições HTTP mais eficientes.
- Tratamento de erros e validação de CEP.

## 🙌 Agradecimentos

Grande shoutout para [viacep.com.br](https://viacep.com.br/) por fornecer uma API robusta e confiável para buscar CEPs!
