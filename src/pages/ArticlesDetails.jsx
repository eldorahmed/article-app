import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"
function ArticlesDetails() {
    const {id}=useParams()
    const url=`https://online-json-server-api.up.railway.app/project/66793dd61d2cd3eb1144093b/articles?id=${id}`
    const{data:article,isPending,error}=useFetch(url)
    console.log(article)
  return (
    <div>
    {isPending && <h2>Loading..</h2>}
      {error && <h2>{error}</h2>}
      {article&& <>
      <img className="mb-8" height={350} src={article[0].image} alt={article[0].title} />
      <h3 className="text-3xl font-medium mb-4">{article[0].title}</h3>
      <p className="text-left">{article[0].body}</p>
      <p className="text-right mr-32 text-2xl font-medium"><i>{article[0].author}</i></p>
      <Link to="/articles" className="btn btn-outline">Back to Articles</Link>

      </>}

    </div>
  )
}

export default ArticlesDetails