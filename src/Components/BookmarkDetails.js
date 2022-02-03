import axios from 'axios';
import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';


function BookmarkDetails() {
  const navigate = useNavigate()
  const API = process.env.REACT_APP_API_URL;
  const {id} = useParams()
  const [bookmark, setBookmark] = useState({});
  useEffect(() => {
    axios.get(`${API}/bookmarks/${id}`)
      .then((response) => setBookmark(response.data))
      .catch((error) => console.warn(error))
  }, [id])

  const handleDelete = () => {
    axios.delete(`${API}/bookmarks/${id}`)
      .then(() => navigate('/bookmarks'))
      .catch((error) => console.warn(error))
  }

  return <article>
    <h2>{bookmark.is_favorite ? '⭐' : null} {bookmark.name}</h2>
    <h4>
    <a href={bookmark.url} target="_blank">{bookmark.name}</a>
    <span>{bookmark.url}</span>
    </h4>
    <p>{bookmark.category}</p>
    <div className="showNavigation">
      <div>
        <Link to="/bookmarks">
          <button>Back</button>
        </Link>
      </div>
      <div>
        {/* TODO change the id to be dynamic */}
        <Link to="/bookmarks/1/edit">
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  </article>;
}

export default BookmarkDetails;
