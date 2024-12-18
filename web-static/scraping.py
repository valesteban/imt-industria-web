import requests
from bs4 import BeautifulSoup

# URL de la página
url = "https://www.oracle.com/cl/"

# Obtener el HTML de la página
response = requests.get(url)
html = response.text

# Analizar el HTML
soup = BeautifulSoup(html, "html.parser")

# Guardar el HTML en un archivo
with open("pagina.html", "w", encoding="utf-8") as f:
    f.write(html)

# Buscar las hojas de estilo CSS
for link in soup.find_all("link", {"rel": "stylesheet"}):
    css_url = link.get("href")
    if css_url.startswith("http"):
        css_response = requests.get(css_url)
        with open(css_url.split("/")[-1], "w", encoding="utf-8") as f:
            f.write(css_response.text)
