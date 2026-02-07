---
title: "Šuplík"
layout: post
tags:
  - post
  - portfolio
  - web
desc: 'Digitální šuplík na nápady'
date: 2026-02-07
permalink: '/post/suplik.html'
lang: cs
alternateUrl: '/post/drawer.html'
alternateLang: en

img: '/assets/images/posts/010-lightbulb.png'
---

<p>{{ date | postDate }}</p>

# Šuplík: Digitální šuplík na nápady

[suplik.hippou.cz](https://suplik.hippou.cz/)

Bylo něco po osmé hodině večer a měl jsem chuť něco vytvořit. Chvilku jsem laškoval s ChatGPT, jestli mi poradí téma na dvouhodinový projekt, ale nic mi nepřišlo zajímavé. Dovedlo mě to ale k tomu, že mě často něco napadne, nějaká milá drobnička, a pak na ni zapomenu.

Napadlo mě proto vytvořit si digitální šuplík, do kterého ten nápad hodím (a pravděpodobně se k němu už nikdy nevrátím). Jasně, určitě by stačilo vytvořit si na to stránku v Notion, poznámkách na telefonu nebo dokument na Drivu. Líbila se mi ale představa, že to bude pověšené veřejně a že nápad do šuplíku může hodit kdokoli. Nejde o praktičnost, jde o pocit.

Trochu rozmanitější to bylo po technické stránce, kde jsem si chtěl vyzkoušet nové věci. Chtěl jsem to vyřešit jako jednoduchou webovku, která si ukládá data. Hledal jsem, jestli existují online hostované databáze, kam si pro miniprojekty můžete ukládat zadarmo. Samotnou webovku jsem pak chtěl hostovat jako obvykle na GitHub Pages.

## Supabase

Našel jsem [Supabase](https://supabase.com/), Postgres hosting pro vývojáře, kde dostanete databázi, API i autentizaci a tohle všechno je dostupné už ve free tieru. Cool. Registrace a vytvořil jsem si tabulku na nápady. Vlastně měla jen jeden významový sloupec s textem a pak už jen ID a čas vytvoření. Pak bylo potřeba nastavit, jaké operace půjde dělat přes API (načíst záznamy, přidat nový).

Následně jsem s Claudem vyvibekódoval webovku: připojení k databázi, načtení dat, výpis na web a k tomu CSS styly. Překvapilo mě, že celý web vznikl prakticky na jeden prompt a pak jsme už jen jemně ladili. V konfiguraci bylo potřeba nastavit URL vzdálené databáze a API token.

Nakonec jsem si ještě nechal vygenerovat deploy manifest pro GitHub a šlo se do živého. Celý projekt byl hotový za necelé dvě hodiny, což byl můj záměr. Radost.

## PocketBase

Zhruba po dvou týdnech se ale databáze v Supabase pauznula kvůli neaktivitě. Upřímně úplně nevím, co přesně ta „neaktivita" znamená – obden jsem do [Šuplíku](https://suplik.hippou.cz/) nějaký nápad přidal nebo si je aspoň zobrazil, takže nějaký minimální traffic tam byl. OK. Databázi šlo odpauznout a ve free tieru se dalo bez problémů pokračovat.

Já si ale tou dobou hrál se svým domácím serverem, tak jsem se rozhodl to zkusit předělat. Narazil jsem na projekt [PocketBase](https://pocketbase.io/), což je hrozně cute wrapper nad SQLite, který z ní udělá instantní backend. PocketBase je ještě dost ve vývoji, tak jsem zvědavý, jaké funkce budou přibývat. Zatím ale nemá oficiální Docker image. V dokumentaci je naštěstí popsané, jak si Dockerfile napsat a image si vybuildit sám, což jsem udělal.

Instalace nebyla úplně smooth, ale povedlo se a PocketBase jsem na svém serveru roztočil.

Pak už to bylo snadné. Exportovat data ze Supabase, nahrát je do PocketBase (respektive, import se mi nepovedl, takže jsem těch osm řádků překopíroval ručně), nastavit veřejný přístup, upravit připojení k databázi v kódu (jeden prompt pro Claude) a deploy. Funguje. Znovu radost.

Takže pokud někdy dostanete nápad, který si budete chtít odložit do šuplíku, klidně použijte [Šuplík](https://suplik.hippou.cz/). A pokud se budete nudit a hledat inspiraci, můžete se do [Šuplíku](https://suplik.hippou.cz/) podívat a třeba se do něčeho pustit.

Repozitář projektu najdete na [GitHubu](https://github.com/RadekDobrovolny/suplik).

Hezké tvoření přeju!
