-- create course users
INSERT INTO `users`(
    `id`,
    `first_name`,
    `last_name`,
    `banner_id`,
    `email`,
    `password`,
    `created_at`,
    `updated_at`
)
VALUES(
    '2',
    'John',
    'Smith',
    'B00898989',
    'johnsmith@dal.ca',
    '$2y$10$LCozamjgpXZ4bwCkRY3H0ue0Z2ZkWF6w2LJVmdUfIceGB820mJMlS',
    CURRENT_TIMESTAMP,
    NULL
),(
    '3',
    'Alfred',
    'Derfla',
    'B00696969',
    'al@dal.ca',
    '$2y$10$LCozamjgpXZ4bwCkRY3H0ue0Z2ZkWF6w2LJVmdUfIceGB820mJMlS',
    CURRENT_TIMESTAMP,
    NULL
),(
    '4',
    'Han',
    'Dolo',
    'B00694200',
    'carb@dal.ca',
    '$2y$10$LCozamjgpXZ4bwCkRY3H0ue0Z2ZkWF6w2LJVmdUfIceGB820mJMlS',
    CURRENT_TIMESTAMP,
    NULL
),(
    '5',
    'Brian',
    'Meister',
    'B00777777',
    'brickcity@dal.ca',
    '$2y$10$LCozamjgpXZ4bwCkRY3H0ue0Z2ZkWF6w2LJVmdUfIceGB820mJMlS',
    CURRENT_TIMESTAMP,
    NULL
),(
    '6',
    'Tyler',
    'Relyt',
    'B00111111',
    'tylor@dal.ca',
    '$2y$10$LCozamjgpXZ4bwCkRY3H0ue0Z2ZkWF6w2LJVmdUfIceGB820mJMlS',
    CURRENT_TIMESTAMP,
    NULL
);


-- create course
INSERT INTO `courses` (`id`, `name`, `crn`, `code`, `description`, `term`, `year`) VALUES
(1, 'Introduction to Computer Programming', 123, 3123, 'This course is awesome', 'Fall', 2023);

-- insert course users
INSERT INTO `user_course_role`(
    `course_id`,
    `course_roles_id`,
    `users_id`
)
VALUES('1', '1', '6'),('1', '2', '5'),('1', '3', '3'),('1', '1', '4'),('1', '2', '2');

-- create system users
INSERT INTO `users`(
    `id`,
    `first_name`,
    `last_name`,
    `banner_id`,
    `email`,
    `password`,
    `created_at`,
    `updated_at`
)
VALUES(
    '7',
    'Brylan',
    'Bradfordson',
    'B00898289',
    'brylan@dal.ca',
    '$2y$10$LCozamjgpXZ4bwCkRY3H0ue0Z2ZkWF6w2LJVmdUfIceGB820mJMlS',
    CURRENT_TIMESTAMP,
    NULL
),(
    '8',
    'Huxley',
    'Handerson III',
    'B00691969',
    'hh3@dal.ca',
    '$2y$10$LCozamjgpXZ4bwCkRY3H0ue0Z2ZkWF6w2LJVmdUfIceGB820mJMlS',
    CURRENT_TIMESTAMP,
    NULL
),(
    '9',
    'Branderson',
    '',
    'B00634200',
    'brand@dal.ca',
    '$2y$10$LCozamjgpXZ4bwCkRY3H0ue0Z2ZkWF6w2LJVmdUfIceGB820mJMlS',
    CURRENT_TIMESTAMP,
    NULL
),(
    '10',
    'Mister',
    'Kleen',
    'B00777771',
    'staykleen@dal.ca',
    '$2y$10$LCozamjgpXZ4bwCkRY3H0ue0Z2ZkWF6w2LJVmdUfIceGB820mJMlS',
    CURRENT_TIMESTAMP,
    NULL
),(
    '11',
    'Ben',
    'Dover',
    'B00111112',
    'bd@dal.ca',
    '$2y$10$LCozamjgpXZ4bwCkRY3H0ue0Z2ZkWF6w2LJVmdUfIceGB820mJMlS',
    CURRENT_TIMESTAMP,
    NULL
);

-- insert system users
INSERT INTO `user_system_role`(`system_roles_id`, `users_id`)
VALUES('1', '11'),('1', '9'),('2', '7'),('2', '8'),('3', '10');

-- create groups 

INSERT INTO `groups`(
    `id`,
    `name`,
    `updated_at`,
    `created_at`
)
VALUES(
    '1',
    'Group 1',
    NULL,
    '2023-11-18 10:45:10'
),('2', 'Group 2', NULL, NULL),('3', 'Group 3', NULL, NULL);

-- insert group users
INSERT INTO `user_course_group` (`users_id`, `course_id`, `group_id`) VALUES ('6', '1', '1'), ('4', '1', '2');



-- create assignments

INSERT INTO `assignments`(
    `id`,
    `name`,
    `description`,
    `start_date`,
    `end_date`,
    `due_date`
)
VALUES(
    '1',
    'Lab1',
    'In this lab you will do the following',
    '2023-11-15 11:44:08',
    '2023-11-30 11:44:08',
    '2023-11-29 11:44:08'
),(
    '2',
    'Lab2',
    'This lab is very hard, good luck!',
    '2023-11-01 11:44:08',
    '2023-11-09 11:44:08',
    '2023-11-08 11:44:08'
);

-- create course assignments

INSERT INTO `courses_assignments`(`course_id`, `Assignment_id`)
VALUES('1', '1'),('1', '2');


-- create assignment type
INSERT INTO `assignments_types` (`Assignments_id`, `assignment_types_id`) VALUES ('1', '2'), ('2', '1');