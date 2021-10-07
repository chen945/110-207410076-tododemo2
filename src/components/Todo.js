import React,{useState} from 'react'
import Modal_76 from './Modal_76'
import Backdrop_76 from './Backdrop_76'

const Todo = props => {
    const [showModal, setShowModal] = useState(false)
    function ShowModalHandler(){
        setShowModal(true);
    }

    function closeModalHandler(){
        setShowModal(false);
    }


    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={ShowModalHandler}>Delete</button>
                </div>
            </div>
            {showModal && <Backdrop_76 onClose={closeModalHandler}/>}
            {showModal && <Modal_76 text='Are you sure?' onClose={closeModalHandler}/>}
            {/* {showModal && <Modal_76 onClose={closeModalHandler}/>} */}
        </div>
    );
}

export default Todo
