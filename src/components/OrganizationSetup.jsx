import React, { useState } from "react";

const dummyPages = [
  {
    url: "https://example.com/home",
    status: "Scraped",
    data: ["Welcome text", "Hero section"],
  },
  { url: "https://example.com/about", status: "Pending", data: [] },
];

const OrganizationSetup = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="registration_container">
      <h2 className="registration_heading">Setup Organization</h2>
      <input
        type="text"
        placeholder="Company Name"
        className="registration_input"
      />
      <input
        type="url"
        placeholder="Website URL"
        className="registration_input"
      />
      <textarea
        placeholder="Company Description"
        className="registration_input"
      ></textarea>
      <h3 className="detected_heading">Detected Webpages:</h3>
      {dummyPages.map((page, idx) => (
        <div key={idx} className="page" onClick={() => setSelectedPage(page)}>
          <p>
            {page.url} - <strong>{page.status}</strong>
          </p>
        </div>
      ))}
      {selectedPage && (
        <div className="mt-4 p-2 border">
          <h4 className="font-bold">Data from {selectedPage.url}</h4>
          <ul>
            {selectedPage.data.length ? (
              selectedPage.data.map((chunk, idx) => <li key={idx}>{chunk}</li>)
            ) : (
              <li>No data yet.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrganizationSetup;
