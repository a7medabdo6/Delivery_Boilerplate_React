import React, { Fragment } from "react";
import * as gallery from "../Gallery/gallerydata";
import { Link } from "react-router-dom";
import {
  Tab,
  Nav,
  Dropdown,
  Form,
  Button,
  Col,
  Breadcrumb,
  Row,
  FormGroup,
  Card,
} from "react-bootstrap";
const Profile = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header ">
      <div>
        <h2 className="main-content-title  tx-24 mg-b-5">Create Client</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
          <Breadcrumb.Item active> Client </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    <div className="main-content-body  bg-white tab-pane p-sm-4 p-0 border-top-0">
      <div className="card-body border">
        {/* <div className="mb-4 main-content-label">Create</div> */}
        <Form className="form-horizontal">
          <div className="card p-3 m-2">
            <Row className=" row-sm ">
              <Col md={4}>
                <FormGroup className="form-group">
                  <Row className=" row-sm">
                    <Col md={3}>
                      <Form.Label> الرقم الالي</Form.Label>
                    </Col>
                    <Col md={9}>
                      <Form.Control type="text" placeholder="الرقم الالي" />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup className="form-group">
                  <Row className=" row-sm">
                    <Col md={3}>
                      <Form.Label> رقم القضيه</Form.Label>
                    </Col>
                    <Col md={9}>
                      <Form.Control type="text" placeholder="الرقم الالي" />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup className="form-group">
                  <Row className=" row-sm">
                    <Col md={3}>
                      <Form.Label> رقم التنفيذ</Form.Label>
                    </Col>
                    <Col md={9}>
                      <Form.Control type="text" placeholder="الرقم الالي" />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <div className="card p-3 m-2">
            <Row className="  row-sm">
              <Col md={12}>
                <FormGroup className="form-group">
                  <Row className=" row-sm">
                    <Col md={2}>
                      <Form.Label> الموضوع</Form.Label>
                    </Col>
                    <Col md={10}>
                      <Form.Control type="text" placeholder="الرقم الالي" />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="form-group">
                  <Row className=" row-sm">
                    <Col md={3}>
                      <Form.Label> الموكل</Form.Label>
                    </Col>
                    <Col md={9}>
                      <Form.Control type="text" placeholder="الرقم الالي" />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="form-group">
                  <Row className=" row-sm">
                    <Col md={3}>
                      <Form.Label> الخصم</Form.Label>
                    </Col>
                    <Col md={9}>
                      <Form.Control type="text" placeholder="الرقم الالي" />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="form-group">
                  <Row className=" row-sm">
                    <Col md={3}>
                      <Form.Label> الصفه</Form.Label>
                    </Col>
                    <Col md={9}>
                      <Form.Control type="text" placeholder="الرقم الالي" />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="form-group">
                  <Row className=" row-sm">
                    <Col md={3}>
                      <Form.Label> الصفه</Form.Label>
                    </Col>
                    <Col md={9}>
                      <Form.Control type="text" placeholder="الرقم الالي" />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <Row className="  row-sm">
            <Col md={6}>
              <div className="card p-3 m-2">
                <Row className="  row-sm">
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={4}>
                          <Form.Label> تاريخ الوارد</Form.Label>
                        </Col>
                        <Col md={8}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={4}>
                          <Form.Label> الكود</Form.Label>
                        </Col>
                        <Col md={8}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={2}>
                          <Form.Label> المستشار</Form.Label>
                        </Col>
                        <Col md={10}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="card p-3 m-2">
                <Row className="  row-sm">
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={4}>
                          <Form.Label> اول درجه</Form.Label>
                        </Col>
                        <Col md={8}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={4}>
                          <Form.Label> الطابق</Form.Label>
                        </Col>
                        <Col md={8}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={2}>
                          <Form.Label> القاعه</Form.Label>
                        </Col>
                        <Col md={10}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="  row-sm">
            <Col md={6}>
              <div className="card p-3 m-2">
                <Row className="  row-sm">
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={4}>
                          <Form.Label> تاريخ الوارد</Form.Label>
                        </Col>
                        <Col md={8}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={4}>
                          <Form.Label> الكود</Form.Label>
                        </Col>
                        <Col md={8}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={2}>
                          <Form.Label> المستشار</Form.Label>
                        </Col>
                        <Col md={10}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="card p-3 m-2">
                <Row className="  row-sm">
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={4}>
                          <Form.Label> اول درجه</Form.Label>
                        </Col>
                        <Col md={8}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={4}>
                          <Form.Label> الطابق</Form.Label>
                        </Col>
                        <Col md={8}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup className="form-group">
                      <Row className=" row-sm">
                        <Col md={2}>
                          <Form.Label> القاعه</Form.Label>
                        </Col>
                        <Col md={10}>
                          <Form.Control type="text" placeholder="الرقم الالي" />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  </Fragment>
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
