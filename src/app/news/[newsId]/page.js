const DetailPage = ({params}) =>{
    console.log(params.newsId);
    return(
        <h1>The Detail Page of {params.newsId}</h1>
    )
}

export default DetailPage;
