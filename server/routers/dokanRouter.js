const { Router } = require("express");
const dokanController = require("../controller/dokanController");
const { requireAuth } = require("../middleware/authMiddleware");
const { requireSeller } = require("../middleware/dokanMiddleware");
// Init Router

const router = Router();

router.get("/", dokanController.dokanView);
router.post("/create", requireAuth, dokanController.createDokan);
router.post("/update", requireAuth, dokanController.updateDokan);
module.exports = router;
