import axios from "axios";
import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";

function Bookmarks() {
  const API = process.env.REACT_APP_API_URL;
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    axios.get(`${API}/bookmarks`)
      .then((response) => setBookmarks(response.data))
      .catch((error) => console.warn(error))
  }, []);
  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map((bookmark) => {
              return <Bookmark key={bookmark.id} bookmark={bookmark} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
