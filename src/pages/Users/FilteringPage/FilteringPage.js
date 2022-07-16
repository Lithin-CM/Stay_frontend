import React from "react";
import "./FilteringPage.css";
import CardForListPage from "../../../components/CardForListPage/CardForListPage";
import NavBar from "../../../components/NavBar/NavBar";
import NavSuggesion from "../../../components/NavSuggesion/NavSuggesion";
import { useState } from "react";
import { AXIOS } from "../../../axios";
import { useEffect } from "react";
import { Form } from "react-bootstrap";

function FilteringPage() {
  const [hostels, setHostels] = useState([]);

  const fetchHostels = async () => {
    try {
      const { data } = await AXIOS.get(`user/Food_Hostel_PG`);
      setHostels(data)
    } catch (error) {
      console.log(error.response, "...........................");
    }
  };

  useEffect(()=>{
    fetchHostels();
  }, []);

  return (
    <div className="MainContainer">
      <NavBar />
      <NavSuggesion />
      <div className="pageWraper">
        
        <div className="page_filtre d-none d-md-block">
          <div className="listingPageFiltre shadow ">
            <h4 className="m-3">Filter</h4>
            <Form>
              <Form.Check 
                type="switch"
                id="custom-switch"
                label="Check this switch"
              />
              <Form.Check 
                type="switch"
                label="disabled switch"
                id="disabled-custom-switch"
              />
            </Form>

          </div>
        </div>
        <div className="page_content">
          <h1 className="m-3">Hostels near you</h1>
          {
          hostels.map(value=><CardForListPage data={value}/>)
          }
        </div>
        {/* <div style={{width: "5rem", height: "60vh", backgroundColor: "red"}} className="d-block d-md-none position-fixed ">

        </div> */}
      </div>
    </div>
  );
}

export default FilteringPage;
