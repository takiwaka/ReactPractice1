const Article = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <div>{props.content}</div>
    </>
  );
};

export default Article;
