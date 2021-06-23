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
Utilizziamo tutti le stesse icone, quindi le icone di bootstrap


# Classi immagine Header pagina

Per quanto riguarda gli header delle pagine con l'immagine di sfondo e il titolo sul blur dovete semplicemente usare questa struttura:

``` 
  <div class="background-image-heading classe_personalizzata_con_immagine_di_bg">
    <div class="blurred-background-title">
      <h1>Title</h1>
    </div>
  </div>
```

Poi nel file .scss del vostro componente dovrete fare uan classe, che in questo caso è " **classe_personalizzata_con_immagine_di_bg**
con i seguenti attributi

```

.classe_personalizzata_con_immagine_di_bg{
    background-image: url('url_immagine');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

```

# Classe sottotitoli con gradiente rosso

Nel file global-styles.scss c'è una classe per i sottotitoli il gioco è lo stesso di prima, quindi utilizzate qusta struttura e chiamate la classe subtitle-gradient

``` 
  <div  class="subtitle-gradient">
    <h3>Sottotitolo</h3>
  </div>
```

# Bottoni 

Il button avrà classe **btn** di bootstrap e poi utilizzate la classe che c'è in *global-styles.scss* che si chiama button-outline o button-fill


é una classe generica quindi se dovrete allungare il bottone o cambiarci il colore dovrete fare delle classi apposite all'interno del componente che usate.

