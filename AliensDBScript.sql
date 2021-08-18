USE master
GO
CREATE DATABASE PersonDB;
USE PersonDB;
GO
CREATE TABLE Aliens (id int PRIMARY KEY IDENTITY(1,1), firstName nvarchar(255), lastName nvarchar(255)); 