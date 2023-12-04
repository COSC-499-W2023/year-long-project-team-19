-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2023 at 06:59 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cosc499`
--

-- --------------------------------------------------------

--
-- Table structure for table `useracc`
--

CREATE TABLE `useracc` (
  `uid` int(10) NOT NULL COMMENT 'Primary key id used to identify each user. It auto increments when the account is created.',
  `useremail` varchar(30) NOT NULL COMMENT 'user''s email address used to log in.',
  `hash` varchar(100) NOT NULL,
  `salt` varchar(50) NOT NULL,
  `datecreated` date NOT NULL DEFAULT current_timestamp() COMMENT 'this should stamp the account with the current timestamp when it gets created, allowing us to display this info later.',
  `gamesplayed` int(10) NOT NULL DEFAULT 0 COMMENT 'Counter for the amount of games the user has played (maybe only count games that have finished completely). Starts at 0.',
  `gameswon` int(10) NOT NULL DEFAULT 0 COMMENT 'Counter for the amount of games the user has WON. Starts at 0. this combined with gamesplayed can be used to find the user''s W/L Ratio.',
  `damagedealt` int(50) NOT NULL DEFAULT 0 COMMENT 'Counter for the amount of damage the user has played done. Maybe only increment when the player turn changes? Starts at 0.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `useracc`
--

INSERT INTO `useracc` (`uid`, `useremail`, `hash`, `salt`, `datecreated`, `gamesplayed`, `gameswon`, `damagedealt`) VALUES
(1, 'john@doe.com', '$5$rounds=5000$opensesamejohn@d$et1Iwof2eaZjMtw2AhBPczmT7FwdaIgu8XO0Tf2mHP3', '$5$rounds=5000$opensesamejohn@doe.com$', '2023-11-23', 0, 0, 0),
(2, 'bdevos14@outlook.com', '$5$rounds=5000$opensesamebdevos$nUKYMsD2PtfD.4wtIW2pBBnoP/z8isXOJUnFNUxJM6/', '$5$rounds=5000$opensesamebdevos14@outlook.com$', '2023-11-25', 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `useracc`
--
ALTER TABLE `useracc`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `useremail` (`useremail`);

ALTER TABLE useracc
  ADD reset_token_hash VARCHAR(64) NULL DEFAULT NULL,
  ADD reset_token_expires_at DATETIME NULL DEFAULT NULL,
  ADD UNIQUE (reset_token_hash);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `useracc`
--
ALTER TABLE `useracc`
  MODIFY `uid` int(10) NOT NULL AUTO_INCREMENT COMMENT 'Primary key id used to identify each user. It auto increments when the account is created.', AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
