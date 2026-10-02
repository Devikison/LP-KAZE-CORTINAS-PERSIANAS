# Padrão de qualidade para Landing Pages

Este repositório entrega landing pages (LPs) para clientes. O objetivo é sempre um resultado de nível agência: nada genérico, nada com cara de template de IA.

## Regra obrigatória (automática)

Sempre que a tarefa for **criar uma nova LP** ou **alterar uma LP existente** (layout, textos, seções, estilos, responsividade, animações), invoque as skills abaixo com a ferramenta Skill **antes de escrever ou editar qualquer código**, sem esperar o usuário pedir:

| Situação | Skills a invocar |
| --- | --- |
| LP nova | `design-taste-frontend` + `high-end-visual-design` |
| Mexer em LP existente / redesign | `redesign-existing-projects` + `design-taste-frontend` |
| Qualquer tarefa de código de LP | `full-output-enforcement` (sem placeholders, sem código truncado) |

Skills opcionais, usar conforme o briefing:
- `minimalist-ui`: estilo editorial limpo.
- `industrial-brutalist-ui`: estilo bruto/técnico.
- `gpt-taste`: LP com animação forte (GSAP/ScrollTrigger).
- `image-to-code` / `imagegen-frontend-web`: criar referências visuais por seção antes de codar.
- `brandkit`: identidade visual/logo quando o cliente não tem.
- `stitch-design-taste`: gerar um `DESIGN.md`.

Skills em `.agents/skills/` (link em `.claude/skills/`). Não apague essas pastas nem o `skills-lock.json`.

## Fluxo de trabalho

1. **Briefing primeiro:** entenda o negócio, público, oferta e CTA principal do cliente. Se faltar informação essencial, pergunte antes de projetar.
2. **Auditar (LP existente):** liste os problemas do design atual antes de mexer; não quebre funcionalidade (formulários, links de WhatsApp, pixels, tracking).
3. **Construir** seguindo as skills invocadas.
4. **Checklist antes de entregar:**
   - Mobile-first: testar em ~375px, 768px e desktop; sem rolagem horizontal.
   - CTA principal visível na primeira dobra e repetido ao longo da página.
   - Contraste e legibilidade (WCAG AA), `alt` em imagens, hierarquia de títulos (um `h1`).
   - Performance: imagens otimizadas, `loading="lazy"` abaixo da dobra, fontes carregadas com `display=swap`.
   - SEO básico: `title`, `meta description`, Open Graph, `lang="pt-BR"`.
   - Sem texto de exemplo (lorem ipsum), sem links `#` quebrados, sem placeholders.
5. Mostrar um screenshot ou prévia quando possível para validar o visual.

## Convenções

- Idioma das LPs: português do Brasil, salvo pedido contrário.
- Imagens e arquivos do cliente ficam em `uploads/`.
- Não adicionar dependências ou frameworks sem necessidade; manter a LP leve e rápida.
