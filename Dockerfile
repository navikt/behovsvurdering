FROM docker.pkg.github.com/navikt/pus-decorator/pus-decorator

ENV APPLICATION_NAME=behovsvurdering

COPY /decorator.yaml /
COPY /build /app
