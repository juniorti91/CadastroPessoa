
-- Criação das tabelas do banco de dados
create table Pessoa
(
	Id int identity(1,1) primary key,
	Nome nvarchar(30) not null,
	DataNascimento date not null,
	Sexo nchar not null,
	EstadoCivil nvarchar(15) not null,
	CPF nvarchar(11) not null,
	CEP nvarchar(8) not null,
	Endereco nvarchar(100) not null,
	Numero nvarchar(10) not null,
	Complemento nvarchar(50) not null,
	Bairro nvarchar(30) not null,
	Cidade nvarchar(30) not null,
	UF nvarchar(2) not null
);