CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`content` text NOT NULL,
	`status` text,
	`created_at` text DEFAULT (current_timestamp) NOT NULL
);
