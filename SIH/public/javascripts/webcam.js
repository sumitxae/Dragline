document.addEventListener('DOMContentLoaded', () => {
    navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      const webcamDevices = devices.filter(device => device.kind === 'videoinput')
      navigator.mediaDevices.getUserMedia({ video:{deviceId:webcamDevices[0].deviceId}})
      .then(stream => {
        document.querySelector("#webcam").srcObject = stream
      })
      navigator.mediaDevices.getUserMedia({video:{deviceId:webcamDevices[1].deviceId}})
      .then(
        (stream2 => {
          document.querySelector("#webcam2").srcObject = stream2
        })
      )
    })
  });