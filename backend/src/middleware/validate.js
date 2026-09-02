import { body, validationResult } from 'express-validator';

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateLogin = [
  body('username')
    .notEmpty()
    .withMessage('Username is required')
    .trim(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  handleValidationErrors,
];

export const validateRegister = [
  body('username')
    .notEmpty()
    .withMessage('Username is required')
    .trim()
    .isString()
    .withMessage('Username must be a string'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .trim(),
  handleValidationErrors,
];

export const validateGameConfig = [
  body('activeGameMode')
    .isIn(['DUCK_HUNT', 'CLAY_SHOOT', 'QUICK_DRAW', 'HOSTAGE_RESCUE'])
    .withMessage('Invalid game mode'),
  body('difficultyLevel')
    .optional()
    .isNumeric()
    .withMessage('Difficulty level must be numeric'),
  handleValidationErrors,
];

export const validateScoreSubmission = [
  body('playerName')
    .isString()
    .withMessage('Player name must be a string')
    .notEmpty()
    .withMessage('Player name is required'),
  body('gameType')
    .isString()
    .withMessage('Game type must be a string')
    .notEmpty()
    .withMessage('Game type is required'),
  body('finalScore')
    .isNumeric()
    .withMessage('Final score must be numeric'),
  handleValidationErrors,
];
