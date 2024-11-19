FROM php

USER carlinhos

WORKDIR /var/app

COPY . .

# executa quando cria
RUN apt-get update && apt-get upgrade \
    apt-get install apache


RUN echo "varrtyerty"

EXPOSE 80

#executa quando inicia
CMD ["php", "index"]