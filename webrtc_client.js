/**
 * Browser WebRTC Client for OpenAI Realtime Voice
 */
async function initRealtimeVoice() {
  console.log("Initializing WebRTC PeerConnection for OpenAI Realtime Voice...");
  const pc = new RTCPeerConnection();
  const dc = pc.createDataChannel("oai-events");
  
  dc.addEventListener("message", (e) => {
    const event = JSON.parse(e.data);
    if (event.type === "input_audio_buffer.speech_started") {
      console.log("Barge-in detected - interrupting audio playback");
    }
  });

  return pc;
}

if (typeof module !== 'undefined') {
  module.exports = { initRealtimeVoice };
}
