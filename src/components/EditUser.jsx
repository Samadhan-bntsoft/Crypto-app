import { Form, Input, Button, Row, Col, message } from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEditMutation } from "../services/UserSliceApi";
import { useHistory } from "react-router";

const { TextArea } = Input;

const EditUser = () => {
  let history = useHistory();
  let { id } = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state) =>
    state.userSliceReducer.find((item) => item.id === id)
  );

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values) => {
    values.id = 'id';
    dispatch(useEditMutation(values));
    message.success("Update success!");
    history.push(`/adduser`);
  };

  const onFinishFailed = () => {
    console.log("Submit failed!");
  };

  return (
    <>
      <Row>
        <Col span={24} style={{ height: "100px" }}></Col>
        <Col span={24}>
          <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
            initialValues={data}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            validateMessages={validateMessages}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  message: "Username should be minimum 5 characters",
                  min: 5,
                },
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  message: "Description should be minimum 5 characters",
                  min: 5,
                },
                {
                  required: true,
                },
              ]}
            >
              <TextArea
                placeholder="Description"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default EditUser;
