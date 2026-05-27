
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();
  return (
    <div className=" text-center bg-gray-600 text-white text-3xl p-4">user : {userid}</div>
  )
}

export default User