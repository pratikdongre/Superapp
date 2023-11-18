import up from '../../assets/up.png'
import down from '../../assets/down.png'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { useState } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [playing, setPlaying] = useState(false)

  const increaseSecond = () => {
    if (seconds === 59) {
      return
    }
    setSeconds((sec) => sec + 1)
  }

  const increaseMinute = () => {
    if (minutes === 59) {
      return
    }
    setMinutes((min) => min + 1)
  }

  const increaseHour = () => {
    setHours((hours) => hours + 1)
  }

  const decreaseSecond = () => {
    if (seconds === 0) {
      return
    }
    setSeconds((sec) => sec - 1)
  }

  const decreaseMinute = () => {
    if (minutes === 0) {
      return
    }
    setMinutes((min) => min - 1)
  }

  const decreaseHour = () => {
    if (hours === 0) {
      return
    }
    setHours((hours) => hours - 1)
  }

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div style={{ width: "60vw", height: "30vh", background: "#1E2343", position: "absolute", borderRadius: "12px", marginTop: "25px", display: "flex", gap: "20px", boxSizing: "border-box", padding: "12px", alignItems: "center", justifyContent: "space-evenly" }}>
      <div>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
        >
          {({ remainingTime }) => <span style={{ color: "white", fontSize: "1.5rem" }}>{toHoursAndMinutes(remainingTime)}</span>}
        </CountdownCircleTimer>
      </div>
      <div style={{ width: "30vw", textAlign: "center" }}>
        <div style={{ color: "white", display: "flex", fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: "1.3rem", justifyContent: "space-evenly" }}>
          <div style={{ textAlign: "center", padding: "2px" }}>
            <p>Hours</p>
            <img style={{ width: "18px", height: "18px" }} onClick={increaseHour} src={up} alt={up} />
            <p>{hours}</p>
            <img style={{ width: "18px", height: "18px" }} onClick={decreaseHour} src={down} alt={down} />
          </div>
          <div style={{ textAlign: "center", padding: "2px" }}>
            <p>Minutes</p>
            <img style={{ width: "18px", height: "18px" }} onClick={increaseMinute} src={up} alt={up} />
            <p>{minutes}</p>
            <img style={{ width: "18px", height: "18px" }} onClick={decreaseMinute} src={down} alt={down} />
          </div>
          <div style={{ textAlign: "center", padding: "2px" }}>
            <p>Seconds</p>
            <img style={{ width: "18px", height: "18px" }} onClick={increaseSecond} src={up} alt={up} />
            <p>{seconds}</p>
            <img style={{ width: "18px", height: "18px" }} onClick={decreaseSecond} src={down} alt={down} />
          </div>
        </div>
        <div onClick={() => setPlaying((prev) => !prev)} style={{ margin: "8px 0 0 1rem", background: "#FF6A6A", borderRadius: "12px", padding: "1px 2px", height: "38px", width: "28vw", color: "white", fontFamily: "'Roboto', sans-serif", fontWeight: 400, textAlign: "center" }}>
          {playing ? <p style={{ margin: '8px' }}>Pause</p> : <p style={{ margin: '8px' }}>Start</p>}
        </div>
      </div>
    </div>
  )
}

export default Timer
