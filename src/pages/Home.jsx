import { Link } from "react-router-dom"
function Home() {
    return (
      <div>
          <h1 className="text-3xl mb-8">Home</h1>
          <div className="hero bg-base-200 min-h-[50%]">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link to="articles" className="btn btn-primary">Articles</Link>
    </div>
  </div>
</div>
      </div>
    )
  }
  
  export default Home