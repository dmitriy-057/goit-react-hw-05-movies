const ReviewsListItem = ({ author, content }) => {
    console.log('content', content);
    return (
      <li>
        <p>Author: {author}</p>
        <p> {content}</p>
      </li>
    );
  };
  
  export default ReviewsListItem;