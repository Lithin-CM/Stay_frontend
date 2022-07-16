import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import NavBar from '../../../components/NavBar/NavBar'
import { useForm } from 'react-hook-form';
import { AXIOS } from '../../../axios';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';



function AddHostel() {
  const navigate = useNavigate();
  const token = localStorage.getItem('access')
  if(token){
    var decode = jwt_decode(token)
  }
  const schema = yup
  .object({
    Hostel_name: yup.string().required(),
    location: yup.string().required(),
    details: yup.string().max(500).required(),
    // image: yup.required(),
    facility1: yup.string().required(),
    facility2: yup.string().required(),
    facility3: yup.string().required(),
    facility4: yup.string().required(),
    facility5: yup.string().required()
  })
  .required();
 

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (datas) => {
    console.log(datas,"dadadaadadada");
    try {
      const formData = new FormData() 
      formData.append("Hostel_name",datas.Hostel_name)
      formData.append("Hostel_type", datas.Hostel_type);
      formData.append("details", datas.details);
      formData.append("facility1", datas.facility1)
      formData.append("facility2", datas.facility2);
      formData.append("facility3", datas.facility3);
      formData.append("facility4", datas.facility4)
      formData.append("facility5", datas.facility5);
      formData.append("food", datas.food);
      formData.append("location", datas.location);
      formData.append("owner", datas.owner);
      formData.append("pg", datas.pg);
      formData.append("image", datas.image[0],"image.png");

      const data  = await AXIOS.post("/hostal/registerHostel", 
        formData,{
        headers: {
          "content-type":"multipart/form-data",
        },
      });

      navigate(`/OwnerHome`)
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(errors);
  return (
    <div className='MainContainer'>
      <NavBar/>
      <Container>

      <div className="shadow p-5 rounded" >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="switch" id="custom-switch" label="This is a PG" {...register("pg", {})} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control value={decode.user_id} type="text"  {...register("owner", {})}  hidden />
            </Form.Group>

            <Form.Group as={Col} controlId="formName">
              <Form.Label>Hostel Name</Form.Label>
              <Form.Control type="text" placeholder="Hostel or PG Name" {...register("Hostel_name", {required: true, maxLength: 80})} />
              <p className='m-3' style={{color: "red"}}>{errors.Hostel_name?.message}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Type </Form.Label>
              <Form.Select {...register("Hostel_type", { required: true })}>
                <option value="Boys">Boys</option>
                <option value="Girls">Girls</option>
                <option value="Mixed">Mixed</option>
              </Form.Select>
            </Form.Group>
            
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="location" {...register("location", {required: true})}/>
            <p className='m-3' style={{color: "red"}}>{errors.location?.message}</p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
              <Form.Label>About</Form.Label>
              <Form.Control
                  as="textarea"
                  placeholder="About"
                  style={{ minHeight: '150px',height:"fit-content"}}
                  {...register("details", {required: true, maxLength: 500})}/>
              <p className='m-3' style={{color: "red"}}>{errors.details?.message}</p>
          </Form.Group>
          <Row > 
            <Col md={7}>
            <h3>Add an Image</h3>

              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Control type="file" {...register("image")} />
                <p className='m-3' style={{color: "red"}}>{errors.image?.message}</p>
              </Form.Group>

              <h3>Add Facilitys</h3>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Food available" {...register("food", {})} />
              </Form.Group>

              <Form.Group as={Col}  controlId="formName">
                  <Form.Label>One</Form.Label>
                  <Form.Control type="text" placeholder="Add new Facility" {...register("facility1", {required: true, maxLength: 80})} />
                  <p className='m-3' style={{color: "red"}}>{errors.facility1?.message}</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formName">
                  <Form.Label>Two</Form.Label>
                  <Form.Control type="text" placeholder="Add new Facility" {...register("facility2", {required: true, maxLength: 80})} />
                  <p className='m-3' style={{color: "red"}}>{errors.facility2?.message}</p>
              </Form.Group>

              <Form.Group as={Col}  controlId="formName">
                  <Form.Label>Three</Form.Label>
                  <Form.Control type="text" placeholder="Add new Facility" {...register("facility3", {required: true, maxLength: 80})} />
                  <p className='m-3' style={{color: "red"}}>{errors.facility3?.message}</p>
              </Form.Group>

              <Form.Group as={Col}  controlId="formName">
                  <Form.Label>Four</Form.Label>
                  <Form.Control type="text" placeholder="Add new Facility" {...register("facility4", {required: true, maxLength: 80})} />
                  <p className='m-3' style={{color: "red"}}>{errors.facility4?.message}</p>
              </Form.Group>

              <Form.Group as={Col}  controlId="formName">
                  <Form.Label>Five</Form.Label>
                  <Form.Control type="text" placeholder="Add new Facility" {...register("facility5", {required: true, maxLength: 80})} />
                  <p className='m-3' style={{color: "red"}}>{errors.facility5?.message}</p>
              </Form.Group>
            </Col>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </div>
      </Container>
    </div>
  )
}

export default AddHostel
