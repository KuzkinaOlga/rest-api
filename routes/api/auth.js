const express = require("express");
const controller = require("../../controllers/auth");

const { controllerWrapper } = require("../../helpers");
const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");
const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  controllerWrapper(controller.register)
);
router.get("/verify/:verificationToken", controllerWrapper(controller.verify));
router.post(
  "/verify",
  validateBody(schemas.verifyEmailSchema),
  controllerWrapper(controller.resendVerify)
);
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  controllerWrapper(controller.login)
);
router.get("/current", authenticate, controllerWrapper(controller.getCurrent));
router.get("/logout", authenticate, controllerWrapper(controller.logout));
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllerWrapper(controller.updateAvatar)
);

module.exports = router;
