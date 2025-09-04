function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const login = (passwordAttempt) => {
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      attemptCount++;
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
  return login;
}


const userInfoExample = {
  "username": "user1",
  "password": "password123"
};


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};