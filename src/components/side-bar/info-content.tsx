import React from "react";
import config from "@/config";

const { status } = config;
const { about } = config;
const {
  firstName,
  lastName,
  middleName, // TODO: Research how to render this in the UI
  preferredName,
} = about;

const InfoContent: React.FC = () => (
  <div className="info-content">
    <h1 className="name" title={`${firstName} ${middleName} ${lastName}`}>
      {firstName} {middleName} {lastName}
    </h1>
    <p className="title">
      <strong>{status}</strong>
    </p>
  </div>
);

export default InfoContent;
