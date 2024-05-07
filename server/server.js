const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const multer = require('multer');
const app = express();
const port = 3002;

let motionStatus = null;
let userResponse = null;

app.use(bodyParser.json());

// Endpoint for the ESP8266 to send a POST request
app.post('/esp8266/post-request', (req, res) => {
  const message = req.body.message;
  console.log('ESP8266 made a POST request!');
  console.log('Received message:', message);

  // Update motion status
  motionStatus = message;

  res.send('Server received a POST request from ESP8266');

  // Schedule to reset the motionStatus 13 seconds after "Motion Detected"
  if (motionStatus === 'Motion Detected') {
    setTimeout(() => {
      motionStatus = null;
    }, 20 * 1000);
  }
});

// Endpoint for the React Native app to get motion status
app.get('/app/motion-status', (req, res) => {
    res.json({ motionStatus });
});

// Endpoint for the React Native app to set user response
app.post('/app/user-response', (req, res) => {
  const response = req.body.response;
  console.log('Received user response:', response);

  // Update user response
  userResponse = response;

  res.send('Server received user response');
});

// Endpoint for the ESP8266 to get user response
app.get('/esp8266/get-response', (req, res) => {
  res.json({ userResponse });
});
// Set up multer for handling multipart/form-data (used for file uploads)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });

// Define the endpoint for receiving video and audio
app.post('/pi/send-video', upload.fields([{ name: 'video', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), async (req, res) => {
  // Retrieve video and audio files
  const videoFile = req.files['video'][0];
  const audioFile = req.files['audio'][0];

  // Save video and audio files
  const videoPath = `uploads/${videoFile.originalname}`;
  const audioPath = `uploads/${audioFile.originalname}`;

  fs.writeFile(videoPath, videoFile.buffer, async (err) => {
    if (err) {
      console.error('Error saving video file:', err);
      return res.status(500).json({ error: 'Error saving video file' });
    }

    fs.writeFile(audioPath, audioFile.buffer, async (err) => {
      if (err) {
        console.error('Error saving audio file:', err);
        return res.status(500).json({ error: 'Error saving audio file' });
      }

      console.log('Video and audio files saved successfully');

      try {
        // Send audio to the specified endpoint
        const audioResponse = await fetch('http://192.168.0.103:3002/app/send-audio', {
          method: 'POST',
          body: fs.createReadStream(audioPath), // Send audio file as stream
          headers: {
            'Content-Type': 'audio/mpeg' // Adjust content type according to your audio format
          }
        });

        if (audioResponse.ok) {
          console.log('Audio sent successfully');
        } else {
          console.error('Failed to send audio:', audioResponse.statusText);
        }
      } catch (error) {
        console.error('Error sending audio:', error);
      }

      res.status(200).json({ message: 'Video and audio files saved and sent successfully' });
    });
  });
});

// New endpoint for receiving audio
app.post('/app/send-audio', (req, res) => {
  // Handle receiving audio here
  // Example: Save the audio to a file
  const audioData = req.body.audio;
  fs.writeFileSync('received_audio.mp3', audioData);
  
  res.status(200).send('Audio received successfully');
});
/ Define the endpoint for sending audio
app.post('/app/send-audio', async (req, res) => {
  try {
    // Retrieve audio data from request body
    const audioData = req.body.audio;

    // Send audio data to the specified endpoint
    const audioResponse = await fetch('http://192.168.0.103:3002/app/send-audio', {
      method: 'POST',
      body: audioData,
      headers: {
        'Content-Type': 'audio/mpeg' // Adjust content type according to your audio format
      }
    });

    if (audioResponse.ok) {
      console.log('Audio sent successfully');
      res.status(200).json({ message: 'Audio sent successfully' });
    } else {
      console.error('Failed to send audio:', audioResponse.statusText);
      res.status(500).json({ error: 'Failed to send audio' });
    }
  } catch (error) {
    console.error('Error sending audio:', error);
    res.status(500).json({ error: 'Error sending audio' });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


