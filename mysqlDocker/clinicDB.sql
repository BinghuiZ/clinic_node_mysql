-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 14, 2021 at 03:11 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `clinic`
--
CREATE DATABASE IF NOT EXISTS `clinic` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `clinic`;

-- --------------------------------------------------------

--
-- Table structure for table `clinic`
--

CREATE TABLE IF NOT EXISTS `clinic` (
  `clinic_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`clinic_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clinic`
--

INSERT INTO `clinic` (`clinic_id`, `name`, `address`) VALUES
(1, 'Chai Wan Climic', 'Chai Wan Road'),
(2, 'Wan Chai Clinic', 'Wan Chai Center'),
(3, 'Quarry Bay', 'King\'s Road'),
(4, 'Causeway Bay', 'Hennessy Road');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE IF NOT EXISTS `doctor` (
  `doctor_id` int(11) NOT NULL AUTO_INCREMENT,
  `clinic_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`doctor_id`),
  KEY `clinic_id` (`clinic_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctor_id`, `clinic_id`, `name`) VALUES
(1, 1, 'Emmett Reid'),
(2, 2, 'Duncan Curtis'),
(3, 3, 'Maxine Padilla'),
(4, 4, 'Christian Mitchell'),
(5, 1, 'Vanessa Rowe'),
(6, 2, 'Dwight Nicholls'),
(7, 3, 'Theo Brooks'),
(8, 4, 'Grant Marsh'),
(9, 1, 'Joseph Ogley');

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE IF NOT EXISTS `record` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `doctor_id` int(11) NOT NULL,
  `patient_name` varchar(255) NOT NULL,
  `diagnosis` varchar(255) NOT NULL,
  `medication` varchar(255) DEFAULT NULL,
  `consultation` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `follow_up` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rid`),
  KEY `doctor_id` (`doctor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `record`
--

INSERT INTO `record` (`rid`, `doctor_id`, `patient_name`, `diagnosis`, `medication`, `consultation`, `date`, `follow_up`) VALUES
(3, 1, 'Ben Locy', 'headaches', 'neurontin', 210, '2021-06-14 06:14:23', 1),
(4, 1, 'Ben Locy Hollen', 'headaches', 'neurontin', 210, '2021-06-14 16:38:35', 1),
(5, 1, 'Amelie Hanson', 'Hypertension', 'Acetaminophen and Hydrocodone', 300, '2021-06-14 21:21:01', 0),
(6, 2, 'Pia Stout', 'Hyperlipidemia', 'Cyclobenzaprine', 250, '2021-06-14 21:21:01', 1),
(7, 3, 'Muhammad Lister', 'Diabetes', 'Kevzara', 20, '2021-06-14 21:21:01', 0),
(8, 4, 'Subhan Weston', 'Back pain', 'Ozempic', 260, '2021-06-14 21:21:01', 1),
(9, 5, 'Shayaan Fitzgerald', 'Obesity', 'Farxiga', 2110, '2021-06-14 21:21:01', 0),
(10, 6, 'Cecily Frazier', 'Allergic rhinitis', 'Hydrochlorothiazide', 900, '2021-06-14 21:21:01', 1),
(11, 7, 'Mateusz Jaramillo', 'Reflux esophagitis', 'Methotrexate', 690, '2021-06-14 21:21:01', 0),
(12, 8, 'Ewen Blackburn', 'Respiratory problems', 'Cephalexin', 250, '2021-06-14 21:21:01', 1),
(13, 9, 'Hollie Britt', 'Hypothyroidism', 'Trazodone', 120, '2021-06-14 21:21:01', 0),
(14, 1, 'Giulia Short', 'Hypertension', 'Acetaminophen and Hydrocodone', 300, '2021-05-14 08:14:23', 0),
(15, 2, 'Franco Barrow', 'Hyperlipidemia', 'Cyclobenzaprine', 250, '2021-03-04 09:15:23', 1),
(16, 3, 'Leela Battle', 'Diabetes', 'Kevzara', 20, '2021-01-20 10:14:23', 0),
(17, 4, 'Yvette Munoz', 'Back pain', 'Ozempic', 260, '2020-02-14 10:14:23', 1),
(18, 5, 'Floyd Holden', 'Obesity', 'Farxiga', 2110, '2020-01-14 16:14:23', 0),
(19, 6, 'Adele Medina', 'Allergic rhinitis', 'Hydrochlorothiazide', 900, '2020-11-20 18:14:23', 1),
(20, 7, 'Trix Covington', 'Reflux esophagitis', 'Methotrexate', 690, '2021-05-14 20:14:23', 0),
(21, 8, 'Ella Dickinson', 'Respiratory problems', 'Cephalexin', 250, '2019-08-01 09:14:23', 1),
(22, 9, 'Vishal Wills', 'Hypothyroidism', 'Trazodone', 120, '2021-10-20 06:14:23', 0),
(23, 1, 'Giulia Short', 'Hypertension', 'Acetaminophen and Hydrocodone', 300, '2021-07-14 08:14:23', 0),
(24, 2, 'Franco Barrow', 'Hyperlipidemia', 'Cyclobenzaprine', 250, '2021-03-04 09:15:23', 1),
(25, 3, 'Leela Battle', 'Diabetes', 'Kevzara', 20, '2018-10-20 10:14:23', 0),
(26, 4, 'Yvette Munoz', 'Back pain', 'Ozempic', 260, '2002-02-14 10:14:23', 1),
(27, 5, 'Floyd Holden', 'Obesity', 'Farxiga', 2110, '2010-01-14 16:14:23', 0),
(28, 6, 'Adele Medina', 'Allergic rhinitis', 'Hydrochlorothiazide', 900, '2015-11-20 18:14:23', 1),
(29, 7, 'Trix Covington', 'Reflux esophagitis', 'Methotrexate', 690, '2017-05-14 20:14:23', 0),
(30, 8, 'Ella Dickinson', 'Respiratory problems', 'Cephalexin', 250, '2019-08-01 09:14:23', 1),
(31, 9, 'Vishal Wills', 'Hypothyroidism', 'Trazodone', 120, '2020-10-20 06:14:23', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_no` varchar(8) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `email`, `password`, `phone_no`, `address`) VALUES
(3, 'ben@clinic.com', 'c0b9cf409ab7c928f7946901ec7022e0', '67539760', 'Chai Wan, Flat 2/F'),
(4, 'ben1@clinic.com', 'c0b9cf409ab7c928f7946901ec7022e0', '67539760', 'Chai Wan, Flat 2/F');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`clinic_id`) REFERENCES `clinic` (`clinic_id`);

--
-- Constraints for table `record`
--
ALTER TABLE `record`
  ADD CONSTRAINT `record_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`);
