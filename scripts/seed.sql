TRUNCATE TABLE attack CASCADE;
TRUNCATE TABLE card CASCADE;
TRUNCATE TABLE card_attack;

INSERT INTO attack ("id", "name", "description", "value") VALUES
('e3b0c442-98fc-1c14-9c4e-82f2c9b24e27', 'Meal Time', 'Flip a coin until you get tails. For each heads, draw a card.', NULL),
('b6d5b9d1-88e2-4a67-8b8d-5f2b9a21e755', 'Gnaw', NULL, 20),
('a5f2d3d4-9f56-4b8d-a9f3-5e8f7240e8a7', 'Stoke', 'Flip a coin. If heads, search your deck for up to 3 basic Energy cards and attach them to this Pokémon. Shuffle your deck afterward.', NULL),
('1b4c8c77-7d99-4a2a-8c4c-5a2fcd92e7b6', 'Fire Blast', 'Discard an Energy attached to this Pokémon.', 120),
('b5b1d5d7-4e2f-4b16-ae1c-4c89a6c1e854', 'Slam', 'Flip 2 coins. This attack does 20 damage times the number of heads.', 20),
('f7dcb0c9-01a2-41c7-8252-4dfc3aab7eae', 'Body Slam', 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.', 40),
('6d56a0a1-8739-4a6d-9e1d-7b7d8fa1c816', 'Torrential Heart', 'During your next turn, this Pokémon cant use Giant Wave', NULL),
('4c6b8e2e-7d77-4896-9fd1-0eae1d6c6d84', 'Giant Wave', 'During your next turn, this Pokémon can’t use Giant Wave.', 160),
('f2b8b8f3-8c7a-4d99-b08e-5b229b3c4d99', 'Dig Claws', NULL, 20),
('a68b8f3c-1e7a-4b0e-a8a6-4b28e2b4c9e3', 'Special Blow', 'If your opponent’s Active Pokémon has any Special Energy attached to it, this attack does 70 more damage.', 60),
('e5b6a1d0-1f7b-4b8b-9a54-dc8a2f8c6e0c', 'Pound', NULL, 10),
('a87b3f8e-0e0d-42f1-b01f-8d8d6e2c8b74', 'Shining Claws', 'Flip a coin. If heads, the Defending Pokémon is now confused.', 10);

INSERT INTO card ("id", "name", "type", "rarity", "hp", "weaknessType", "weaknessMultiplier", "resistanceType", "resistanceAmount", "abilityName", "abilityDescription", "retreatCost") VALUES
('6a3b5d6a-1234-4d98-a123-0a1234567890', 'Pikachu', 'ELECTRIC', 'COMMON', 60, 'FIGHTING', 2, 'STEEL', 20, NULL, NULL, 1),
('9b3f8e8d-2345-4f56-b234-1b2345678901', 'Charizard EX', 'FIRE', 'RARE', 180, 'WATER', 2, NULL, NULL, NULL, NULL, 2),
('7c6d9e0e-3456-4b67-c345-2c3456789012', 'Onix', 'FIGHTING', 'COMMON', 90, 'GRASS', 1.5, NULL, NULL, NULL, NULL, 3),
('8d7e1f2f-4567-4c78-d456-3d4567890123', 'Feraligatr', 'WATER', 'RARE', 180, 'ELECTRIC', 2, NULL, NULL, 'Torrential Heart', 'Once during your turn, you may put 5 damage counters on this Pokémon. If you do, during this turn, attacks used by this Pokémon do 120 more damage to your opponents Active Pokémon (before applying Weakness and Resistance).', 3),
('9e8d0f3e-5678-4d89-e567-4e5678901234', 'Sneasel', 'DARK', 'COMMON', 70, 'GRASS', 2, NULL, NULL, NULL, NULL, 2),
('0f9e1d2c-6789-4e90-f678-5f6789012345', 'Scizor', 'STEEL', 'RARE', 120, 'FIRE', 2, 'PSYCHIC', 20, 'Exoskeleton', 'This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).', 1),
('1f0e2d3c-7890-4f01-b789-6f7890123456', 'Treecko', 'PSYCHIC', 'COMMON', 40, 'FIRE', 1.5, 'WATER', 30, NULL, NULL, 1);

INSERT INTO card_attack ("cardId", "attackId") VALUES
('6a3b5d6a-1234-4d98-a123-0a1234567890', 'e3b0c442-98fc-1c14-9c4e-82f2c9b24e27'),
('6a3b5d6a-1234-4d98-a123-0a1234567890', 'b6d5b9d1-88e2-4a67-8b8d-5f2b9a21e755'),
('9b3f8e8d-2345-4f56-b234-1b2345678901', 'a5f2d3d4-9f56-4b8d-a9f3-5e8f7240e8a7'),
('9b3f8e8d-2345-4f56-b234-1b2345678901', '1b4c8c77-7d99-4a2a-8c4c-5a2fcd92e7b6'),
('7c6d9e0e-3456-4b67-c345-2c3456789012', 'b5b1d5d7-4e2f-4b16-ae1c-4c89a6c1e854'),
('7c6d9e0e-3456-4b67-c345-2c3456789012', 'f7dcb0c9-01a2-41c7-8252-4dfc3aab7eae'),
('8d7e1f2f-4567-4c78-d456-3d4567890123', '4c6b8e2e-7d77-4896-9fd1-0eae1d6c6d84'),
('9e8d0f3e-5678-4d89-e567-4e5678901234', 'f2b8b8f3-8c7a-4d99-b08e-5b229b3c4d99'),
('0f9e1d2c-6789-4e90-f678-5f6789012345', 'a68b8f3c-1e7a-4b0e-a8a6-4b28e2b4c9e3'),
('1f0e2d3c-7890-4f01-b789-6f7890123456', 'e5b6a1d0-1f7b-4b8b-9a54-dc8a2f8c6e0c'),
('1f0e2d3c-7890-4f01-b789-6f7890123456', 'a87b3f8e-0e0d-42f1-b01f-8d8d6e2c8b74');
