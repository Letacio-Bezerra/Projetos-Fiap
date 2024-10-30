-- Inserção de dados na tabela cidadãos
INSERT INTO cidadãos (id, nome, idade, profissão, hobby, status_criminal) VALUES
(1, 'Carlos Souza', 28, 'Contador', 'Fotografia', 1),
(2, 'Maria Oliveira', 42, 'Professora', 'Cozinhar', 0),
(3, 'Ana Santos', 37, 'Engenheira', 'Caminhar ao ar livre', 1),
(4, 'Roberto Lima', 45, 'Contador', 'Pescar', 0),
(5, 'Fernando Reis', 32, 'Artista', 'Escalada', 0),
(6, 'Patrícia Gomes', 29, 'Advogada', 'Leitura', 1),
(7, 'Lucas Pereira', 27, 'Estudante', 'Videogames', 0),
(8, 'Beatriz Silva', 41, 'Enfermeira', 'Jardinagem', 0),
(9, 'Tiago Alves', 36, 'Desempregado', 'Ciclismo', 0),
(10, 'Sofia Martins', 33, 'Vendedora', 'Caminhadas', 0),
(11, 'Renato Costa', 39, 'Empresário', 'Jogar futebol', 1),
(12, 'Juliana Nunes', 30, 'Contador', 'Artesanato', 0),
(13, 'Rafael Teixeira', 35, 'Motorista', 'Fotografia', 1),
(14, 'Camila Dias', 28, 'Recepcionista', 'Dança', 0),
(15, 'Fábio Silva', 31, 'Padeiro', 'Cozinhar', 0),
(16, 'Tânia Lima', 24, 'Designer', 'Pintura', 0),
(17, 'Ricardo Martins', 50, 'Professor', 'Escrever', 1),
(18, 'João Silva', 34, 'Contador', 'Jogar Xadrez', 0),
(19, 'Patrícia Alves', 27, 'Cozinheira', 'Dança', 0),
(20, 'Lucas Santos', 23, 'Estudante', 'Corrida', 0),
(21, 'Nina Costa', 40, 'Arquiteta', 'Viajar', 1),
(22, 'Filipe Andrade', 38, 'Engenheiro', 'Escalada', 0),
(23, 'Tatiane Nunes', 29, 'Artista', 'Dança', 0),
(24, 'Gustavo Almeida', 34, 'Mecânico', 'Fotografia', 0),
(25, 'Karla Pinto', 35, 'Gerente', 'Caminhadas', 1);


-- Inserção de dados na tabela eventos
INSERT INTO eventos (evento_id, nome_evento, data_evento, local_evento, descrição) VALUES
(1, 'Feira de Rua', '2024-10-15', 'Praça Central', 'Uma feira ao ar livre com vendedores locais, música e artesanato.'),
(2, 'Encontro de Contadores', '2024-10-22', 'Auditório Central', 'Evento exclusivo para profissionais da área de contabilidade.'),
(3, 'Festival da Cidade', '2024-10-18', 'Praça Central', 'Festival anual que celebra a história e a cultura da cidade com diversas apresentações e atividades.'),
(4, 'Oficina de Artes', '2024-10-15', 'Praça Central', 'Oficina prática para iniciantes e entusiastas explorarem técnicas artísticas.'),
(5, 'Comício Público', '2024-10-17', 'Estação de Trem', 'Reunião pública com discursos e discussões sobre assuntos da comunidade.'),
(6, 'Festival de Inverno', '2024-10-18', 'Praça Central', 'Festival de inverno com atrações culturais, comidas e bebidas típicas da estação.'),
(7, 'Reunião da Comunidade', '2024-10-19', 'Centro Comunitário', 'Reunião dos moradores para discutir melhorias e atividades locais.'),
(8, 'Feira Noturna', '2024-10-20', 'Praça Central', 'Uma feira com diversos vendedores, comidas e apresentações musicais à noite.'),
(9, 'Concerto de Música', '2024-10-18', 'Estação de Trem', 'Apresentação musical com bandas locais e regionais ao vivo.'),
(10, 'Palestra de Segurança', '2024-10-16', 'Centro Comunitário', 'Palestra sobre segurança pessoal e comunitária com especialistas da área.'),
(11, 'Encontro de Amigos', '2024-10-20', 'Beco do Centro', 'Um evento de socialização com várias atividades, incluindo um torneio de xadrez.'),
(12, 'Festival de Dança', '2024-10-20', 'Beco do Centro', 'Um festival com danças de várias culturas e performances ao vivo.'),
(13, 'Apresentação Teatral', '2024-10-20', 'Beco do Centro', 'Teatro ao ar livre com peças de diferentes gêneros e estilos.'),
(14, 'Feira de Artesanato', '2024-10-20', 'Beco do Centro', 'Feira com artesanato local e oficinas de criação.');



