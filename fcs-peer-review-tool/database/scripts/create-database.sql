-- Drop the tables if they exist
DROP TABLE IF EXISTS `user_system_role`;
DROP TABLE IF EXISTS `user_password_reset_token`;
DROP TABLE IF EXISTS `user_course_role`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `system_roles`;
DROP TABLE IF EXISTS `password_reset_tokens`;
DROP TABLE IF EXISTS `migrations`;
DROP TABLE IF EXISTS `course_roles`;
DROP TABLE IF EXISTS `courses`;

-- Start a transaction
START TRANSACTION;

-- Create tables
CREATE TABLE IF NOT EXISTS `courses` (
    `id` INT(11) NOT NULL,
    `name` VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `course_roles` (
    `id` INT(11) NOT NULL,
    `role` VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `migrations` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `migration` VARCHAR(255) NOT NULL,
    `batch` INT(11) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(100) DEFAULT NULL,
    `token_creation` datetime NOT NULL
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `system_roles` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Insert data into system_roles table
INSERT INTO `system_roles` (`role`) VALUES
                                        ('Admin'),
                                        ('CourseCreator'),
                                        ('User');

CREATE TABLE IF NOT EXISTS `users` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `banner_id` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insert data into users table
INSERT INTO `users` (`first_name`, `last_name`, `banner_id`, `email`, `password`) VALUES
    ('Admin', '', 'B0000000000', 'admin@dal.ca', '$2y$10$2ng128zwu9jg.nEVAZxure9kYE/P9oquuKr7zBQdG1mkDMSI8XRSe');

CREATE TABLE IF NOT EXISTS `user_course_role` (
    `course_id` INT(11) NOT NULL,
    `course_roles_id` INT(11) NOT NULL,
    `users_id` INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY (`course_id`),
    INDEX `fk_user_course_role_courses1_idx` (`course_id`),
    INDEX `fk_user_course_role_course_roles1_idx` (`course_roles_id`),
    INDEX `fk_user_course_role_users1_idx` (`users_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `user_password_reset_token` (
    `password_reset_tokens_id` INT(11) NOT NULL,
    `users_id` INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY (`users_id`),
    INDEX `fk_user_password_rest_token_users1_idx` (`users_id`),
    INDEX `fk_user_password_rest_token_token` (`password_reset_tokens_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `user_system_role` (
    `system_roles_id` INT(11) DEFAULT NULL,
    `users_id` INT(11) UNSIGNED NOT NULL,
    INDEX `fk_user_system_role_system_roles1_idx` (`system_roles_id`),
    INDEX `fk_user_system_role_users1_idx` (`users_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Insert data into user_system_role table
INSERT INTO `user_system_role` (`system_roles_id`, `users_id`) VALUES
    (1, 1); -- This assigns the system role with ID 1 to the first user (admin)

-- Define foreign keys using ALTER TABLE
ALTER TABLE `user_course_role`
    ADD FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD FOREIGN KEY (`course_roles_id`) REFERENCES `course_roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `user_password_reset_token`
    ADD FOREIGN KEY (`password_reset_tokens_id`) REFERENCES `password_reset_tokens` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Commit the transaction
COMMIT;
