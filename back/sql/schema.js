-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 31 Janvier 2019 à 11:51
-- Version du serveur :  5.7.25-0ubuntu0.18.04.2
-- Version de PHP :  7.2.14-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mini_projet_2019`
--

-- --------------------------------------------------------

--
-- Structure de la table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `createDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `order`
--

INSERT INTO `order` (`id`, `createDate`, `userId`) VALUES
(1, '2019-01-30 15:30:40', 1),
(2, '2019-01-30 15:31:04', 1),
(3, '2019-01-30 16:02:11', 1),
(4, '2019-01-30 16:03:37', 1),
(5, '2019-01-30 16:03:42', 1),
(6, '2019-01-30 16:04:55', 1),
(7, '2019-01-30 17:06:44', 1),
(8, '2019-01-30 17:15:45', 1),
(9, '2019-01-30 17:16:17', 1),
(10, '2019-01-31 10:18:35', 1);

-- --------------------------------------------------------

--
-- Structure de la table `order_product`
--

CREATE TABLE `order_product` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `order_product`
--

INSERT INTO `order_product` (`id`, `orderId`, `productId`, `quantity`, `price`) VALUES
(1, 8, 1, 1, 2600),
(2, 8, 2, 2, 1350),
(3, 9, 1, 1, 2600),
(4, 9, 2, 2, 1350),
(5, 10, 1, 1, 2600);

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `brand` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `label` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `reference` int(11) DEFAULT NULL,
  `slug` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `description` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `picture` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `specs` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `products`
--

INSERT INTO `products` (`id`, `brand`, `label`, `reference`, `slug`, `description`, `stock`, `price`, `picture`, `createDate`, `specs`) VALUES
(1, 'Kalkhoff', 'Vélo de ville électrique Kalkhoff Agattu 3.B Move', 345678, 'Kalkhoff-Agattu-3.B-Move', 'Un entrée de gamme au top parmi les Endeavour E-Trekking', 3, 2600, 'https://www.cyclable.com/27536-thickbox_default/velo-electrique-kalkhoff-integrale-i10.jpg', '2019-01-24 00:00:00', 'Le vélo électrique Kalkhoff Endeavour Move I9 est un vélo polyvalent disponible dans de nombreuses versions ! Jaune, Gris ou Noir, géométrie Wave, Trapèze ou Diamant, ce vélo propose également 2 capacités de batterie : 418 ou 500 wh.\r\n\r\nPour le reste, l\'Endeavour Move I9 affiche un équipement fiable pour aligner sereinement les kilomètres toute l\'année, notamment grâce à la motorisation Impulse Evo RS, la transmission externe Shimano et des pneus Schwalbe Energizer Plus Tour.\r\n\r\n \r\n\r\nPoints forts :\r\n\r\nUn large choix de configurations\r\nUn rapport qualité / prix exceptionnel'),
(2, 'Moustache', 'Vélo électrique Moustache Samedi 28.3 2018', 4564378, 'Moustache_Samedi_28.3_2018', 'Le VTC électrique polyvalent par excellence à l\'intégration parfaite', 2, 1350, 'https://www.cyclable.com/25020-thickbox_default/velo-electrique-moustache-samedi-283-2018.jpg', '2019-01-24 00:00:00', 'Samedi 28.3, la nouvelle génération de vélo électrique polyvalent chez Moustache bikes.\r\n\r\nUn vélo qui adopte un nouveau cadre avec une intégration très réussie de l\'ensemble moteur/batterie, la \"Hidden Power Technology\" développée par Moustache. Des pneus un plus larges que sur les anciennes génération de Samedi lui confère un comportement encore plus polyvalent hors route et extrêmement confortable.\r\n\r\nLe petit nom de ce vélo électrique est synonyme de week-end, appelant à de belles balades en perspectives, mais il sera également un excellent et pratique vélo urbain la semaine.\r\n\r\nUn vélo électrique polyvalent avant tout\r\nA l\'aise sur les chemins grâce à son équipement VTC : transmission par dérailleur Shimano  et fourche suspendue, son équipement complet avec garde-boue et porte-bagages lui permet d\'être utilisé quotidiennement pour des trajets utilitaires.\r\nLes roues en taille 28\" équipés de pneus Schwalbe assurent vélocité et sécurité anti-crevaison.'),
(11, 'Kalkhoff', 'Vélo de ville électrique Kalkhoff Agattu 3.B Move', 345278, 'Kalkhoff_Agattu_3.B_Move', 'L\'urbain Agattu 3 dans sa version la plus accessible ! Motorisation Bosch Active Plus avec batterie de 400 ou 500 Wh au choix.', 5, 2499, 'https://www.cyclable.com/30245-thickbox_default/velo-de-ville-electrique-kalkhoff-agattu-3b-move.jpg', '2019-01-24 14:53:14', NULL),
(12, 'Kalkhoff', 'Vélo de ville électrique Kalkhoff Agattu 3.B Move', 345278, 'Kalkhoff_Agattu_3.B_Move', 'L\'urbain Agattu 3 dans sa version la plus accessible ! Motorisation Bosch Active Plus avec batterie de 400 ou 500 Wh au choix.', 5, 2499, 'https://www.cyclable.com/30245-thickbox_default/velo-de-ville-electrique-kalkhoff-agattu-3b-move.jpg', '2019-01-24 14:54:18', NULL),
(13, 'Kalkhoff', 'Vélo de ville électrique Kalkhoff Agattu 3.B Move', 345278, 'Kalkhoff_Agattu_3.B_Move', 'L\'urbain Agattu 3 dans sa version la plus accessible ! Motorisation Bosch Active Plus avec batterie de 400 ou 500 Wh au choix.', 5, 2499, 'https://www.cyclable.com/30245-thickbox_default/velo-de-ville-electrique-kalkhoff-agattu-3b-move.jpg', '2019-01-24 14:56:30', NULL),
(14, 'Kalkhoff', 'Vélo de ville électrique Kalkhoff Agattu 3.B Move', 9888888, 'Kalkhoff_Agattu_3.B_Move', 'fdqbfdb', 5, 3456, 'https://www.cyclable.com/30245-thickbox_default/velo-de-ville-electrique-kalkhoff-agattu-3b-move.jpg', '2019-01-24 15:35:16', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `firstname` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `lastname` varchar(128) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `firstname`, `lastname`) VALUES
(1, 'toto@example.com', '$2b$10$XPqdo1Gx6hvrSNBruX0zze/UiGDQebDbccfO2OOYoGpR.PycAhHt2', NULL, NULL),
(8, 'claire_lebatard@hotmail.com', '$2b$10$6Dn.s/pLQdVpeidixZml7OaSPTncvuvdNJltXHWGzbFIuP3FqdMka', NULL, NULL),
(9, 'claire_lebatard@hotmail.fr', '$2b$10$ztxTFSoJyYEvxrKMwVegt.CCN2DWUI1VLl6zuzy.IafSn9r1JS3Q.', NULL, NULL),
(10, 'toto@example.com', '$2b$10$pS47tYCeeSKNUceXfQNVKebQoq2549UOCIwcxFq58R2jYPtoUV1Xm', NULL, NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `order_product`
--
ALTER TABLE `order_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;