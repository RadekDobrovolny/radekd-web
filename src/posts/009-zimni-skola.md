---
title: "Překračování hranic"
layout: post
tags: 
  - post
  - portfolio
  - workshop
  - web
  - fun
desc: 'Digitální artefakt: workshop na Zimní škole KISKu'
date: 2025-03-24
permalink: '/post/prekracovani-hranic.html'

img: '/assets/images/posts/konev.png'
---

<p>{{ date | postDate }}</p>

# Digitální artefakt: workshop na Zimní škole KISKu

*Na Zimní škole KISKu jsem vedl workshop, ve kterém jsme se pokusili vytvořit společný digitální artefakt – vzpomínku, co přežije fyzický čas i prostor. Povedlo se? A co všechno se dělo během jedné intenzivní hodiny a půl v Nové Cvernovce?*

## Ideace

V polovině února 2025 jsem byl na akci pořádané studenty KISKu – první Zimní škole, komunitní události, kterou kompletně realizovali studenti a obsah přinášeli sami účastníci. 

<div class="polaroid left">
    <img src="/assets/images/posts/zs-prostor.jpg" alt="Hlavní sál">
    <span>hlavní sál</span>
</div>

Akce se konala v Bratislavě, v kulturním centru Nová Cvernovka. Měl jsem velkou chuť nasát atmosféru tohohle prostředí, udělat si výlet, poznat nové lidi a nahlédnout do současné nálady a témat studentů. A nakonec to bylo moc prima.

Při registraci bylo potřeba rovnou říct, čím chcete do programu přispět. Na výběr byly přednášky, workshopy a další podobné formáty. Napsal jsem trochu obecnou odpověď, protože jsem netušil, jaké budou vstupní podmínky – hlavně čas a počet lidí. Nakonec jsme se dohodli, že udělám workshop. Konkrétně: pokusíme se společně vytvořit digitální artefakt.

Nakonec jsme se domluvili na poměrně vražedných parametrech. Časová dotace hodina a půl, cca 15 účastníků. *Uf.* Moje ideální představa byla poloviční počet lidí a naopak víc než dvě hodiny času. No co – bude to výzva a bude to intenzivní.

## Téma a ukotvení

Hodně se mi líbil claim celé akce: překračování hranic. Mým cílem bylo během workshopu vytvořit nějaké digitální dílo – vzpomínku na tuto akci – na kterém se budou podílet všichni účastníci.

<div class="polaroid right">
    <img src="/assets/images/posts/zs-prezijeme.jpg" alt="Přežijeme?">
    <span>Artefakt</span>
</div>

Nejdřív ale trochu teorie. Snažil jsem se na úvod představit, co to vlastně digitální artefakty jsou, a ukázat pár příkladů. Mluvili jsme o tom, že se pohybujeme na pomezí digitální tvorby, umění, programování a generativního umění – a že hranice mezi těmito oblastmi jsou často dost rozmazané. Nechtěl jsem zabřednout do debat, jestli se jedná o umění, nebo ne. To pro mě v ten moment nebylo důležité. Vnímám digitální artefakty jako nástroj sebevyjádření.

Zmínil jsem projekt Genuary, web Another Useless Web a představil některé tvůrce na Instagramu. Na teoretický úvod jsme měli asi 15 minut – snažil jsem se toho předat co nejvíc, ale v tomhle čase to možná působilo trochu krkolomně.

## Role a rozdělení

Pak už jsem představil, co bychom se mohli pokusit vytvořit my. Chtěl jsem pracovat s knihovnou p5.js, kterou jsem velmi stručně představil: máme plátno, na kterém můžeme tvořit, a výstup pak umístit na web. Cílem bylo pokusit se vyjádřit atmosféru zimní školy a uchovat ji v digitálním světě – něco, co třeba i za pět let vyvolá nějaký pocit.

<div class="polaroid left">
    <img src="/assets/images/posts/zs-rajcata.jpg" alt="Zelenina">
    <span>zelenina</span>
</div>

Měl jsem připravené malé podskupinky, do kterých se účastníci rozdělili.

