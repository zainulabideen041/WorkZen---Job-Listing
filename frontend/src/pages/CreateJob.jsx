import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

// Simple Rich Text Editor Component
const RichTextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || "";
    }
  }, []);

  const execCommand = (command, val = null) => {
    document.execCommand(command, false, val);
    editorRef.current?.focus();
  };

  const handleInput = (e) => {
    onChange(e.currentTarget.innerHTML);
  };

  return (
    <div className="border border-gray-300 rounded-md">
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 border-b border-gray-300 bg-gray-50">
        <button
          type="button"
          onClick={() => execCommand("fontSize", "4")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Font Size"
        >
          14
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => execCommand("bold")}
          className="p-2 hover:bg-gray-200 rounded font-bold"
          title="Bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => execCommand("italic")}
          className="p-2 hover:bg-gray-200 rounded italic"
          title="Italic"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => execCommand("underline")}
          className="p-2 hover:bg-gray-200 rounded underline"
          title="Underline"
        >
          U
        </button>
        <button
          type="button"
          onClick={() => execCommand("strikeThrough")}
          className="p-2 hover:bg-gray-200 rounded line-through"
          title="Strike"
        >
          S
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => execCommand("insertUnorderedList")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Bullet List"
        >
          •
        </button>
        <button
          type="button"
          onClick={() => execCommand("insertOrderedList")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Numbered List"
        >
          1.
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => execCommand("justifyLeft")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Align Left"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => execCommand("justifyCenter")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Align Center"
        >
          ↔
        </button>
        <button
          type="button"
          onClick={() => execCommand("justifyRight")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Align Right"
        >
          →
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => execCommand("createLink", prompt("Enter URL:"))}
          className="p-2 hover:bg-gray-200 rounded"
          title="Insert Link"
        >
          🔗
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="min-h-[200px] p-4 focus:outline-none"
        style={{ wordWrap: "break-word" }}
        suppressContentEditableWarning
      />
    </div>
  );
};

