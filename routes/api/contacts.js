const express = require("express");

const controller = require("../../controllers/contacts/index");

const { controllerWrapper } = require("../../helpers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", controllerWrapper(controller.listContacts));

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  controllerWrapper(controller.getContactById)
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.contactsSchema),
  controllerWrapper(controller.addContact)
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  controllerWrapper(controller.removeContact)
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.contactsSchema),
  controllerWrapper(controller.updateContact)
);
router.patch(
  ":contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controllerWrapper(controller.updateFavorite)
);

module.exports = router;
