-- Criação do Banco de Dados
create database CadastroPessoas;

-- Use base de dados
use CadastroPessoas;

-- Criação das tabelas do banco de dados
create table Pessoa
(
	Id int identity(1,1) primary key,
	Nome nvarchar(200) not null,
	DataNascimento date not null,
	Sexo nchar not null,
	EstadoCivil nvarchar(15) not null,
	CPF nvarchar(11) not null,
	CEP nvarchar(8) not null,
	Endereco nvarchar(100) not null,
	Numero nvarchar(10) not null,
	Complemento nvarchar(50),
	Bairro nvarchar(30) not null,
	Cidade nvarchar(30) not null,
	UF nvarchar(2) not null
);
drop table pessoa

-- Inserir dados na tabela
insert into Pessoa (Nome, DataNascimento, Sexo, EstadoCivil, CPF, CEP, Endereco, Numero, Bairro, Cidade, UF)
  values ('Junior','24-06-1988','M','Solteiro',25478965476,45879623,'Rua dos caminhos',75,'Dom Avelar','Salvador','BA'),
		 ('Adroaldo','11-12-1958','M','Casado',78459595400,48795862,'Alameda dos anjos',75,'Castelo Branco','Salvador','BA');

-- Listar dados da tebela
select * from Pessoa;

-- Alterar dados da tabela
update Pessoa set Nome = 'Miguel', DataNascimento = '23-08-1997' where id = 2;

-- Deletar dados da tabela
delete from Pessoa where id = 2;