"use client";
import React, { useState } from "react";
import ServiceTypeControls from "@/components/ServiceTypeControls";
import ContractWorkServiceSheet from "@/components/ContractWorkServiceSheet";
import WebDesignDevelopmentServiceSheet from "@/components/WebDesignDevelopmentServiceSheet";
import PersonalProjectDevelopmentServiceSheet from "@/components/PersonalProjectDevelopmentServiceSheet";

function Design() {
  const [selectedType, setSelectedType] = useState<string>("design");

  return (
    <div className="container">
      <ServiceTypeControls
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />
      <div className="grid grid-cols-1 mb-4">
        {selectedType === "all" && (
          <>
            <ContractWorkServiceSheet />
            <WebDesignDevelopmentServiceSheet />
            <PersonalProjectDevelopmentServiceSheet />
          </>
        )}
        {selectedType === "contract" && <ContractWorkServiceSheet />}
        {selectedType === "design" && <WebDesignDevelopmentServiceSheet />}
        {selectedType === "sass" && <PersonalProjectDevelopmentServiceSheet />}
      </div>
    </div>
  );
}

export default Design;
