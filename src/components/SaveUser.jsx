import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Table,
  Space,
  Popconfirm,
  message,
} from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateMutation,
  useEditMutation,
  useDeleteMutation,
} from "../services/UserSliceApi";
import {
  
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";
const { TextArea } = Input;

const SaveUser = () => {
    let history = useHistory();

    function handleClick() {
    }

  const [initialValue, setinitialValue] = useState({
    username: "",
    description: "",
  });

  const UserNameRef = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userSliceReducer);

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values) => {
    dispatch(useCreateMutation(values));
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    console.log("Submit failed!");
  };

  const HandleEdit = (val) => {
      history.push(`/edituser/${val}`);

    // const UserData = data.find((item) => item.id === val);
    // if (UserData) {
    //   console.log(UserData);
    //   setinitialValue({
    //     username: UserData.username,
    //     description: UserData.description,
    //   });
    // }
  };
  const HandleDelete = (val) => {
    dispatch(useDeleteMutation(val));
  };

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => {
              HandleEdit(record.id);
            }}
          />
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              HandleDelete(record.id);
            }}
          >
            <DeleteOutlined />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    UserNameRef.current.focus();
  }, []);

  return (
    <>
      <Row>
        <Col span={24} style={{ height: "100px" }}></Col>
        <Col span={24}>
          <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
            initialValues={initialValue}
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
              <Input placeholder="Username" ref={UserNameRef} />
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
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={24} style={{ height: "auto" }}>
          <Table columns={columns} dataSource={data} size="middle" />
        </Col>
      </Row>
    </>
  );
};

export default SaveUser;
