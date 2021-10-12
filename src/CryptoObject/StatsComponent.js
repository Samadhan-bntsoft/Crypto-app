import React from 'react'
import { Col, Typography } from "antd";
import { stat } from '.';
const { Title, Text } = Typography;


const StatsComponent = ({ cryptodetails }) => {
  const stats = stat(cryptodetails);

  return (
    <>
      <Col className="coin-value-statistics">
        <Col className="coin-value-statistics-heading">
          <Title level={3} className="coin-details-heading">
            {cryptodetails.name} Value Statistics
          </Title>
          <p>
            An overview showing the statistics of {cryptodetails.name}, such as
            the base and quote currency, the rank, and trading volume.
          </p>
        </Col>
        {stats.map(({ icon, title, value }) => (
          <Col className="coin-stats">
            <Col className="coin-stats-name">
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className="stats">{value}</Text>
          </Col>
        ))}
      </Col>
    </>
  );
};

export default StatsComponent
