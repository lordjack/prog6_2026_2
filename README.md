# Programação 6 - IFSC 2026

Este repositório será usado para as aulas da disciplina de **Programação 6**, para a turma do IFSC do curso técnico em **Desenvolvimento de Sistemas**.

Serão usadas as seguintes tecnologias:
- **JavaScript**
- **React Native**
- **Firebase**

---

## Comandos Básicos do Git

### Configurar nome e e-mail

Antes de começar a usar o Git, configure seu nome e e-mail:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

### Clonar um repositório

Para clonar este repositório na sua máquina local:

```bash
git clone https://github.com/lordjack/prog6_2026_2.git
```

### Adicionar repositório remoto em um repositório local

Se você já tem um repositório local e quer conectá-lo a um repositório remoto:

```bash
git remote add origin https://github.com/lordjack/prog6_2026_2.git
```

Para verificar os repositórios remotos configurados:

```bash
git remote -v
```

### Adicionar arquivos (stage)

Adicionar um arquivo específico:

```bash
git add nome-do-arquivo.txt
```

Adicionar todos os arquivos modificados:

```bash
git add .
```

### Comitar as alterações

```bash
git commit -m "Mensagem descritiva do que foi alterado"
```

### Enviar as alterações para o repositório remoto (push)

```bash
git push origin main
```

> Substitua `main` pelo nome da branch que deseja enviar, caso seja diferente.

### Fluxo básico completo

```bash
git add .
git commit -m "Minha mensagem de commit"
git push origin main
```