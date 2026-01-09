import Job from "../models/Job.js";

// @desc    Create a new job
// @route   POST /api/jobs
// @access  Private
export const createJob = async (req, res) => {
  try {
    const { title, openings, jobType, lastDate, description } = req.body;

    // Validate input
    if (!title || !openings || !jobType || !lastDate || !description) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    // Create job
    const job = await Job.create({
      title,
      openings,
      jobType,
      lastDate,
      description,
      createdBy: req.user._id,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Private
export const getJobs = async (req, res) => {
  try {
    const { filter, search } = req.query;
    let query = {};

    // Filter by creator
    if (filter === "my") {
      query.createdBy = req.user._id;
    }

    // Search in title and description
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const jobs = await Job.find(query)
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single job
// @route   GET /api/jobs/:id
// @access  Private
export const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update job
// @route   PUT /api/jobs/:id
// @access  Private
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if user is the creator
    if (job.createdBy.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this job" });
    }

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete job
// @route   DELETE /api/jobs/:id
// @access  Private
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if user is the creator
    if (job.createdBy.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this job" });
    }

    await Job.findByIdAndDelete(req.params.id);

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get dashboard stats
// @route   GET /api/jobs/stats/dashboard
// @access  Private
export const getStats = async (req, res) => {
  try {
    const totalJobs = await Job.countDocuments({ createdBy: req.user._id });
    const openJobs = await Job.countDocuments({
      createdBy: req.user._id,
      status: "Active",
    });
    const closedJobs = await Job.countDocuments({
      createdBy: req.user._id,
      status: "Closed",
    });

    const jobs = await Job.find({ createdBy: req.user._id });
    const totalApplicants = jobs.reduce((sum, job) => sum + job.applicants, 0);

    res.json({
      totalJobs,
      openJobs,
      closedJobs,
      totalApplicants,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
