import mongoose from 'mongoose';

const gigSchema = new mongoose.Schema({
  authorID: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true,
    maxLength: 100 // Approximately 25 words
  },
  longDescription: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Notes', 'Assignments', 'PYQs', 'Services', 'Paid']
  }
}, {
  timestamps: true
});

const Gig = mongoose.models.Gig || mongoose.model('Gig', gigSchema);
export default Gig;