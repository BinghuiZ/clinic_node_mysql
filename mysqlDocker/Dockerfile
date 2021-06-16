FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD="root"
ENV MYSQL_DATABASE="clinic"
ENV MYSQL_PASSWORD="root"

COPY clinicDB.sql /docker-entrypoint-initdb.d

# VOLUME /var/lib/mysql


# EXPOSE 3306

