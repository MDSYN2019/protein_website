# PocketScope Django Template

A sleek, discreet starter template for a membrane protein pocket prediction product.

## Quick start

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Open `http://127.0.0.1:8000/`.

## Where to customize

- Page structure: `showcase/templates/showcase/index.html`
- Styles: `showcase/static/showcase/css/style.css`
- Interactive UI logic: `showcase/static/showcase/js/app.js`
- Django routing/view: `showcase/urls.py`, `showcase/views.py`

## Suggested next steps

1. Replace mock pocket generation in `app.js` with calls to your backend endpoint.
2. Add an upload/API panel for PDB or FASTA input.
3. Add charts (confidence distributions, residue-level heatmaps).
4. Integrate auth if you need private customer demos.
