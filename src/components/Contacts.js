import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDB from "../firebase";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contacts() {
  /*   const showAlert = () => {
    swal("Good job!", "Record inserted successfully", "success");
  }; */

  const addorEdit = (obj) => {
    if (currentId === "") {
      firebaseDB.child("contacts").push(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
          swal("", "Record inserted successfully", "success");
        }
      });
    } else {
      firebaseDB.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
          swal("", "Record updated successfully", "success");
        }
      });
    }
  };

  var [currentId, setCurrentId] = useState("");
  var [contacts, setContacts] = useState({});

  const resetCurrentItemId = () => {
    setCurrentId("");
  };

  const deleteItem = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((isConfirm) => {
      if (isConfirm) {
        firebaseDB.child(`contacts/${id}`).remove((err) => {
          if (err) {
            console.log(err);
          }
        });
        swal("Record deleted successfully!!", "", "success");
      } else {
        swal("Cancelled", "Your record is safe :)", "error");
      }
    });
  };

  useEffect(() => {
    firebaseDB.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContacts({
          ...snapshot.val()
        });
      }
    });
  }, []);

  return (
    <>
      <div className="jumbotron jumbotron-fluid bg-white">
        <div className="container">
          <h1 className="display-4 text-center">Contacts Application</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <ContactForm
            {...{ addorEdit, currentId, contacts, resetCurrentItemId }}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
          <h5>List of Contacts</h5>
          <div class="table-responsive">
            <table className="table" style={{ fontSize: "small" }}>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(contacts).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{contacts[id].fullName}</td>
                      <td>{contacts[id].mobile}</td>
                      <td>{contacts[id].email}</td>
                      <td>{contacts[id].address}</td>
                      <td>
                        <a
                          className="btn text-primary"
                          onClick={() => {
                            setCurrentId(id);
                          }}
                        >
                          <FontAwesomeIcon icon="pencil-alt" />
                        </a>
                        <a
                          className="btn text-danger"
                          onClick={() => {
                            deleteItem(id);
                          }}
                        >
                          <FontAwesomeIcon icon="trash" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
