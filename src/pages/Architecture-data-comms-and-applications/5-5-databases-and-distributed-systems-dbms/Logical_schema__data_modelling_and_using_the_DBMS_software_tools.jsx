import React from "react";

function Logical_schema__data_modelling_and_using_the_DBMS_software_tools() {
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
                                Logical schema, data modelling and using the
                                DBMS software tools
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Databases must be designed. DBMS's often have
                                software that allow you to design the database
                                structure before it is implemented.
                              </p>

                              <p>
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    Data modelling
                                  </span>
                                  <br
                                    style="
                                  line-height: 16.3636360168457px;
                                "
                                  />
                                </strong>
                                <span style="line-height: 16.3636360168457px">
                                  Data modelling is a 'high level'
                                  implementation design of the database. This is
                                  achieved using techniques such as
                                  Entity-Relationship Diagrams and Jackson
                                  Structured Programming (JSP) diagrams. When we
                                  say 'high level' what we mean is that it gives
                                  the big picture without the detail. So for
                                  example, E-R diagrams would show you what
                                  tables you need and the relationships between
                                  them, but not the data that was in each table
                                  or information about queries, reports, forms
                                  and so on. A typical E-R diagram looks like
                                  this:
                                </span>
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/e51872ef-2d6a-4e76-a250-9b7db3eeb7b5er.GIF"
                                  alt="er"
                                />
                              </p>
                              <p>
                                Once you have the high level E-R diagram, you
                                can use it to start designing each individual
                                table in the database model (see further below).
                              </p>
                              <p>
                                A JSP diagram is also a high level diagram. It
                                gives you information about how an entity
                                (something in your database) is created and
                                destroyed, and all the different things that can
                                happen to it in the database but not the detail
                                about how these things actually get initiated. A
                                typical JSP diagram looks like this:
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/3df6dfe5-5fab-421e-b4f5-1a12407776d7jsp.JPG"
                                  alt="jsp"
                                />
                              </p>
                              <p>
                                <strong>
                                  Logical schema
                                  <br />
                                </strong>
                                Logical schema is an actual detailed
                                specification and design of your database.
                                Again, this is part of the software tools in a
                                DBMS. Using the DBMS tools, you can set up:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      what tables you need to have in your
                                      database
                                    </li>
                                    <li>
                                      how the tables are related to each other
                                    </li>
                                    <li>
                                      what forms you need to enter in data and
                                      what they might look like
                                    </li>
                                    <li>
                                      what queries you might need to carry out
                                    </li>
                                    <li>
                                      what reports you might need and what they
                                      will look like
                                    </li>
                                    <li>
                                      what the switchboard might look like
                                    </li>
                                    <li>
                                      what automated routines you might need
                                      using macros and modules
                                    </li>
                                    <li>
                                      what data you need in each table and the
                                      rules associated with each piece of data
                                      e.g. data type, validation rules.&nbsp;
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                You can get a lot of information about database
                                design
                                <a
                                  href="/index.php/a-level-computing/normalisation"
                                  target="_blank"
                                >
                                  here in our Students Workbook on Normalisation
                                </a>
                                .
                              </p>
                              <p>
                                <strong>
                                  Using the software tools in a DBMS
                                </strong>
                                <br />
                                Your teacher should ask you to design and set-up
                                a simple database so that you can get experience
                                using the developer tools. You will probably use
                                Access to do this. You should typically follow
                                the following steps:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      use the developer interface to specify
                                      what tables you want
                                    </li>
                                    <li>
                                      define the relationships between the
                                      tables
                                    </li>
                                    <li>
                                      set-up referential integrity between
                                      tables
                                    </li>
                                    <li>
                                      design the data dictionary, including
                                      specifying the data in each table, the
                                      data types and the validation rules
                                    </li>
                                    <li>design the forms for entering data</li>
                                    <li>add test data to each table</li>
                                    <li>
                                      design the queries you need and test them
                                      using the query tools
                                    </li>
                                    <li>
                                      design the reports that you need using the
                                      report tools
                                    </li>
                                    <li>
                                      create any automated routines you need
                                      e.g. the autoexec macro when the database
                                      opens
                                    </li>
                                    <li>design a switchboard.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                There are plenty of YouTube tutorials to help
                                you get experience of using these tools. Try
                                typing in 'Access database beginner' into
                                YouTube's search engine.
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

export default Logical_schema__data_modelling_and_using_the_DBMS_software_tools;
