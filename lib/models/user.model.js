import { Schema, model, models } from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userPhoto: {
    type: String
  },
  userRating: {
    type: Number,
    default: 0
  },
  userGigs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gig'
  }],
  userNotifications: [{
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'Notification'
  }]
}, {
  timestamps: true // Automatically adds createdAt and updatedAt
});

const User = models?.User || model("User", UserSchema);

export default User;