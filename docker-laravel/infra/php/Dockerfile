FROM php:8.1-fpm-buster

ENV COMPOSER_ALLOW_SUPERUSER=1 \
  COMPOSER_HOME=/composer

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

RUN apt-get update && \
  apt-get -y install --no-install-recommends git unzip libzip-dev libicu-dev libonig-dev && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  docker-php-ext-install intl pdo_mysql zip bcmath

#COPY ./php.ini /usr/local/etc/php/php.ini
COPY ./infra/php/php.ini /usr/local/etc/php/php.ini

WORKDIR /data

#追記 by akaike
COPY ./src/ ./

RUN composer install
RUN chmod -R 777 storage bootstrap/cache
RUN cp .env.example .env
RUN php artisan key:generate && \
  php artisan storage:link