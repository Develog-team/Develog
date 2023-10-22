FROM openjdk:17-jdk-slim as builder
ARG JAR_FILE=build/libs/application.jar
COPY ${JAR_FILE} ./application.jar
ENV TZ=Asia/Seoul
ENTRYPOINT ["java","-jar","./appplication.jar"]

#WORKDIR /app
#COPY . .
#RUN ./gradlew bootJar
#WORKDIR /app
#FROM openjdk:17-jdk-slim
#WORKDIR /app
#COPY --from=builder /app/application/build/libs/application.jar app.jar
#EXPOSE 8080