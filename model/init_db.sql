DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customorders;

CREATE TABLE `products`(
    `prodid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `image` TEXT NOT NULL,
    `price` INT NOT NULL,
    `status` VARCHAR(255) NOT NULL
);

CREATE TABLE `customorders`(
    `formid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `client_name` VARCHAR(255) NOT NULL,
    `client_email` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL
);
