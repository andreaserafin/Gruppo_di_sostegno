# Gruppo_di_sostegno
Project work 2° anno. Gruppo di sostegno, implementazione parziale del sito ITS AltoAdriatico

- Angular JS
- Bootstrap (Framework grafico principale)
- Primeng (Framework grafico secondario per l'utilizzo di alcuni componenti)


# Per utilizzare i colori preimpostati:

  var(--bs-*codice_colore*);
  
  i codici dei colori li trovate a questo percorso --> itsAltoAdriatico\src\scss_variables\custom-variables.scss
  
  
  # Chart js Primeng (Prime Faces) Charts

Primeng dice che per utilizzare il componente 'Charts' è necessario installare chart.js,
tramite il comando 

~~npm install chart.sj --save~~

Installerà la versione 3.1.1 che darà un errore 

`ERROR TypeError: chart_js__WEBPACK_IMPORTED_MODULE_2__ is not a constructor`

Per risolverlo è necessario fare un downgrade di 'chart.js' alla versione 2.9.4, con il comando

`npm install chart.js@2.9.4`  

**ATTENZIONE l'import negli script (diversamente da come indicato da primng) dovrà essere il seguente**

`"node_modules/chart.js/dist/Chart.js"`


# Icone
Utilizziamo tutti le stesse icone, secondo me quindi utilizziamo quelle di Primeng che sono già installate e easy 
controllate qui: https://www.primefaces.org/primeng/showcase/#/icons
