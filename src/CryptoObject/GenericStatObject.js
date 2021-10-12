import React from "react";
import { Col, Typography } from "antd";
import { genericStat } from ".";
const { Title, Text } = Typography;

export const GenericStatObject = ({ cryptodetails }) => {
  const genericStats = genericStat(cryptodetails);

  return (
    <>
      <Col className="other-stats-info">
        <Col className="coin-value-statistics-heading">
          <Title level={3} className="coin-details-heading">
            Other Stats Info
          </Title>
          <p>
            An overview showing the statistics of {cryptodetails.name}, such as
            the base and quote currency, the rank, and trading volume.
          </p>
        </Col>
        {genericStats.map(({ icon, title, value }) => (
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

export default GenericStatObject;
