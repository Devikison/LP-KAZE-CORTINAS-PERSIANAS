# Modelo de Landing Page (com skills de design)

Repositório base para criar e editar landing pages de clientes com as skills `Leonxlnx/taste-skill` já instaladas e ativadas pelo `CLAUDE.md`.

## Como usar para um novo cliente

1. No GitHub: **Use this template → Create a new repository** (requer marcar este repo como *Template repository* em Settings).
2. Abra uma sessão do Claude Code no novo repositório.
3. Peça normalmente, por exemplo: "Crie uma LP para [cliente], [segmento], objetivo [X]". O `CLAUDE.md` faz o Claude invocar as skills de design automaticamente.

## Atualizar as skills

```bash
npx skills add Leonxlnx/taste-skill -y
```

Depois, commit e push de `.agents/`, `.claude/` e `skills-lock.json`.
