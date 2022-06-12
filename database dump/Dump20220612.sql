-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: notes
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usernotes`
--

DROP TABLE IF EXISTS `usernotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usernotes` (
  `noteId` int NOT NULL AUTO_INCREMENT,
  `note` longtext,
  `noteName` varchar(128) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`noteId`),
  UNIQUE KEY `noteId_UNIQUE` (`noteId`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usernotes`
--

LOCK TABLES `usernotes` WRITE;
/*!40000 ALTER TABLE `usernotes` DISABLE KEYS */;
INSERT INTO `usernotes` VALUES (1,'<h1>Hello</h1>\n<p>&nbsp;</p>\n<p>this is a new text</p>\n<p><em><strong>bruh </strong></em>123<em><strong><br></strong></em></p>','testerino',1),(2,'<p>\'adasdasdasdasdaasddasdpiscing\' elit\'</p>\n<p>a <em>little</em> \'edit\' <strong>here</strong></p>','new name 2',1),(3,'<p>Danforth was totally unstrung, and the first thing I remember of the rest of the journey was hearing him lightheadedly chant an hysterical formula in which I alone of mankind could have found anything but insane irrelevance. It reverberated in falsetto echoes among the squawks of the penguins; reverberated through the vaultings ahead, and&mdash;thank God&mdash;through the now empty vaultings behind. <em>He could not have begun</em> it at once&mdash;else we would not have been alive and blindly racing. I shudder to think of what a shade of difference in his nervous reactions might have <strong>brought</strong>.1</p>','At the Mountains of Maddness',2),(4,'<p>abcde123</p>\n<p>&nbsp;</p>\n<p><strong>hehehe</strong></p>','test from front end',1),(5,'<p>123</p>','again',1),(6,'<p><span class=\'sentence\' data-v-12d2b456=\'\'><span class=\'word\' data-v-12d2b456=\'\'><span style=\'font-size: 24pt;\'><strong>T</strong></span>hese Great Old Ones, Castro continued, were not composed altogether of flesh and blood. They had shape&mdash;for did not this star-fashioned image prove it?&mdash;but that shape was not made of matter. When the stars were right, They could plunge from world to world through the sky, but when the stars were wrong, They could not live. But although They no longer lived, They would never really die. They all lay in stone houses in Their great city of R\'lyeh, preserved by the spells of mighty Cthulhu for a glorious resurrection when the stars and the earth might once more be ready for Them. But at that time some force from outside must serve to liberate Their bodies. The spells that preserved them intact likewise prevented Them from making an initial move, and They could only lie awake in the dark and think whilst uncounted millions of years rolled by. They knew all that was occurring in the universe, for Their mode of speech was transmitted thought. Even now They talked in Their tombs. When, after infinities of chaos, the first men came, the Great Old Ones spoke to the sensitive among them by moulding their dreams, for only thus could Their language reach the fleshy minds of mammals.</span></span></p>','The Call of Cthulhu',2),(7,'<div class=\'paragraphs content filtered-content__paragraphs section\' data-v-12d2b456=\'\' data-v-11c3fdb7=\'\'>\n<article class=\'note\'>\n<div class=\'paragraphs content filtered-content__paragraphs section\' data-v-12d2b456=\'\' data-v-11c3fdb7=\'\'>\n<p class=\'paragraph\' data-v-12d2b456=\'\'><span class=\'sentence\' data-v-12d2b456=\'\'><span class=\'word\' data-v-12d2b456=\'\'><span style=\'font-size: 24pt;\'><strong>F</strong></span>or two months or more after this incident Ward was less confined than usual to his laboratory. He exhibited a curious interest in the weather, and made odd inquiries about the date of the spring thawing of the ground. One night late in March he left the house after midnight, and did not return till almost morning; when his mother, being wakeful, heard a rumbling motor draw up to the carriage entrance. Muffled oaths could be distinguished, and Mrs. Ward, rising and going to the window, saw four dark figures removing a long, heavy box from a truck at Charles\'s direction and carrying it within by the side door. She heard laboured breathing and ponderous footfalls on the stairs, and finally a dull thumping in the attic; after which the footfalls descended again, and the four men reappeared outside and drove off in their truck.<br></span></span></p>\n</div>\n</article>\n<p class=\'paragraph\' data-v-12d2b456=\'\'><span class=\'sentence\' data-v-12d2b456=\'\'><span class=\'word\' data-v-12d2b456=\'\'>&nbsp;</span></span></p>\n</div>','The Case of Charles Dexter Ward',2),(8,'<h3>Lorem ipsum</h3>\n<p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe<strong>rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</strong> esse cillum dolore \'eu fugiat nulla pariatur. Excepteur sint occaecat\' cupidatat non proident, sunt in culpa qui officia <em>deserunt mollit ani</em>m id est laborum.</p>','Lorem Test',1),(9,'<h2>Heading here</h2>\n<p>&nbsp;</p>\n<p><strong>fat text</strong></p>\n<p><span style=\'font-size: 36pt; font-family: \'comic sans ms\', sans-serif;\'>big comic sans text :(</span></p>\n<p style=\'text-align: right;\'><span style=\'font-size: 12pt; font-family: \'arial black\', sans-serif;\'>text to the right</span></p>\n<p style=\'text-align: center;\'><span style=\'font-size: 12pt; font-family: impact, sans-serif; color: rgb(22, 145, 121);\'>center and green</span></p>\n<p style=\'text-align: center;\'>&nbsp;</p>\n<p style=\'text-align: left;\'><span style=\'font-size: 12pt; font-family: impact, sans-serif; color: rgb(251, 238, 184); background-color: rgb(132, 63, 161);\'>Ok</span></p>','Last test',1);
/*!40000 ALTER TABLE `usernotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `idusers_UNIQUE` (`userId`),
  UNIQUE KEY `userName_UNIQUE` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test','test123'),(2,'lovecraft','hp');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-12  5:59:53
