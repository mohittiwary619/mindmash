const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    technologies: {
      type: [String],
      default: []
    },

    githubLink: {
      type: String,
      default: ""
    },

    liveLink: {
      type: String,
      default: ""
    },

    image: {
      type: String,
      default: "https://via.placeholder.com/600x350"
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);
