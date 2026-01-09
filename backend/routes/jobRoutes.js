import express from "express";
import {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
  getStats,
} from "../controllers/jobController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes are protected
router.use(protect);

// Stats route must come before /:id to avoid conflict
router.get("/stats/dashboard", getStats);

// Job CRUD routes
router.route("/").get(getJobs).post(createJob);
router.route("/:id").get(getJob).put(updateJob).delete(deleteJob);

export default router;
