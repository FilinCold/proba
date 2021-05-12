import React from "react";
import {NavLink} from "react-router-dom";

const Post = (props) => {
  const allPosts = [
    {
      post: [
        {text: '<h1>Humane Typography in the Digital Age</h1>'},
        {
          text: '<ul class="list">' +
            '<li><a>The first transition</a></li>' +
            '<li><a>The digital age</a></li>' +
            '<li><a>Loss of humanity through transitions</a></li>' +
            '<li><a>Chasing perfection</a></li>' +
            '</ul>'
        },
        {
          text: '<p class="text__class">An Essay on Typography by Eric Gill takes the reader back to the year 1930 of the industrial world finally took ' +
            'over the handicrafts.</p>'
        },
        {
          text: '<p class="text__class">The typography of this undustrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality.The books and printed works in general lost a part of its humanity. The typefaces were not produced by ' +
            'craftsmen anymore. It was the machines printing and tying the books together now. The craftsmen had to let go of their craft and became a cog in ' +
            'the process. An extension of the industrial machine.</p>'
        },
        {
          text: '<p class="text__class">An Essay on Typography by Eric Gill takes the reader back to the year 1930 of the industrial world finally took over the handicrafts.</p>'
        },
        {
          text: '<h2 class="style__header2">The first transition</h2>'
        },
        {
          text: '<p class="text__class">A similar conflict emerged after the invention of the first printing press in Europe. ' +
            'Johannes Gutenberg invented movable type and used it to produce different compositions. ' +
            'His workshop could print up to 240 impressions per hour. Until then, the books were being' +
            'copied by hand. All the books were handwritten and decorated with hand drawn ornaments and' +
            'figures. A process of copying a book was long but each book, even a copy, was a work of art.</p>'
        },
        {
          text: '<p class="text__class">The first printed books were, at first, perceived as inferior to the handwritten ones. ' +
            'They were smaller and cheaper to produce. Movable type provided the printers with flexibility' +
            'that allowed them to print books in languages other than Latin. Gill describes the transition' +
            'to industrialism as something that people needed and wanted. Something similar happened after' +
            'the first printed books emerged. People wanted books in a language they understood and they wanted' +
            'books they could take wuth them. The were hungry for knowledge and printed books satisfied this hunger</p>'
        },

        {
          text: '<div class="img__style">' +
            '<img src="https://images.squarespace-cdn.com/content/v1/58991c8bd482e95eeac40846/1491073418372-HFOUS8F4CON1B3KBALTU/ke17ZwdGBToddI8pDm48' +
            'kAznA_0apmJf6xI4vBeoA3lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XR' +
            'K3dMEBRBhUpya70s9eHoxDaOzVL_NFzkUD59Ka0RCSZbGJIDFL9wnMqASZuNMiWXCyn-_VLwnmAQ/img-books.jpg?format=1500w"/></div>'
        },
        {
          text: '<p class="title__style"><i>The 42-Line Bible, printed by Gutenberg.</i></p>'
        },
        {
          text: '<p class="text__class">But, through this transition, the book lost a large part of its humanity. ' +
            'The machine took over most of the process but craftsmanship was still a part of it. ' +
            'The typefaces were cut manually by the first punch cutters. The paper was made by hand.' +
            'The illustrations and ornaments were still being hand drawn. These were the remains of the ' +
            'craftsmanship tha went almost extinct in the time of Eric Gill.</p>'
        },
        {
          text: '<h2 class="style__header2">The digital age</h2>'
        },
        {
          text: '<p class="text__class">The first transition took away a large part of humanity from written' +
            'communication. Indistrialisation, the second transition described by Eric Gill,' +
            'took away most of what was left. But its the third transition that stripped it naked.' +
            'Typefaces are faceless these days. They just fonts on our computers. Hardly anyone cares.' +
            'Flicking through thousands of typefaces and finding the "right one" is a matter of minutes.</p>'
        },
        {
          text: '<p class="title__style" style="text-align: center"><i>In the new computer age the proliferation of typefaces and type manipulations represents' +
            'a new level of visual pollution threatening our culture. Out of thousands of typefaces, all' +
            'we nedd are a few basic ones, and trash the rest.</i></p>'
        },
        {
          text: '<p class="author__style"><i>— Massimo Vignelli</i></p>'
        },
        {
          text: '<p class="text__class">Typography is not about typefaces. Its not about what looks best, its about' +
            'what feels right. What comminicates the message best. Typography, in its essence,' +
            'is about the message. "Typographical design should perform optically what the speaker' +
            'creates through voice and gesture of his thoughts.", as El Lissitzky, a famous Russian' +
            'typographer, put it.</p>'
        },
        {
          text: '<h2 class="style__header2">Loss of humanity through transitions</h2>'
        },
        {
          text: '<p class="text__class">Each transition took away a part of humanity from written laguage. Handwritten books' +
            'being the most humane form and the digital typefaces being the least. Overuse of Helvetica' +
            'is a good example. Messages are being told in a typeface just because its a safe option. Its' +
            'always there. Everyone knows it but yet, nobody knows it. Stop someone on the street and ask' +
            'him what Helvetica is? Ask a designer the same question. Ask him where it came from, when, why' +
            'and who designed it. Most of them will fail to answer these questions. Most of them used it in their' +
            'precious projects but they still dont spot it in the street.</p>'
        },
        {
          text: '<p style="text-align: center; font-size: 22px" class="title__style"><i>Knowledge of the quality of a typeface is of the greatest ' +
            'importance for the functional,' +
            'aesthetic and psychological effect.</i></p>'
        },
        {
          text: '<p class="author__style"><i>— Josef Mueller-Brockmann</i></p>'
        },
        {
          text: '<p class="text__class">Typefaces dont look handmade these days. And thats all right. They dont have to. ' +
            'Industrialism took that away from them were fine with it. Weve traded that part of humanity' +
            'for a process that produces more books that are easier to read. That cant be bad. And it isnt</p>'
        },
        {
          text: '<p style="text-align: center" class="text__class"><i>Humane typography will often be comperatively rough and even uncouth; but while a certain' +
            'uncouthness does not seriously matter in humane works, uncouthness has no excuse whatever in the' +
            'productions of the machine.</i></p>'
        },
        {
          text: '<p class="author__style"><i>— Eric Gill</i></p>'
        },
        {
          text: '<p class="text__class">Weve come close to "perfection in the last five centuries. The letters are crisp and without' +
            'rough edges. We print our compositions with high-precision printers on a high quality, machine paper."</p>'
        },
        {
          text: '<div class="images__wrapper">' +
            '<img src="https://img.freepik.com/free-psd/front-view-two-hard-cover-book-mockup_1150-37607.jpg?size=626&ext=jpg">' +
            '<img src="https://img.freepik.com/free-psd/photorealistic-hardcover-book-mockup_146060-25.jpg?size=626&ext=jpg&ga=GA1.2.901275435.1618963200">' +
            '<img src="https://blog.apps.npr.org/img/book-concierge-2019.jpg">' +
            '<img src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?size=338&ext=jpg">' +
            '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxb1Xw0_eCZEMFx2a5vRo6fGSKLJAr_SfGA&usqp=CAU">' +
            '</div>'
        },
        {
          text: '<p class="title__style"><i>Type through 5 centuries.</i></p>'
        },
        {
          text: '<p class="text__class">We lost a part of ourselves because of this chase after perfection. We forgot about' +
            'the craftsmanship along the way. And the worst part is that we dont care. The transition' +
            'to the digital age made that clear. We choose typefaces like clueless zombies. Theres no meaning' +
            'in our work. Type sizes, leading, margins... Its all just a few clicks or lines of code. The message' +
            'isnt important anymore. Theres no more "why" behind the "what".</p>'
        },
        {
          text: '<h2 class="style__header2">Chasing perfection</h2>'
        },
        {
          text: '<p class="text__class">Human beings arent perfect. Perfection is something that will always elude us. There' +
            'will always be a small part of humanity in everything we do. No matter how small that part,' +
            'we should make sure that it transcends the limits of the medium. We have to think about the' +
            'message first. What typeface should we use and why? Does the typeface match the message and what' +
            'we want to communicate with it? Wha will be the leading and why? Will there be more typefaces in our' +
            'design? On what ground will they be combined? What makes our design unique and why? This is the part' +
            'of humanity that is left in typography. It might be the last part. Are we really going to give it up?</p>'
        },
        {
          text: '<div class="wrapper__name-app">' +
            '<span><i>Originally published by </i></span>' +
            '<span class="titles__name-app"><i><a href="#">Matej Latin </a></i></span>' +
            '<span><i>on </i></span>' +
            '<span class="titles__name-app"><i><a href="#">Medium</a></i></span>' +
            '</div>'
        },
        {
          text: '<p class="title__style"><i>Published Aug 20, 2017 by John Doe</i></p>'
        }
      ]
    },

  ];
  return (
    <div className='post'>
      <div className='buttton__main'>
        <NavLink to='/signin/' >Main</NavLink>
      </div>
      <div className='container__posts'>
        {
          allPosts.map(e => {
            return e.post.map(e => {
              return <div dangerouslySetInnerHTML={{__html: e.text}}></div>
            })
          })
        }
      </div>


    </div>

  )
}


export default Post;