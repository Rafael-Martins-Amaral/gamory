⚙️ Gamory — Especificação Técnica (SPEC)

---

## 🧱 1. Arquitetura

Aplicação web front-end com:
- HTML5
- CSS3 (Bootstrap + SCSS)
- JavaScript (ES6)
- jQuery
- JSON Server (API fake)

---

## 📁 2. Estrutura de Pastas

gamory/
 │
 ├── index.html
 ├── cadastro.html
 ├── lista.html
 │
 ├── assets/
 │ ├── css/
 │ │ ├── style.scss
 │ │ ├── style.css
 │ │
 │ ├── js/
 │ │ ├── app.js
 │ │ ├── api.js
 │ │ ├── storage.js
 │ │ ├── jquery.js
 │ │
 │ ├── img/
 │
 ├── db.json
 ├── package.json

---

## 🎨 3. Estilização

### Framework:
- Bootstrap 5

### SCSS:
- Variáveis de cor
- Mixins reutilizáveis

---

## 📱 4. Responsividade

- Mobile First
- Grid Bootstrap
- Flexbox
- Tipografia fluida com clamp()

---

## 📊 5. Modelo de Dados

### Entidade: Jogo

``json
{
 "id": 1,
 "titulo": "string",
 "genero": "string",
 "plataforma": "string",
 "nota": 1,
 "comentario": "string"
}

🧾 6. Formulário
Campos:
título (text)
gênero (select)
plataforma (select)
nota (radio ou number)
comentário (textarea)
Validação:
HTML5 (required)
JavaScript (regex)
jQuery (eventos)

💾 7. Armazenamento
LocalStorage:
localStorage.setItem("jogos", JSON.stringify(lista));

🌐 8. API (JSON Server)
Endpoint:
http://localhost:3000/jogos

Métodos:
GET
fetch(url)
POST
fetch(url, {
 method: "POST",
 body: JSON.stringify(data)
})
DELETE (opcional)
fetch(url + id, { method: "DELETE" })

🔄 9. API Pública (ViaCEP)
fetch(`https://viacep.com.br/ws/${cep}/json/`)

⚡ 10. jQuery
Uso:
Manipulação de DOM
Eventos de formulário

🔌 11. Plugin jQuery
Mask Plugin:
$("#cep").mask("00000-000");

🧪 12. Validações
Regex exemplo:
/^[A-Za-z0-9 ]+$/

🛠️ 13. Ferramentas
Node.js
NPM
JSON Server
Git
ESLint / Prettier

🚀 14. Execução do Projeto
Instalar dependências:
npm install
Rodar API:
json-server --watch db.json --port 3000

📌 15. Boas Práticas
Código modular
Separação de responsabilidades
Comentários claros
Versionamento com Git

✅ 16. Checklist Técnico
HTML estruturado
CSS responsivo
SCSS aplicado
JS modular
API integrada
LocalStorage
jQuery + plugin
