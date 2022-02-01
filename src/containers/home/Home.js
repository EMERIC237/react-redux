import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";
import { useSelector, useDispatch, connect } from "react-redux";
import { getForm, deleteForm, updateForm } from "../../redux/form/formReducer";
import { v4 as uuidv4 } from "uuid";
import "./Home.css";

function Home() {
  const { forms } = useSelector((state) => ({
    ...state.formReducer,
  }));
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [formToChange, setFormToChange] = useState({});

  useEffect(() => {
    dispatch(getForm());
  },[]);

  // useEffect(() => {
  //   setFormToChange()
  // }, [formToChange]);

  const updateClick = (form) => {
    setFormToChange((previousForm) => ({
      ...previousForm,
      ...form,
    }));
    setShow(true);
  };

  if (forms.length === 0) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <Navbar />
      {forms.map((form) => {
        return (
          <Card key={uuidv4()}>
            <h1> {form.id} </h1>
            <h5> {form.title} </h5>
            <p> {form.body} </p>
            <button
              id={form.id}
              onClick={() => {
                dispatch(deleteForm(form.id));
              }}
            >
              remove
            </button>

            <button id={form.id} onClick={()=>updateClick(form)}>
              update{" "}
            </button>
          </Card>
        );
      })}
      {show ? (
        <Modal
          onClose={() => setShow(false)}
          show={show}
          formId={formToChange.id}
          formTitle={formToChange.title}
          formBody={formToChange.body}
        />
      ) : null}
    </>
  );
}

// const mapStateToProps = (state) =>{
//   return {
//     forms: state.formReducer.forms
//   }
// }

// const mapDispatchToProps = (dispatch) =>{
//   return{
//     getForm:()=>{
//       dispatch(formReducer.getForm())
//     },
//     deleteForm:(formId)=>{
//       dispatch(formReducer.deleteForm(formId))
//     }
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home;
