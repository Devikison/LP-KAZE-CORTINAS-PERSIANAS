# Padrão de qualidade para projetos web e sistemas

Este repositório entrega projetos para clientes. O objetivo é sempre um resultado de nível agência: nada genérico, nada com cara de template de IA.

## Regra obrigatória (automática)

Vale para **qualquer** pedido que mencione ou envolva: Landing Page / LP, site, página de links (link in bio), dashboard, painel, sistema, app web, portal, área de membros, formulário, tela ou interface em geral. Vale tanto para **criar** quanto para **alterar** (layout, textos, seções, estilos, responsividade, animações, funcionalidades com interface).

Nesses casos, invoque as skills abaixo com a ferramenta Skill **antes de escrever ou editar qualquer código**, sem esperar o usuário pedir:

| Situação | Skills a invocar |
| --- | --- |
| LP, site ou página de links novos | `design-taste-frontend` + `high-end-visual-design` |
| Dashboard, painel ou sistema novos | `design-taste-frontend` + `high-end-visual-design` (priorizar clareza, densidade de dados e usabilidade) |
| Mexer em algo existente / redesign | `redesign-existing-projects` + `design-taste-frontend` |
| Qualquer tarefa de código | `full-output-enforcement` (sem placeholders, sem código truncado) |

Skills opcionais, usar conforme o briefing:
- `minimalist-ui`: estilo editorial limpo (bom para dashboards e sistemas).
- `industrial-brutalist-ui`: estilo bruto/técnico (dashboards com muitos dados).
- `gpt-taste`: LP com animação forte (GSAP/ScrollTrigger).
- `image-to-code` / `imagegen-frontend-web`: criar referências visuais por seção antes de codar.
- `brandkit`: identidade visual/logo quando o cliente não tem.
- `stitch-design-taste`: gerar um `DESIGN.md`.

Skills em `.agents/skills/` (link em `.claude/skills/`). Não apague essas pastas nem o `skills-lock.json`.

## Fluxo de trabalho

1. **Briefing primeiro:** entenda o negócio, público e objetivo do projeto (oferta e CTA principal em LP/site; tarefas e dados principais em dashboard/sistema). Se faltar informação essencial, pergunte antes de projetar.
2. **Auditar (projeto existente):** liste os problemas do design atual antes de mexer; não quebre funcionalidade (formulários, links de WhatsApp, pixels, tracking, lógica e dados do sistema).
3. **Construir** seguindo as skills invocadas.
4. **Checklist antes de entregar:**
   - Mobile-first: testar em ~375px, 768px e desktop; sem rolagem horizontal.
   - LP/site/página de links: CTA principal visível na primeira dobra e repetido ao longo da página.
   - Dashboard/sistema: ação principal evidente, estados de carregamento, vazio e erro tratados, tabelas e formulários usáveis no mobile.
   - Contraste e legibilidade (WCAG AA), `alt` em imagens, hierarquia de títulos (um `h1`).
   - Performance: imagens otimizadas, `loading="lazy"` abaixo da dobra, fontes carregadas com `display=swap`.
   - SEO básico: `title`, `meta description`, Open Graph, `lang="pt-BR"`.
   - Sem texto de exemplo (lorem ipsum), sem links `#` quebrados, sem placeholders.
5. Mostrar um screenshot ou prévia quando possível para validar o visual.

## Convenções

- Idioma dos projetos: português do Brasil, salvo pedido contrário.
- Imagens e arquivos do cliente ficam em `uploads/`.
- Não adicionar dependências ou frameworks sem necessidade; manter o projeto leve e rápido.
