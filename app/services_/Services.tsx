"use client";
import React, { useState } from "react";
import ServiceTypeControls from "@/components/ServiceTypeControls";
import ContractWorkServiceSheet from "@/components/ContractWorkServiceSheet";
import WebDesignDevelopmentServiceSheet from "@/components/WebDesignDevelopmentServiceSheet";
import PersonalProjectDevelopmentServiceSheet from "@/components/PersonalProjectDevelopmentServiceSheet";
import WebsitePackageOverview from "@/components/WebsitePackageOverview";

function Services() {
  const [selectedType, setSelectedType] = useState<string>("all");

  return (
    <div className="container">
      <WebsitePackageOverview />
    </div>
  );
}

export default Services;
