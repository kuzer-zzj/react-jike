import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";
import "./index.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getChannelAPI } from "@/api/channel";
import { useEffect, useState } from "react";
import { creatArticleAPI, getArticleAPI, updateArticleAPI } from "@/api/article";
import { useChannleList } from "@/hooks/useChannel";

const { Option } = Select;

const Publish = () => {
  const { channels } = useChannleList();
  const onFinish = (formData) => {
    console.log("表单数据：", formData);
    const { title, content, channel_id } = formData;

    if (upImgList.length !== imgTyep)
      return message.warning("图片类型和数量不符！");

    const reqData = {
      title,
      content,
      channel_id,
      type: 1,
      cover: {
        type: imgTyep,
        images: upImgList.map((item) => {
          if (item.response) {
            return item.response.data.url;
          } else {
            return item.url;
          }
        }),
      },
    };
    if(id){
      reqData.id = id;
      updateArticleAPI(reqData)
      message.success("更新成功");
    }else{
      creatArticleAPI(reqData);
      message.success("发布成功");
    }
    
  };

  const [upImgList, setUpImgList] = useState([]);
  const onUploudChange = (info) => {
    console.log("图片上传：", info);
    setUpImgList(info.fileList);
  };

  const [imgTyep, setImgType] = useState(1);

  const onImgTypeChange = (e) => {
    console.log("图片类型切换：", e);
    setImgType(e.target.value);
  };

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("id=", id);

  const [form] = Form.useForm();
  useEffect(() => {
    console.log("form: ", form);
    async function getArticle() {
      const res = await getArticleAPI(id);
      const resultData = res.data;
      form.setFieldsValue({
        ...resultData,
        type: resultData.cover.type,
      });
      setImgType(resultData.cover.type);
      setUpImgList(
        resultData.cover.images.map((i) => {
          return { url: i };
        })
      );
    }
    if (id) {
      getArticle();
    }
  }, [id, form]);

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>首页</Link> },
              { title: `${id ? "更新文章" : "发布文章"}` },
            ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 1 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: "请选择文章频道" }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channels.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onImgTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imgTyep > 0 && (
              <Upload
                listType="picture-card"
                showUploadList
                action={"http://geek.itheima.net/v1_0/upload"}
                name="image"
                onChange={onUploudChange}
                maxCount={imgTyep}
                fileList={upImgList}
              >
                {" "}
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;
