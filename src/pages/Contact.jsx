import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
function Contact() {
    return (
      <div>
          <h1 className="text-3xl mb-8">Contact</h1>
          <p className="text-left mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, temporibus. Harum reprehenderit hic nam atque eos ipsa impedit eveniet fugit deserunt, voluptatem expedita numquam culpa maiores odio quas vitae nesciunt, molestiae inventore laboriosam? Minima reiciendis tempora exercitationem, numquam aperiam perspiciatis deleniti architecto qui suscipit dolore.</p>

          <Link className="btn btn-accent" to="form">Contact Form</Link>
    
          <Link className="btn btn-primary" to="faq">Faq</Link>
          <Outlet/>

      </div>
    )
  }
  
  export default Contact