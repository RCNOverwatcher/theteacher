import React from "react";

function Structured_Query_Language__SQL____adding__removing_and_amending_data() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1 style="text-align: center">
                                Structured Query Language (SQL) - adding,
                                removing and amending data
                              </h1>
                              <p style="text-align: left">
                                <strong style="line-height: 1.5">
                                  Adding, deleting and updating data in a table
                                  <br />
                                </strong>
                                The <strong>INSERT INTO</strong> command is used
                                to add data into a table. Here is an example of
                                adding a new record to the Owners' table:
                              </p>

                              <p style="margin-left: 30px">
                                <strong>
                                  INSERT INTO tblOWNERS (ID, TITLE, Surname,
                                  Phone_no, Registration)
                                </strong>
                                <br />
                                <strong>
                                  VALUES (5, "Mr", "Smith", "091123456",
                                  "1996-10-12")
                                </strong>
                              </p>
                              <p>
                                Notice the use of quotation marks and the format
                                that of the date.
                              </p>
                              <p
                                style="
                              margin-top: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                The&nbsp;<strong>DELETE FROM</strong>
                                &nbsp;command is used to delete a record (a row)
                                from a table. Here is an example of removing a
                                record from the Owners' table:
                              </p>
                              <p
                                style="
                              margin-left: 30px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>DELETE FROM tblOWNERS&nbsp;</strong>
                                <br />
                                <strong>WHERE Surname = "Smith"</strong>
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                Notice the use of quotation marks and the format
                                that of the date.
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                We can update individual pieces of information
                                in a field using the <strong>UPDATE</strong>{" "}
                                command. Here is an example:
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                              margin-left: 30px;
                            "
                              >
                                <strong>UPDATE tblOwners</strong>
                                <br />
                                <strong>SET Phone_no="021888888"</strong>
                                <br />
                                <strong>WHERE Surname="Smith"</strong>
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Structured_Query_Language__SQL____adding__removing_and_amending_data;
