FROM navikt/pus-decorator

ENV APPLICATION_NAME=behovsvurdering

COPY /decorator.yaml /
COPY /build /app
