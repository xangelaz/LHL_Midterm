-- Users table seeds here (Example)
INSERT INTO users (id, name, email, password)
VALUES (1, 'Mark', 'm@email.com', 'password');
INSERT INTO users (id, name, email, password)
VALUES (2, 'Angela', 'a@email.com', 'password');
INSERT INTO users (id, name, email, password)
VALUES (3, 'Ryan', 'r@email.com', 'password');

INSERT INTO stories (creator_id, title, contents, date_created, complete)
VALUES (1, 'Naruto', 'A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf village in the Land of Fire, one of the Five Great Shinobi Countries in the Ninja World. In response, the leader of Konoha and the Fourth Hokage, Minato Namikaze, at the cost of his life, seals the fox inside the body of his newborn son, Naruto Uzumaki, making him a host of the beast. Naruto is often scorned by Konohas villagers for being the host of the Nine-Tails. ', '2008-10-11', FALSE);
INSERT INTO stories (creator_id, title, contents, date_created, complete)
VALUES (2, 'Attack on Titan', 'Eren Yeager is a boy who lives in the town of Shiganshina, located on the outermost of three circular walls which protect their inhabitants from Titans. In the year 845, the first wall (Wall Maria) is breached by two new types of Titans, the Colossal Titan and the Armored Titan. During the incident, Erens mother is eaten by a Smiling Titan while Eren escapes. He swears revenge on all Titans and enlists in the military along with his childhood friends Mikasa Ackerman and Armin Arlert.', '2013-03-12', FALSE);
INSERT INTO stories (creator_id, title, contents, date_created, complete)
VALUES (3, 'Spy x Family', 'In order to maintain the state of peace between the rival nations of Westalis and Ostania, a Westalian agent code-named "Twilight" is tasked with spying on Donovan Desmond, leader of the National Unity Party within Ostania. However, due to Desmond being notoriously reclusive, the only way Twilight can get close to him is to enroll a child in the same private school as Desmonds sons and pose as a fellow parent.', '2019-03-25', FALSE);
INSERT INTO stories (creator_id, title, contents, date_created, complete)
VALUES (1, 'My Hero Academia', 'Izuku Midoriya is a young man who dreams of becoming a Hero despite being bullied by his childhood friend Katsuki Bakugo for lacking a Quirk. After an encounter with his idol, All Might, who is the worlds greatest hero, Izuku is chosen by All Might to inherit his Quirk One For All and become his successor, as All Might was severely injured by his arch-nemesis One For All.', '2023-03-25', FALSE);

INSERT INTO contributions (contents, date_created, upvotes, accepted, user_id)
VALUES ('due to Desmond being notoriously reclusive, the only way Twilight can get close to him is to enroll a child in the same private school as Desmonds sons and pose as a fellow parent.', '2019-03-25', 1, FALSE, 2);
INSERT INTO contributions (contents, date_created, upvotes, accepted, user_id)
VALUES ('During his time in the military, Eren', '2023-03-25', 3, FALSE, 1);
INSERT INTO contributions (contents, date_created, upvotes, accepted, user_id)
VALUES ('Naruto then', '2023-03-26', 3, FALSE, 3);
