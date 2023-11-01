import React from "react";

function An_introduction_to_the_role_of_the_DBMS() {
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
                                An introduction to the role of the DBMS
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Databases can be large and have many users. If
                                lots of different users access the same files on
                                a database at the same time, problems can occur
                                for the operating system. This problem can be
                                overcome by using a 'Database Management System'
                                (DBMS). This is a piece of software, which sits
                                between the actual database of data and the
                                applications that use the data.
                              </p>

                              <p style="text-align: center">
                                <img
                                  src="images/11bc20bb-7eda-47a3-a423-04122be8d604DBMS.GIF"
                                  alt="DBMS"
                                />
                              </p>
                              <p>
                                <strong>What does the DBMS do</strong>?<br />
                                The DBMS performs a number of very important
                                jobs:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      it searches data in a database, adds new
                                      data and changes existing data
                                    </li>
                                    <li>
                                      it provides an interface for the user, so
                                      complicated tasks can be carried out
                                      without the user ever needing to know how
                                      it was done.
                                    </li>
                                    <li>
                                      it provides a range of maintenance
                                      functions, for example, making sure the
                                      data is stored properly.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                A DBMS software is made up of two main parts,
                                the DDL and the DML.
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/f9be9f8e-7871-45ff-995d-240752a2f8b1DDL.GIF"
                                  alt="DDL"
                                />
                              </p>
                              <p>
                                <strong>
                                  The Data Definition Language (DDL)
                                </strong>
                                <br />
                                The Data Definition Language (DDL) is software
                                used by the database designer to create and
                                maintain the database. Using this software,
                                tables of data can be defined, including
                                defining the data, the data types and validation
                                rules required.
                              </p>
                              <p>
                                It is also used to set-up database security. It
                                can be used to set up each authorised user with
                                a login and password and also to define what
                                parts of the database each user will be able to
                                access. You don't want a company's nurse
                                accessing sensitive financial information on a
                                database just as you don't want the company's
                                accountant having access to everyone's health
                                records! Each authorised user can see different
                                parts of the same database. We say that each
                                person has a 'view' of the database and setting
                                up views for different users is an important
                                part of setting up a database. The other
                                important security feature that is provided is
                                the ability to back-up the database and recover
                                the data in the event of a serious problem.
                              </p>
                              <p>
                                <strong>
                                  The Data Manipulation Language (DML)
                                </strong>
                                <br />
                                The DML software is software that is commonly
                                used by the users of a database to access and
                                update data. You can write programs that add,
                                delete, modify or retrieve data, for example,
                                using queries.
                              </p>
                              <p>
                                <strong>
                                  Separation of data from applications
                                </strong>
                                <br />
                                We have already seen that the DBMS software sits
                                between the actual database of data and the
                                applications that run it. The data is separated
                                from the applications that use it. (This wasn't
                                always the case. At one time, the data and the
                                programs that used the data were closely
                                intertwined). Separation is desirable because:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      applications can be designed or modified
                                      without having to worry about the design
                                      of the database.
                                    </li>
                                    <li>
                                      the underlying database design can be
                                      modified without worrying about the
                                      applications that use it.
                                    </li>
                                    <li>
                                      different applications can be developed by
                                      different companies or individuals that
                                      make use of a single database.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  The Database Administrator (DBA)
                                </strong>
                                <br />
                                The Database Administrator is the job title
                                given to the person, whose job it is to look
                                after and manage the data in an organisation's
                                database. They make sure that the structure of
                                the data is appropriate to the needs of the
                                users and that everything works as it should.
                                They also make sure that the data is secured
                                properly, by controlling who can access it and
                                making sure it is backed-up properly.
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

export default An_introduction_to_the_role_of_the_DBMS;