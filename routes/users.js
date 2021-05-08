const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  updateUserAvatarById,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.patch('/:id', updateUserById);

router.patch('/:id', updateUserAvatarById);

module.exports = router;