const CreateJob = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [jobId, setJobId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    jobType: "Full Time",
    experience: "",
    currency: "USD",
    salary: "",
    lastDate: "",
    openings: "",
    location: "",
    qualification: "",
    description: "",
  });

  const [responsibilities, setResponsibilities] = useState([""]);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [preScreenQuestions, setPreScreenQuestions] = useState([]);

  const preScreenOptions = [
    "Ability to commute/relocate",
    "Education",
    "Experience",
    "Interview availability",
    "Language",
    "Name",
    "Email",
    "Phone no",
    "Cover Letter",
    "Certifications",
    "Expected Salary",
    "Current Salary",
    "Resume",
    "Other Documents",
  ];

  // Load job data if editing
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id) {
      setJobId(id);
      fetchJob(id);
    }
  }, []);

  const fetchJob = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://workzen-backend.vercel.app/api/jobs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const job = await response.json();

      setFormData({
        title: job.title || "",
        jobType: job.jobType || "Full Time",
        experience: job.experience || "",
        currency: job.currency || "USD",
        salary: job.salary || "",
        lastDate: job.lastDate ? job.lastDate.split("T")[0] : "",
        openings: job.openings || "",
        location: job.location || "",
        qualification: job.qualification || "",
        description: job.description || "",
      });

      if (job.responsibilities) setResponsibilities(job.responsibilities);
      if (job.skills) setSkills(job.skills);
      if (job.preScreenQuestions) setPreScreenQuestions(job.preScreenQuestions);
    } catch (error) {
      console.error("Error fetching job:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (isDraft = false) => {
    try {
      const jobData = {
        ...formData,
        openings: parseInt(formData.openings),
        status: isDraft ? "Draft" : "Active",
        responsibilities,
        skills,
        preScreenQuestions,
      };

      const url = jobId
        ? `https://workzen-backend.vercel.app/api/jobs/${jobId}`
        : "https://workzen-backend.vercel.app/api/jobs";

      const method = jobId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  const addResponsibility = () => {
    setResponsibilities([...responsibilities, ""]);
  };

  const updateResponsibility = (index, value) => {
    const updated = [...responsibilities];
    updated[index] = value;
    setResponsibilities(updated);
  };

  const removeResponsibility = (index) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const togglePreScreenQuestion = (question) => {
    if (preScreenQuestions.includes(question)) {
      setPreScreenQuestions(preScreenQuestions.filter((q) => q !== question));
    } else {
      setPreScreenQuestions([...preScreenQuestions, question]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto py-8 px-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">
              {jobId ? "Edit Job" : "New Job"}
            </h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type here"
                  className="px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button
                onClick={() => handleSubmit(true)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Save in draft
              </button>
              <button
                onClick={() => handleSubmit(false)}
                className="px-6 py-2 bg-[#4FD1C5] text-white rounded-md hover:bg-[#44a39d] transition-colors"
              >
                Publish
              </button>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          {/* Job Title and Contract Type */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contract Type
              </label>
              <select
                value={formData.jobType}
                onChange={(e) =>
                  setFormData({ ...formData, jobType: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
              </select>
            </div>
          </div>

          {/* Experience and Salary */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience in Years
              </label>
              <input
                type="number"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency
              </label>
              <select
                value={formData.currency}
                onChange={(e) =>
                  setFormData({ ...formData, currency: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
              >
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>PKR</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount/Month
              </label>
              <input
                type="number"
                value={formData.salary}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
              />
            </div>
          </div>

          {/* Application deadline and Job openings */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application deadline
              </label>
              <input
                type="date"
                value={formData.lastDate}
                onChange={(e) =>
                  setFormData({ ...formData, lastDate: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job openings
              </label>
              <input
                type="number"
                value={formData.openings}
                onChange={(e) =>
                  setFormData({ ...formData, openings: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
              />
            </div>
          </div>

          {/* Job Location and Minimum Qualification */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Qualification
              </label>
              <input
                type="text"
                value={formData.qualification}
                onChange={(e) =>
                  setFormData({ ...formData, qualification: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
              />
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <RichTextEditor
              value={formData.description}
              onChange={(value) =>
                setFormData({ ...formData, description: value })
              }
            />
          </div>

          {/* Responsibility */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Responsibility
            </label>
            <div className="space-y-3">
              {responsibilities.map((resp, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={resp}
                    onChange={(e) =>
                      updateResponsibility(index, e.target.value)
                    }
                    placeholder="Stripe Sessions 2025 is a premier fintech conference by Stripe..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
                  />
                  <button
                    onClick={() => removeResponsibility(index)}
                    className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={addResponsibility}
                className="w-full py-3 bg-[#4FD1C5] text-white rounded-md hover:bg-[#44a39d] transition-colors font-medium"
              >
                + Add Responsibilities
              </button>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#E6F9F7] text-[#4FD1C5] rounded-md flex items-center gap-2 text-sm"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="text-[#4FD1C5] hover:text-[#44a39d]"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addSkill())
                }
                placeholder="Enter skill and press Enter"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
              />
              <button
                onClick={addSkill}
                className="px-6 py-2 bg-[#4FD1C5] text-white rounded-md hover:bg-[#44a39d] transition-colors"
              >
                Add
              </button>
            </div>
          </div>

          {/* Pre Screen Applicants */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Pre Screen Applicants
            </label>
            <div className="flex flex-wrap gap-3 mb-3">
              {preScreenOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => togglePreScreenQuestion(option)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    preScreenQuestions.includes(option)
                      ? "bg-[#4FD1C5] text-white"
                      : "bg-white border border-[#4FD1C5] text-[#4FD1C5] hover:bg-[#E6F9F7]"
                  }`}
                >
                  + {option}
                </button>
              ))}
            </div>
            <button className="w-full py-3 bg-[#4FD1C5] text-white rounded-md hover:bg-[#44a39d] transition-colors font-medium">
              + Add Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
