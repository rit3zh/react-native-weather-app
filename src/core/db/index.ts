import * as SQLite from "expo-sqlite/legacy";

const db = SQLite.openDatabase("weatherApp.db");

type User = {
  id: string;
  history: string[];
};

export const createUserTable = (): void => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS user (
        id TEXT PRIMARY KEY,
        history TEXT
      );`
    );
  });
};

// Add a new user
export const addUser = (
  id: string,
  successCallback: () => void,
  errorCallback: (error: Error) => void
): void => {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO user (id, history) VALUES (?, ?);`,
      [id, JSON.stringify([])], // Initialize with an empty history array
      (_, result) => successCallback(),
      (_, error) => {
        errorCallback(error as any);
        return false;
      }
    );
  });
};

// Fetch user data
export const fetchUser = (
  successCallback: (user: User | null) => void,
  errorCallback: (error: Error) => void
): void => {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM user LIMIT 1;`, // Only one user is expected
      [],
      (_, { rows }) => {
        if (rows.length > 0) {
          const user = rows._array[0];
          successCallback({
            id: user.id,
            history: JSON.parse(user.history) as string[],
          });
        } else {
          successCallback(null); // No user found
        }
      },
      (_, error) => {
        errorCallback(error as any);
        return false;
      }
    );
  });
};

// Conditionally create another table based on user existence
export const checkUserAndCreateTable = (
  successCallback: () => void,
  errorCallback: (error: Error) => void
): void => {
  fetchUser((user) => {
    if (user) {
      // User exists, create the weatherHistory table
      db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS weatherHistory (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              description TEXT,
              timestamp TEXT
            );`,
          [],
          () => successCallback(),
          (_, error) => {
            errorCallback(error as any);
            return false;
          }
        );
      });
    } else {
      errorCallback(new Error("User does not exist"));
    }
  }, errorCallback);
};

// Update user history
export const updateUserHistory = (
  id: string,
  newHistory: string[],
  successCallback: () => void,
  errorCallback: (error: Error) => void
): void => {
  db.transaction((tx) => {
    tx.executeSql(
      `UPDATE user SET history = ? WHERE id = ?;`,
      [JSON.stringify(newHistory), id],
      (_, result) => successCallback(),
      (_, error) => {
        errorCallback(error as any);
        return false;
      }
    );
  });
};
