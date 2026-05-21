import { body, validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

export const registerValidation = [
  body("username")
    .notEmpty()
    .withMessage("Username is required!")
    .isString()
    .withMessage("Username should be string!"),

  body("email")
    .notEmpty()
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Email should be valid!"),

  body("password")
    .notEmpty()
    .withMessage("Password is required!")
    .isLength({ min: 6 })
    .withMessage("Password min 6 characters!"),

  validate, 
];
