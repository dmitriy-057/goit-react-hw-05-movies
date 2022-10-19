import ReviewsListItem from 'components/ReviewsListItem/ReviewsListItem';

const ReviewsList = ({ reviews = [] }) => {
  return (
    <ul>
      {reviews.length > 0
        ? reviews.map(({ author, content, id }) => {
            return (
              <ReviewsListItem key={id} author={author} content={content} />
            );
          })
        : "We don't have any revievs for this movie"}
    </ul>
  );
};
export default ReviewsList;