# Behovsvurdering
================

En frontendapp som gjør det mulig for brukere å sjekke sine muligheter for å komme i arbeid. Dette er en del av behovsvurderingen veileder skal gjøre.

## Kjøre appen
```console
$ npm install
$ npm run start
```

## Deploy
Ved oppdatering av `nais-<dev/prod>.yaml` må det gjøres manuell deploy med `kubectl apply -f nais-<dev/prod>.yaml` i
riktig cluster og namespace.  

## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles via issues her på github.

### For NAV-ansatte

Er du ansatt i NAV kan du stille spørsmål på Slack i kanalen #fo-behovsvurdering.

## Konfigurere git blame til å ignorere spesifikke commits

Om du ønsker er det mulig å konfigurere git blame til å ignorere spesifikke commits definert i [.git-blame-ignore-revs](.git-blame-ignore-revs) (naviger til filen for å se hvilke commits som er ignorert for dette prosjektet).
Commits definert i denne filen vil ikke dukke opp i git blame. Det anbefales å konfigurere dette per git prosjekt da git blame vil feile dersom man feks. har konfigurert dette globalt men det ikke eksisterer en
ignore-fil med riktig navn i det gitte git prosjektet du står i. Se forøvrig git sin dokumentasjon for hvordan git blame og ignoring fungerer: [https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revltrevgt](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revltrevgt).

### Fremgangsmåte

`git config --local blame.ignoreRevsFile .git-blame-ignore-revs`

### Resette git blame dersom man har konfigurert regelen globalt ved et uhell

`git config --global --unset blame.ignoreRevsFile`
