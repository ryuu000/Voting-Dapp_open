CREATE TABLE profiles (
    address TEXT PRIMARY KEY,
    name TEXT,
    bio TEXT,
    profilePicture TEXT,
    isWellnessProfessional BOOLEAN
);

CREATE TABLE votes (
    voter TEXT,
    wellnessProfessional TEXT,
    timestamp TIMESTAMP,
    PRIMARY KEY (voter, wellnessProfessional)
);
