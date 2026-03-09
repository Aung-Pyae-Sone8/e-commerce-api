CREATE TABLE IF NOT EXISTS  `products` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`descriptoin` text,
	`image` varchar(255),
	`price` double NOT NULL,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