-- Inserção de dados na tabela aparições_locais
INSERT INTO aparições_locais (id, cidadão_id, local, data_visita, horário_visita, evento_id) VALUES
(1, 7, 'Estação de Trem', '2024-10-17', '14:00:00', 5),
(2, 9, 'Beco do Centro', '2024-10-20', '19:30:00', 11),  
(3, 19, 'Centro Comunitário', '2024-10-20', '10:00:00', 11),
(4, 24, 'Auditório Central', '2024-10-22', '10:30:00', 2),
(5, 1, 'Praça Central', '2024-10-18', '10:00:00', 6),
(6, 4, 'Centro Comunitário', '2024-10-19', '10:30:00', 7),
(7, 10, 'Auditório Central', '2024-10-22', '10:00:00', 2),
(8, 12, 'Praça Central', '2024-10-18', '17:45:00', 6),
(9, 11, 'Praça Central', '2024-10-20', '21:00:00', 8),
(10, 18, 'Beco do Centro', '2024-10-20', '19:00:00', 11), 
(11, 8, 'Auditório Central', '2024-10-22', '10:00:00', 2),
(12, 5, 'Centro Comunitário', '2024-10-19', '10:30:00', 7),
(13, 3, 'Beco do Centro', '2024-10-20', '18:30:00', 11), 
(14, 20, 'Praça Central', '2024-10-20', '18:30:00', 11),
(15, 21, 'Praça Central', '2024-10-20', '19:30:00', 11),
(16, 22, 'Centro Comunitário', '2024-10-20', '20:00:00', 11),
(17, 6, 'Beco do Centro', '2024-10-20', '19:15:00', 11), 
(18, 25, 'Centro Comunitário', '2024-10-19', '10:30:00', 7);


-- Inserção de dados na tabela relatórios_testemunhas
INSERT INTO relatórios_testemunhas (id, cidadão_suspeito, descrição) VALUES
(1, 'Fernando Reis', 'Fernando viu alguns conhecidos, mas não notou atitudes estranhas durante o evento.'),
(2, 'Ana Santos', 'Ana estava próxima ao local do crime e demonstrou nervosismo durante o depoimento. Ela não soube explicar sua presença no evento.'),
(3, 'Juliana Nunes', 'Juliana estava distante da área do crime e não tinha informações relevantes.'),
(4, 'Tiago Alves', 'Tiago foi visto circulando na área do crime momentos antes do incidente. Ele parecia agitado e não deu respostas claras quando questionado.'),
(5, 'Roberto Lima', 'Roberto estava envolvido em uma conversa e não percebeu movimentação suspeita.'),
(6, 'Patrícia Gomes', 'Patrícia estava distraída com o celular e não percebeu a confusão que ocorreu.'),
(7, 'Sofia Martins', 'Sofia estava conversando com um grupo em outra área e não viu o que ocorreu.'),
(8, 'Lucas Pereira', 'Lucas passou a maior parte do evento em uma área mais afastada, sem perceber o que acontecia.');
