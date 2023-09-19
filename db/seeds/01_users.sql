-- Users table seeds here (Example)
INSERT INTO users (id, name, email, password)
VALUES (1, 'Mark', 'm@email.com', 'password');
INSERT INTO users (id, name, email, password)
VALUES (2, 'Angela', 'a@email.com', 'password');
INSERT INTO users (id, name, email, password)
VALUES (3, 'Ryan', 'r@email.com', 'password');

INSERT INTO stories (id, creator_id, title, contents, date_created, complete)
VALUES (1, 1, 'Naruto', 'A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf village in the Land of Fire, one of the Five Great Shinobi Countries in the Ninja World. In response, the leader of Konoha and the Fourth Hokage, Minato Namikaze, at the cost of his life, seals the fox inside the body of his newborn son, Naruto Uzumaki, making him a host of the beast.', '2008-10-11', FALSE);
INSERT INTO stories (id, creator_id, title, contents, date_created, complete)
VALUES (2, 2, 'Attack on Titan', 'Eren Yeager is a boy who lives in the town of Shiganshina, located on the outermost of three circular walls which protect their inhabitants from Titans. In the year 845, the first wall (Wall Maria) is breached by two new types of Titans, the Colossal Titan and the Armored Titan. During the incident, Erens mother is eaten by a Smiling Titan while Eren escapes. He swears revenge on all Titans and enlists in the military along with his childhood friends Mikasa Ackerman and Armin Arlert.', '2013-03-12', FALSE);
INSERT INTO stories (id, creator_id, title, contents, date_created, complete)
VALUES (3, 3, 'Spy x Family', 'In order to maintain the state of peace between the rival nations of Westalis and Ostania,[a] a Westalian agent code-named "Twilight" is tasked with spying on Donovan Desmond, leader of the National Unity Party within Ostania. However,', '2019-03-25', FALSE);

INSERT INTO contributions (id, contents, date_created, upvotes, accepted, story_id, user_id)
VALUES (1, 'due to Desmond being notoriously reclusive, the only way Twilight can get close to him is to enroll a child in the same private school as Desmonds sons and pose as a fellow parent.', '2019-03-25', 1, FALSE, 3, 2);
INSERT INTO contributions (id, contents, date_created, upvotes, accepted, story_id, user_id)
VALUES (2, 'During his time in the military, Eren', '2023-03-25', 3, FALSE, 2, 1);
INSERT INTO contributions (id, contents, date_created, upvotes, accepted, story_id, user_id)
VALUES (3, 'Naruto then', '2023-03-26', 3, FALSE, 1, 3);
