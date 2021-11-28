const { Schema, model, Types } = require("mongoose");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  reactionBody: {
    type: String,
    required: true,
    max: 280,
  },

  // timestamp
  createdAt: {
    type: Date,
    default: Date.now,
  },

  username: {
    type: String,
    required: true,
  },
});

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    // timestamp
    createdAt: {
      type: Date,
      default: Date.now,
    },

    username: {
      type: String,
      required: true,
    },

    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },

    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
