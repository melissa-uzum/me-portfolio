# Laddningstidsanalys

I denna rapport analyserar jag laddningstider och optimeringsmöjligheter för tre utvalda webbplatser: **Apple**, **Pågen**, och **Elden Ring: Shadow of the Erdtree**.

## Urval

Jag valde följande webbplatser:
1. **Pågen**: (https://pagen.se)
2. **Apple**: (https://www.apple.com)
3. **Elden Ring: Shadow of the Erdtree**: (https://en.bandainamcoent.eu/elden-ring/elden-ring/shadow-of-the-erdtree)
Urvalet är detsamma som tidigarte analys.

## Metod

Jag använde följande verktyg för att samla in och analysera data:
- **[Google PageSpeed Insights](https://pagespeed.web.dev/)**: För att mäta laddningstid och prestanda på mobil och desktop.
- **Browser Developer Tools (DevTools)**: För att mäta laddningstid, antal resurser och total sidstorlek.
- **Google Kalkylark**: För att dokumentera alla mätningar. [Länk till kalkylarket](https://docs.google.com/spreadsheets/d/e/2PACX-1vTn7AzJP3EmS6k1rWbTRP5Xyzg7j2Eo8V4ZHJ0jvhV_DYgA1GQYfjwBdnpOwHXmsT8RDm4KyNdnVDhL/pubhtml
).

### Inbäddat kalkylark
<section aria-labelledby="google-sheet-section">
    <h2 id="google-sheet-section">Inbäddat kalkylark</h2>
    <p>Här visas data som sammanställts från laddningstidsanalysen.</p>
    <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTn7AzJP3EmS6k1rWbTRP5Xyzg7j2Eo8V4ZHJ0jvhV_DYgA1GQYfjwBdnpOwHXmsT8RDm4KyNdnVDhL/pubhtml?widget=true&amp;headers=false"
        width="700"
        height="500"
        title="Google Kalkylark: Laddningstidsanalys">
    </iframe>
</section>

### Steg i analysen
1. För varje webbplats valde jag tre sidor att analysera.
2. Jag mätte laddningstid och prestanda tre gånger per sida och tog snittvärden.
3. Jag sparade rådata i kalkylarket och sammanställde resultaten i denna rapport.
4. Jag identifierade förbättringsmöjligheter för varje webbplats baserat på mätningarna.

## Resultat

### **Apple**
#### Snapshot
![Snapshot av Apple](/~meuz24/dbwebb-kurser/design/me/portfolio/content/analysis/img/apple.png)

#### Sidor analyserade
[Startsida](https://www.apple.com)


#### Resultat från Google PageSpeed Insights
#### **Mobil**
- **Betyg:** 49
- **Laddningstid:**
  - **LCP (Largest Contentful Paint):** 2.6s
  - **FCP (First Contentful Paint):** 2.7s
  - **INP (Interaction to Next Paint):** 180ms
  - **TTFB (Time to First Byte):** 0.5s
- **Total sidstorlek:** 13.1 MB
- **Antal förfrågningar:** 323
- **Accessibility:** 97
- **Best Practices:** 100

#### **Desktop**
- **Betyg:** 81
- **Laddningstid:**
  - **LCP (Largest Contentful Paint):** 1.9s
  - **FCP (First Contentful Paint):** 1.9s
  - **INP (Interaction to Next Paint):** 51ms
  - **TTFB (Time to First Byte):** 0.3s
- **Total sidstorlek:** (Optional if not measured)
- **Antal förfrågningar:** 3181
- **Accessibility:** 93
- **Best Practices:** 100
- **SEO:** 92

#### **DevTools-mätningar (snittvärden)**
- **Laddningstid:** 5.47 sekunder
- **Totalt antal resurser:** 3181
- **Total resource storlek:** 242.9 MB
- **Överförd data:** 242.3 MB

#### Förbättringar
- Optimera bilder genom att använda modernare format som WebP.
- Implementera lazy-loading för resurser som inte behöver laddas direkt.
- Minska antalet requests och optimea stoera resurser som bilder, videor och JS filer.
---

### **Pågen**
#### Snapshot
![Snapshot av Pågen](/~meuz24/dbwebb-kurser/design/me/portfolio/content/analysis/img/pagen.png)

#### Sidor analyserade
1. [Startsida](https://www.pagen.se)

#### **Mobil**
- **Betyg:** 62
- **Laddningstid:**
  - **LCP (Largest Contentful Paint):** 2.1s
  - **FCP (First Contentful Paint):** 0.8s
  - **INP (Interaction to Next Paint):** 104ms
  - **TTFB (Time to First Byte):** 0.6s
- **Total sidstorlek:** 13.1 MB
- **Antal förfrågningar:** 323
- **Accessibility:** 79
- **Best Practices:** 96
- **SEO:** 85

#### **Desktop**
- **Betyg:** 89
- **Laddningstid:**
  - **LCP (Largest Contentful Paint):** 2.2s
  - **FCP (First Contentful Paint):** 0.9s
  - **INP (Interaction to Next Paint):** 45ms
  - **TTFB (Time to First Byte):** 0.6s
- **Total sidstorlek:** 13.1 MB
- **Antal förfrågningar:** 323
- **Accessibility:** 79
- **Best Practices:** 100
- **SEO:** 85

#### **DevTools-mätningar (snittvärden)**
- **Laddningstid:** 2.46 sekunder
- **Totalt antal resurser:** 323
- **Total resource storlek:** 13.1 MB
- **Överförd data:** 12.7 MB


#### Förbättringar
- Minifiera CSS och JavaScript.
- Optimera serverns svarstider.
- Försöka optimera mer och minska laddningstiden till underr 2s.

---

### **Elden Ring: Shadow of the Erdtree**
#### Snapshot
![Snapshot av Elden Ring](/~meuz24/dbwebb-kurser/design/me/portfolio/content/analysis/img/elden_ring.png)


#### Sidor analyserade
1. [Startsida](https://www.eldenring.com)

#### **Mobil**
- **Betyg:** 82
- **Laddningstid:**
  - **LCP (Largest Contentful Paint):** 2s
  - **FCP (First Contentful Paint):** 1s
  - **INP (Interaction to Next Paint):** 74ms
  - **TTFB (Time to First Byte):** 0.5s
- **Total sidstorlek:** 67.8 MB
- **Antal förfrågningar:** 328
- **Accessibility:** 77
- **Best Practices:** 100
- **SEO:** 92

#### **Desktop**
- **Betyg:** 82
- **Laddningstid:**
  - **LCP (Largest Contentful Paint):** 2s
  - **FCP (First Contentful Paint):** 1s
  - **INP (Interaction to Next Paint):** 74ms
  - **TTFB (Time to First Byte):** 0.5s
- **Total sidstorlek:** 67.8 MB
- **Antal förfrågningar:** 328
- **Accessibility:** 77
- **Best Practices:** 100
- **SEO:** 92

#### **DevTools-mätningar (snittvärden)**
- **Laddningstid:** 2.84 sekunder
- **Totalt antal resurser:** 328
- **Total resource storlek:** 67.8 MB
- **Överförd data:** 62.6 MB


#### Förbättringar
- Minska storleken på tunga resurser som bilder och videor.

---

## Sammanfattning

### Jämförelse
| Webbplats      | Mobil Betyg | Desktop Betyg | Laddningstid (sek) | Sidstorlek (MB) | Förfrågningar |
|-----------------|-------------|---------------|--------------------|-----------------|---------------|
| **Apple**       | 49          | 81            | 5.47              | 242.9           | 3181          |
| **Pågen**       | 62          | 89            | 2.46              | 13.1            | 323           |
| **Elden Ring**  | 82          | 82            | 2.84              | 67.8            | 328           |


### Rangordning
1. **Pågen**: Snabbast laddningstid på både mobil och desktop, samt minst resursanvändning med endast 323 förfrågningar och en sidstorlek på 13.1 MB.
2. **Elden Ring**: Relativt bra prestanda med hög poäng på mobil och desktop, men stor sidstorlek (67.8 MB) och något långsammare laddningstid (2.84 sekunder).
3. **Apple**: Långsammaste laddningstiden (5.47 sekunder) med extremt hög resursanvändning (3181 förfrågningar och 242.9 MB i sidstorlek), särskilt på mobil.


### Gränsvärde för snabbhet
Jag anser att en laddningstid under **2.5 sekunder** är snabb. I detta urval klarade endast **Pågen** detta mål konsekvent, medan **Apple** och **Elden Ring** ofta överskred gränsen.
