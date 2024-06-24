import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Articles() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/66793dd61d2cd3eb1144093b/articles"
  );
  return (
    <div>
      {isPending && <h2>Loading..</h2>}
      {error && <h2>{error}</h2>}
      {articles &&
        articles.map((article) => {
          return (
            <div className="inline-block mx-5 ">
              <div
                className="border-2 max-w-[300px] h-[300px] rounded-2xl p-6 shadow-md inline-block"
                key={article.id}
              >
                <NavLink to={`${article.id}`}>
                  <img

                    className="size-fit rounded mb-5 w-64 h-36 "
                    width={200}
                    height={250}
                    src={article.image}
                    alt=""
                  />
                </NavLink>
                <h3 className="text-xl">{article.title}</h3>
                <p className="text-right italic">{article.author}</p>
                <NavLink className="link link-accent" to={`${article.id}`}>
                  Read More
                </NavLink>
              </div>
            </div>
          );
        })}
      <Outlet />
    </div>
  );
}

export default Articles;
