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
    .isString()
    .withMessage("username should be string"),
  
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("email should be vaild email address"),

  body("password")
    .notEmpty()
    .isLength()
    .withMessage("password should be vaild for varification")
  ,
    validate,
];
