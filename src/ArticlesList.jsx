const ArticlesList = ({ articlesProps }) => {
    return (
        <div>
        {articlesProps.map((articles) => (
            <div>{articles.title}</div>
        ))}
        </div>
    );
}

export default ArticlesList;
