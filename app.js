const videoElement = document.getElementById('video');
const canvasElement = document.getElementById('canvas');
const captureButton = document.getElementById('capture');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    videoElement.srcObject = stream;
    videoElement.play();
  })
  .catch(error => {
    console.error('Error accessing camera', error);
  });

captureButton.addEventListener('click', () => {
  canvasElement.width = videoElement.videoWidth;
  canvasElement.height = videoElement.videoHeight;
  canvasElement.getContext('2d').drawImage(videoElement, 0, 0);
  const data = canvasElement.toDataURL('image/png');
  sendEmail(data);
});

function sendEmail(imageData) {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  formData.append('image', imageData);
  xhr.open('POST', '/send-email');
  xhr.onload = () => {
    console.log('Email sent successfully');
  };
  xhr.onerror = () => {
    console.error('Error sending email');
  };
  xhr.send(formData);
}
