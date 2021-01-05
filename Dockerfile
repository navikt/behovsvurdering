FROM docker.pkg.github.com/navikt/pus-decorator/pus-decorator

ENV APPLICATION_NAME=behovsvurdering
ENV EXTRA_DECORATOR_PARAMS="&chatbot=false"

COPY /decorator.yaml /
COPY /build /app
