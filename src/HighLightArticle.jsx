const HighLightArticle = ({ArticlesProps}) => {
    return (
        <div>
            <h2>Afficher le premier titre: </h2>
            <p>{ArticlesProps[0].title}</p>
        </div>
    )
}

export default HighLightArticle;