První skupinka měla za úkol sbírat vizuální vjemy – chodit po prostoru a udělat pár fotek.

Druhá skupinka sbírala zvuky – ruchy, hlášky, nebo i krátké vzkazy.

Třetí se soustředila na texty – úryvky z přednášek, materiálů, nápisy a další textové útržky, které na ně nějak působily.

Předposlední skupina měla na starost vizuální styl – fonty, barvy, grafické prvky.

Poslední skupinka byli interakční designéři – jejich úkolem bylo vymyslet, jak se bude stránka chovat, co se bude zobrazovat, jak bude vypadat interakce.

<div class="polaroid right">
    <img src="/assets/images/posts/zs-koule.jpg" alt="Disco">
    <span>Disco</span>
</div>

Účastníci si sami vybrali skupinku a vyrazili sbírat. Na sběr dat jsme měli asi půl hodiny. Já si přisedl ke skupince designerů a pomáhal určovat hranice mezi tím, co jsme schopni realizovat, a co už by bylo příliš náročné.

## Let them cook

Hlavní myšlenka byla práce s tématem „*překračování hranic*“. Uprostřed obrazovky se mají zobrazovat dvě kontrastní textová sdělení. Obrazovka je rozdělená fluidní vertikální hranicí. A po obrazovce se pohybují grafické objekty, které se při překročení hranice změní. Při dotyku se zastaví a přehrají náhodný zvuk. Ok, myšlenky jsme měli. Na papíře to vypadalo proveditelně – i když jsem popravdě netušil, jak rychle to půjde dát dohromady.

Půl hodina uplynula, účastníci se vrátili a začali jsme prezentovat nasbírané materiály. Každá skupina přidala kontext, proč vybrali právě tohle. Bylo to bohaté, rozmanité. Materiálu bylo dost – ale ne tolik, aby nás zahltil. Měl jsem radost.

V téhle fázi jsme ještě doladili plán interakce a celkový koncept. A tím jsme se dostali na konec časového rámce workshopu.

## Realizace

Já si pak všechny materiály posbíral a šlo se na večeři. A večer jsem se pustil do realizace. Měl jsem připravenou webovou šablonu s p5.js canvasem. Vložil jsem pozadí, vytvořil panel pro zobrazování textů, napsal funkci na náhodný výběr a zobrazení. Přidal jsem pohyb obrázků. Měl jsem trochu strach z té „fluidní hranice“ uprostřed obrazovky. Hojně jsem využíval ChatGPT pro generování kódu a já ho pak skládal dohromady jako puzzle a ladil detaily. Nakonec jsem přidal zvuky a dotykovou interakci. Asi za hodinu a půl byl výsledek hotový – a mohl jsem ho prezentovat ostatním.

<div class="polaroid left">
    <img src="/assets/images/posts/zs-valentin.jpg" alt="Valentín">
    <span>Valentín</span>
</div>

Pak už jsem jen dolaďoval zobrazení na mobilních telefonech a opravil přehrávání zvuků. Měl jsem z výsledku opravdu radost. Líbilo se mi, jak rychle se dá takový artefakt vytvořit – když má člověk materiály, vizi a pomoc od AI.

## Uvařeno

Výsledek jsem nahrál do repozitáře na GitHubu, kde zároveň používám GitHub Pages pro hosting. Digitální artefakt si můžete prohlédnout zde: [radekdobrovolny.github.io/zimni_skola_2025](https://radekdobrovolny.github.io/zimni_skola_2025/).

Měl jsem radost, že se cíl workshopu podařilo naplnit. Že každý přispěl svým dílem do společného, komunitního výsledku. A teď se uvidí – jestli se k tomu artefaktu někdo za pár let vrátí, nebo upadne v zapomnění.

Rád bych si tenhle workshop někdy zopakoval. Ideálně v méně divoké formě, kdy bude více času, s menší skupinou a větším zapojením účastníků do tvorby v p5.js. Ukázat, jak s pomocí ChatGPT přetavit nápady do kódu a rozhýbat je v digitálním prostoru.
