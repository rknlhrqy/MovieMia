FROM microsoft/dotnet
WORKDIR /app
COPY . .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet MovieMia.dll