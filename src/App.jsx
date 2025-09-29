import AuthForm from './components/AuthForm'
import './App.css'
import MyVideo from './components/Myvideo.mp4'

function App() {
  return (
    <>
      {/* Background Video */}
      <video autoPlay loop
         style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1
        }}>
        <source src={MyVideo} type="video/mp4" />
      </video>

      <div style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white"
      }}>
        <AuthForm />
      </div>
    </>
  )
}

export default App
