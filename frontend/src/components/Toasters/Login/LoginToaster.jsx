import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginToaster.css';

export default function LoginToaster() {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={2500}
      hideProgressBar={false}
      theme="light"
    />
  );
}
