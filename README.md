# Luzeiros do Sul — Site institucional (versão 1.2)

Site institucional estático, responsivo e preparado para **GitHub Pages**, com o lema **Hoje e Sempre** e as cores preto, amarelo e vermelho.

## 1. Como visualizar no computador

Abra o arquivo `index.html` no navegador. Não é necessário instalar nada.

## 2. Publicar gratuitamente no GitHub Pages

1. Entre em [github.com](https://github.com) com sua conta.
2. Clique em **New repository** e crie um repositório público chamado `luzeiros-do-sul`.
3. No repositório, clique em **Add file → Upload files**.
4. **Descompacte o ZIP** e envie **o conteúdo da pasta**, incluindo `index.html`, `styles.css`, `script.js`, `.nojekyll` e a pasta `assets`. Não envie somente o arquivo ZIP.
5. Clique em **Commit changes**.
6. Acesse **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
7. Selecione a ramificação **main**, a pasta **/(root)** e clique em **Save**.
8. Depois da publicação, o endereço deverá seguir o formato `https://SEU-USUARIO.github.io/luzeiros-do-sul/` (substitua pelo seu usuário real).

**Importante:** no plano gratuito do GitHub, o repositório precisa ser **público**. Os arquivos do site estarão acessíveis ao público.

## 3. Como editar informações

- **Textos, títulos e links da página inicial:** `index.html`.
- **História completa de 1982 a 2019:** `historia.html` e seus estilos exclusivos em `historia.css`.
- **Cores, fontes, disposição e responsividade:** `styles.css`.
- **Menu do celular e filtro automático de eventos passados:** `script.js`.
- **Agenda:** em `index.html`, procure por `data-date="2026-10-30"` e `data-date="2026-11-08"`. Ao adicionar um novo evento, crie outro `article.event-item` com `data-date="AAAA-MM-DD"`. A página esconde automaticamente os eventos que já passaram (pela data do visitante).
- **Fotos:** substitua as artes ilustrativas nas seções de atividades e galeria por fotografias que tenham autorização de divulgação. Para publicar fotos sem depender de outros servidores, coloque-as em `assets/` e use caminhos relativos, por exemplo `assets/foto-trilha.jpg`.
- **Logotipo e ícone do site:** o brasão central, os símbolos da barra de navegação e do rodapé e o ícone da aba do navegador agora apontam para a imagem no cadastro oficial adventista (`https://sg.sdasystems.org/cms/logos_clubes/1820.jpg`). Para o brasão central e os símbolos da página, permanecem versões **ilustrativas** de reserva caso a imagem não carregue. Como a imagem oficial está vinculada ao endereço de outro site, o ideal é obter uma cópia autorizada diretamente da diretoria e colocá-la em `assets/brasao-oficial.jpg`, depois substituir todas as URLs remotas por `assets/brasao-oficial.jpg`. Para o favicon, seria ainda melhor usar um arquivo quadrado otimizado extraído do próprio brasão, com autorização do clube. Não supomos que o cadastro oficial ofereça licença pública irrestrita sobre a marca.
- **Instagram, WhatsApp e e-mail:** os links NÃO foram incluídos porque os contatos oficiais não foram confirmados. Adicione-os somente depois de validar com a diretoria.

## 4. Notas sobre as informações

- Fundação em **07/02/1982** e anos com reconhecimento de cinco estrelas verificados no cadastro [Encontre um Clube (DSA)](https://clubes.adventistas.org/br/asp/1820/luzeiros-do-sul/).
- A tradição da fanfarra desde 1987, as atividades e os eventos de outubro/novembro de 2026 foram informados pela equipe do clube e devem ser revisados antes da publicação final.
- As artes das atividades são desenhos ilustrativos, **não são fotografias reais** do clube.
- Antes de divulgar fotografias, nomes, pontuações ou dados de crianças e adolescentes, obtenha as autorizações e avalie a privacidade. Nenhum cadastro, login ou formulário de envio de dados foi incluído na v1.

## 5. Evolução para um portal

Esta primeira versão funciona sem banco de dados e sem dependências de construção. Mais adiante, a área restrita do desbravador, calendário administrativo e pontuação poderão ser feitos com autenticação e backend apropriados. **Não coloque dados privados em repositórios públicos ou código JavaScript.**

## Estrutura

```text
luzeiros-do-sul/
├── index.html
├── historia.html
├── historia.css
├── styles.css
├── script.js
├── .nojekyll
├── README.md
└── assets/
    ├── brasao-ilustrativo.svg
    ├── favicon.svg
    ├── trilha.svg
    ├── fanfarra.svg
    └── servico.svg
```

**Fonte de informações institucionais:** https://clubes.adventistas.org/br/asp/1820/luzeiros-do-sul/

## Atualizações da versão 1.2

- A seção **Nossa História** agora apresenta a origem do nome do clube, sua fundação e uma linha do tempo com principais marcos até 2026.
- Em **Diretoria 2026**, consta Anaíde de Almeida como diretora e Luiz Carlos Goulart Júnior como **diretor associado e secretário**, conforme informações fornecidas para o projeto.
- O histórico foi **adaptado e resumido editorialmente**, não transcrito literalmente. Fontes: cadastro oficial da DSA e página de histórico no Desbravai. A seção inclui links às duas referências.
- Para publicar uma transcrição literal integral com conferência textual, obtenha o texto original da diretoria e substitua esta versão editorial.

## Atualizações da versão 1.3

- Página `historia.html` com o histórico completo fornecido pela diretoria, abrangendo 1982–2019, sem omitir os nomes, acontecimentos e conquistas do texto enviado. Apenas ortografia/pontuação foram revisadas em passagens pontuais.
- Link interno direto para a história completa no menu, na página inicial e na seção “Nossa História”.
- O cadastro oficial registra a fundação em **07/02/1982** e o texto histórico relata a notícia no jornal **O Comunicador em julho de 1982**; são dois marcos distintos, apresentados sem confundi-los.
- Foto fornecida pela diretoria: a URL remota `foto_clube.php?clube=1820` é referenciada nas páginas, com arte de reserva, pois o servidor de origem não permitiu transferir a imagem para dentro deste pacote. É importante confirmar que a URL continua funcionando em ambiente publicado. O token na URL é público no HTML; se for privado ou temporário, remova e use arquivo local autorizado em `assets/`.
- A função de Luiz Carlos Goulart Júnior em 2026 permanece como **diretor associado e secretário**.
