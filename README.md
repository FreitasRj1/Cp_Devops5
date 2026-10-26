# CP05 - Pipeline DevSecOps Completo

Repositório de referência com pipeline de segurança em GitHub Actions.

## Estrutura

- `Dockerfile` e `site/`: site estático servido por nginx.
- `.github/workflows/security.yml`: pipeline com 3 jobs (Gitleaks, Semgrep, Trivy).
- `sabotagem/`: arquivos usados nos testes de sabotagem (NÃO entram na main).

## Como rodar as provas

### Setup
```bash
git init && git add . && git commit -m "pipeline de seguranca"
git branch -M main
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
```
Print 1: aba Actions com os 3 jobs verdes na main.

### Prova 1 - Gitleaks barra segredo
```bash
git checkout -b prova-gitleaks
cp sabotagem/prova1-segredo/config.js config.js
git add config.js && git commit -m "teste: segredo falso"
git push -u origin prova-gitleaks
```
Resultado esperado: job `gitleaks` FALHA (aws-access-token). Tire print.

### Prova 2 - Semgrep aponta eval
```bash
git checkout main && git checkout -b prova-semgrep
cp sabotagem/prova2-eval/app.js app.js
git add app.js && git commit -m "teste: eval vulneravel"
git push -u origin prova-semgrep
```
Resultado esperado: job `semgrep` FALHA apontando `eval`. Tire print.

### Prova 3 (opcional) - Trivy barra CVE critico
Troque a base do Dockerfile para uma imagem antiga (ex.: `FROM nginx:1.14`), faca push em um branch e veja o job `trivy` falhar.

## Limpeza
Apague os branches de prova depois dos prints. Nunca faca merge de segredo, mesmo falso.
