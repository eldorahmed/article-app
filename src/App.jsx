import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./layout/RootLayout";
import ContactFaq from "./components/ContactFaq";
import ContactForm from "./components/ContactForm";
import PageNotFound from "./PageNotFound";
import Articles from "./pages/Articles";
import ArticlesDetails from "./pages/ArticlesDetails";
import ArticlesLayout from "./layout/ArticlesLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index:true,
          element:<Home/>
        },
        {
          path: "articles",
          element: <ArticlesLayout />,
          children:[
            {
              index:true,
              element:<Articles/>
            }
            ,{
              path:":id",
              element:<ArticlesDetails/>
            },
          ]
        },
        
        {
          path: "about",
          element: <About />,
        },
       
        {
          path: "contact",
          element: <Contact />,
          children:[
            {
             path:'faq',
             element:<ContactFaq/>
            },
            {
              path:'form',
              element:<ContactForm/>
            },
          ]
          
        },
        
      ],
      
    },
    {
      path:"*",
      element:<PageNotFound/>
    }
  ]);

  return  <RouterProvider router={routes} />
}

export default App;
