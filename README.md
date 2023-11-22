# Nike Shoes

![Badge do status do projeto](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

Projeto que simula o Front-end de um e-commerce que vende tênis Nike

## 📋 Sobre

1. Página Inicial (Lista de Produtos)
Exibir uma lista de produtos da Nike Shoes com imagens, nomes, preços e botão "Adicionar ao Carrinho".
Implementar funcionalidade para adicionar produtos ao carrinho de compras.
2. Página de Detalhes do Produto
Ao clicar em um produto na lista, os usuários são direcionados para uma página de detalhes.
Exibir informações detalhadas sobre o produto, como imagens adicionais, descrição, preço, etc.
Opção para adicionar o produto ao carrinho de compras.
3. Carrinho de Compras
Exibir todos os itens adicionados ao carrinho com detalhes, incluindo imagem, nome, quantidade e preço.
Opção para remover itens do carrinho.
Calcular e exibir o total da compra.
Implementar simulação de frete com cálculo de custo de envio com base no CEP do usuário usando a API ViaCep.
4. Página de Pagamento
Opção para o usuário escolher entre pagamento com Pix ou cartão de crédito.
Se a opção for cartão de crédito, implementar a detecção da bandeira do cartão pelo número do cartão.
Formulários de pagamento seguros e validação de dados do cartão.
Implementar simulação de pagamento com mensagens de sucesso ou falha.
5. Integração com ViaCep para Validação de CEP
Ao inserir um CEP no carrinho de compras ou na página de pagamento, realizar uma chamada à API ViaCep para validar e obter informações de endereço.
6. Tela de Cadastro
Implementar uma tela de cadastro com campos como nome, e-mail, senha, etc.
Adicionar validações para garantir dados válidos antes de enviar ao localStorage.
7. Tela de Login
Criar uma tela de login com campos para e-mail e senha.
Armazenar informações de login no localStorage.
Implementar validações para garantir um login seguro.
8. Componentes Reutilizáveis e Estilo
Criar componentes reutilizáveis para garantir uma estrutura modular e manutenível.
Estilizar o aplicativo de forma atraente e responsiva usando uma biblioteca de estilos ou CSS-in-JS.
9. Navegação
Implementar navegação entre as diferentes páginas do aplicativo usando React Router para proporcionar uma experiência de usuário fluida.
10. Responsividade
Garantir que o aplicativo seja responsivo, proporcionando uma boa experiência de usuário em dispositivos móveis e desktops.
11. Gerenciamento de Estado
Utilizar o Redux ou o Context API do React para gerenciar o estado global do aplicativo, especialmente para o carrinho de compras e dados de usuário.


## 💥 Objetivo

O objetivo do projeto é praticar conceitos como:
- React Router
- LocalStorage
- Vite
- Redux
- React-form
- React-modal
- MUI
- Hooks em geral (useState,useEffect,useParams,useNavigate,useForm,useRef,useDispatch)



## 🚀 Funcionalidades

- Cadastro de usuários
- Login e logout
- Carrinho de compras, adicionar/remover produtos
- Cálculo de frete
- Validação de CEP pelo ViaCep
- Preenchimento automático de campos de endereço
- Validações de formulário
- Simulação de pagamento (Cartão de Crédito ou PIX)


## ⚙️ Tecnologias utilizadas

- React
- HTML
- CSS
- Vite


## ✅ Deploy

https://nike-shoes-react.vercel.app/
