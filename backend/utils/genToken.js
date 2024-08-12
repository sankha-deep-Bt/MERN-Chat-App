import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    // jwt.sign creates the token using payload of userId and JWT_SECRET
    expiresIn: "15d",
  });

  // setting the token as cookei
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milli second format
    httpOnly: true, //prevent XXS attacks or cross site scripting attacks - users cannot access the cookie using javascript
    sameSite: "strict", //prevent cross site request forgery attacks(CSRF)
    secure: process.env.NODE_ENV != "development", // cookie works only in https
  });
};

export default generateTokenAndSetCookie;
