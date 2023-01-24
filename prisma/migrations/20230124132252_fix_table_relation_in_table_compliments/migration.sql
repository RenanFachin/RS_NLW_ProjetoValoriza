-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_compliments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_senderId" TEXT NOT NULL,
    "user_receiverId" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "compliments_user_senderId_fkey" FOREIGN KEY ("user_senderId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_user_receiverId_fkey" FOREIGN KEY ("user_receiverId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_compliments" ("created_at", "id", "message", "tag_id", "user_receiverId", "user_senderId") SELECT "created_at", "id", "message", "tag_id", "user_receiverId", "user_senderId" FROM "compliments";
DROP TABLE "compliments";
ALTER TABLE "new_compliments" RENAME TO "compliments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
