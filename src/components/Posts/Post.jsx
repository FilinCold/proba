import React from "react";
import {NavLink} from "react-router-dom";

const Post = (props) => {

  return (
    <div>
      <div className='buttton__main'>
        <NavLink to='/'>Main</NavLink>
      </div>
      <div className='container__post'>

        <div className="post">
          <h1>Humane Typography in the Digital Age</h1>
          <ul className='list'>
            <li>
              <a href="">The first transition</a>
            </li>
            <li><a href="">The digital age</a></li>
            <li><a href="">Loss of humanity through transitions</a></li>
            <li><a href="">Chasing perfection</a></li>
          </ul>
          <p className='text__class'>
            An Essay on Typography by Eric Gill takes the reader back to the year 1930.
            The year when a conflict between two worlds came to its term. The machines
            of the industrial world finally took over the handicrafts.
          </p>
          <p className='text__class'>
            The typography of this undustrial age was no longer handcrafted. Mass production
            and profit became more important. Quantity mattered more than the quality.
            The books and printed works in general lost a part of its humanity.
            The typefaces were not produced by craftsmen anymore. It was the machines printing
            and tying the books together now. The craftsmen had to let go of their craft and became a cog in the
            process.
            An extension of the industrial machine.
          </p>
          <p className='text__class'>
            But the victory of the industrialism didn't mean that the craftsmen were completely extinct.
            The two worlds continued to coexist independently. Each recongnized the good in the other - the power
            of industrialism and the humanity of craftsmanship. This was the second transition that would strip
            typography
            of a part of its humanity. We have to go 500 years back in time to meet the first one.
          </p>

        </div>
      </div>
    </div>

  )
}


export default Post;