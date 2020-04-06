import Pagination from '@material-ui/lab/Pagination';
import { getIntFromDate, backToTop } from "../../../../public/js/util";
import PostItemList from '../postItemList/postItemList';

import "./postList.scss";

const PostList = ({ posts }) => {
  posts = posts.sort(function (a, b) {
    const dateA = getIntFromDate(a.createdAt);
    const dateB = getIntFromDate(b.createdAt);
    if (dateA > dateB) return -1;
    else if (dateA < dateB) return 1;
    return 0;
  });

  const postsPerPage = 10;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);
  const [page, setPage] = React.useState(1);
  const [listPost, setListPost] = React.useState(posts.slice(0, postsPerPage));

  const handlePageChange = async (event, value) => {
    if (page !== value) {
      setPage(value);
      var begin, end;

      if (value === 1)
        begin = 0;
      else
        begin = postsPerPage * value - postsPerPage;

      if (value === numberOfPages)
        end = posts.length;
      else
        end = value * postsPerPage;

      await setListPost([]);
      await setListPost(posts.slice(begin, end));

      setTimeout(() => {
        backToTop(105, 0);
      }, 100);
    }
  };

  return (
    <div className="blog-posts">
      <div className="blog-posts-list" >
        {listPost.map((post, key) => {
          var showSeparator = key + 1 < listPost.length;
          var showNewsletter = key + 1 == listPost.length / 2;
          if (showNewsletter) showSeparator = false;
          return <PostItemList
            key={key}
            post={post}
            showSeparator={showSeparator}
            showNewsletter={showNewsletter}
          />
        })}
      </div>
      <Pagination
        count={numberOfPages}
        page={page}
        onChange={handlePageChange}
        variant="outlined" />
    </div>
  );
};

export default PostList;
