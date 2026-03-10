CREATE TABLE IF NOT EXISTS `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`role` varchar(255) NOT NULL DEFAULT 'user',
	`name` varchar(255),
	`address` text,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
