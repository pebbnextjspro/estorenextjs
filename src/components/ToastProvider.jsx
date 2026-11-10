"user client"
import { ToastContainer } from 'react-toastify/unstyled'

function ToastProvider() {
  return (
      <ToastContainer
      position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="light"
      />
   
  )
}

export default ToastProvider
