# Lanchê Landing Page

Landing page em React + Vite para a marca Lanchê, organizada para manutenção, versionamento e publicação.

## Stack

- React 18
- Vite 6
- Tailwind CSS 4
- Motion

## Arquitetura

- `src/app/App.tsx`: composição principal da landing
- `src/app/components/landing`: seções e blocos da experiência
- `src/app/components/ui`: utilitários visuais reaproveitáveis
- `src/app/models`: modelos orientados a objeto para conteúdo e regras leves de apresentação
- `src/app/data`: conteúdo centralizado da landing
- `src/imports`: imagens e assets da marca

## Desenvolvimento local

1. Rode `npm install`
2. Rode `npm run dev`
3. Abra `http://localhost:5173`

O servidor Vite está configurado para responder em `0.0.0.0`, o que facilita uso local e port forwarding em ambientes remotos.

## Build

- `npm run build`

## Subir para o GitHub

1. Inicialize o repositório com `git init -b main`
2. Adicione os arquivos com `git add .`
3. Crie o primeiro commit com `git commit -m "chore: organize landing page structure"`
4. Conecte ao repositório remoto com `git remote add origin <url-do-repositorio>`
5. Envie com `git push -u origin main`
