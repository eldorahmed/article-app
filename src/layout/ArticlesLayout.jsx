import { Outlet } from "react-router-dom";

function ArticlesLayout() {
  return (
    <div>
      <h1 className="text-3xl mb-8">My Articles</h1>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ArticlesLayout;
