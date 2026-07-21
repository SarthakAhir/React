import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredimage}) {
  // console.log(featuredimage);

const url = appwriteService.getFileView(featuredimage);
console.log(url);
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className="w-full justify-center mb-4">
                 <img src={appwriteService.getFileView(featuredimage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard