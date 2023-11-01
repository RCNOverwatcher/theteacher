import React from "react";

function DDL_and_DML() {
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
                              <h1 style="text-align: center">DDL and DML</h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Introduction
                                  <br />
                                </strong>
                                <span style="line-height: 16.3636360168457px">
                                  Broadly speaking, there are two main
                                  functioning parts to a DBMS. These are the DDL
                                  and the DML.
                                </span>
                              </p>

                              <p class="NormalContent">
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Data Definition Language (DDL)
                                  <br />
                                </strong>
                                The Data Definition Language (DDL) is one part
                                of the DBMS. It is used by the designer of a
                                database rather than a user. The DDL is used to
                                set up the structure of a database as well as
                                for maintaining the database. For example, using
                                the DDL, they can set up tables of data about
                                data (names of attributes, data types,
                                validation rules etc). The data about data is
                                often called ‘meta-data’. The DDL is also used
                                to set up the security systems in the database.
                                This is done using the DDL by describing the
                                whole database (the ‘schema’) and then
                                describing data in <em>parts</em> of the
                                database (the ‘sub-schema’). Once this has been
                                done, the designer can control access to each of
                                the sub-schema. For example, if a receptionist
                                needs to know each employee’s department,
                                extension and job title, then a sub-schema will
                                be defined with these data items in it. The
                                receptionist is then given access to that
                                sub-schema (she is allowed to view that data on
                                her screen) but not other sub-schema. That means
                                she cannot, for example, access how much an
                                employee earns, or the contents of their
                                personnel file. Using the DDL, then, different
                                users of a database can be allowed to access
                                certain sub-schema but not others.&nbsp; Users
                                can be given different ‘views’ of the same data
                                in a database.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Data Manipulation Language (DML)
                                </strong>
                                <br />
                                The DML is another important part of the DBMS.
                                It is commonly used by the users of a database
                                to access and update data. This language allows
                                users to actually work on the data in your
                                database. They could, for example, write
                                programs that add, delete, modify or retrieve
                                data! The DML is a high level language. This
                                ensures that minimal programming skills are
                                necessary to actually use it.&nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>Structured Query Language (SQL)</strong>
                                <br />
                                The industry standard for DDL and DML is called
                                Structured Query Language, or SQL. We should get
                                some experience using SQL.
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

export default DDL_and_DML;