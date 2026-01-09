import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a job title"],
      trim: true,
    },
    openings: {
      type: Number,
      required: [true, "Please provide number of openings"],
      min: [1, "Openings must be at least 1"],
    },
    jobType: {
      type: String,
      required: [true, "Please provide job type"],
      enum: ["Full Time", "Part Time", "Contract"],
    },
    lastDate: {
      type: Date,
      required: [true, "Please provide last date to apply"],
    },
    description: {
      type: String,
      required: [true, "Please provide job description"],
    },
    status: {
      type: String,
      enum: ["Active", "Closed"],
      default: "Active",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applicants: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
