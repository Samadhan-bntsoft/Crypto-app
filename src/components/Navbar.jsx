import React,{useState,useEffect} from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/icon.png";

const Navbar = () => {
  const [activeMenu, setactiveMenu] = useState(true)
  const [screenSize, setscreenSize] = useState(null)

  useEffect(() => {
    const handleSize = () => setscreenSize(window.innerWidth);
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);

  }, [])

  useEffect(() => {
    if (screenSize < 768) {
      setactiveMenu(false)
    }
    else {
      setactiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="small" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto app</Link>
          <Button
            className="menu-control-container"
            onClick={() => setactiveMenu(!activeMenu)}
          >
            <MenuOutlined />
          </Button>
        </Typography.Title>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrency</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
