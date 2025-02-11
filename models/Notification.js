import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  requestedFrom: {
    type: String,
    required: true
  },
  requestedTo: {
    type: String,
    required: true
  },
  gig: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gig',
    required: true
  }
}, {
  timestamps: true
});

const Notification = mongoose.models.Notification || mongoose.model('Notification', notificationSchema);
export default Notification;