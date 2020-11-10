3) Suponha que você tem uma API que roda 24/7 e que atende a uma enorme quantidade de requisições. 
Para suportar o tráfego, existem várias instâncias desta aplicação rodando num cluster Kubernetes.
Atualmente, esta aplicação utiliza SQL Server como forma de persistir seus dados:
No entanto, o time de engenharia deseja migrar de banco para o PostgreSQL. Como você faria para migrar a aplicação sem downtime e sem perda de dados? 
(Obs.: para esse problema, assuma que o schema é completamente compatível entre os dois SGBDs e nenhum tipo de conversão ou tratamento é necessário; precisamos apenas garantir que a aplicação passe de um banco para outro sem downtime e sem perda de dados.)

**Resposta**:
    - Num primeiro momento, eu configuraria o outro datasource (Postgres) e apontaria minha camada de serviço para os dois bancos (Antiga SQLServer e nova PostgresSQL) - fazendo com que toda requisição a partir de um determinado momento fosse persistida nos dois bancos ao mesmo tempo. Após analise e verificação que a API está persistindo os dados nos 2 databases sem perda de dados ou erros de conexão, deixaria de apontar para o banco antigo e faria uma migração de dados a partir de uma data de corte segura dos dados anteriores à solução.