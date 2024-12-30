import React from 'react'
import './Todo.css'

const Todo = () => {
  return (
    <section id='todo'>
        <div className="container">
            <div className="todo_head">
                <h2>
                    Things you need <span>to do</span>
                </h2>
                <p>
                    We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. 
                </p>
            </div>
            <div className="todo_card">
                <div className="singleTodoCard card1">
                    <div className="overlay"></div>
                    <div className="items">
                        <img src="images/todocard1img.png" alt="" />
                        <h3>Sign Up</h3>
                        <p>
                        Completes all the work associated with planning and processing
                        </p>
                    </div>
                </div>
                <div className="singleTodoCard card2">
                    <div className="overlay"></div>
                    <div className="items">
                        <img src="images/todocard2img.png" alt="" />
                        <h3>Worth of Money</h3>
                        <p>
                        After successful access then book from exclusive deals & pricing
                        </p>
                    </div>
                </div>
                <div className="singleTodoCard card3">
                    <div className="overlay"></div>
                    <div className="items">
                        <img src="images/todocard3img.png" alt="" />
                        <h3>Exciting Travel</h3>
                        <p>
                        Start and explore a wide range of exciting travel experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Todo