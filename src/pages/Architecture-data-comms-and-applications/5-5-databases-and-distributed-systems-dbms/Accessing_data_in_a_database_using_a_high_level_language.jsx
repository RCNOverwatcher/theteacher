import React from "react";

function Accessing_data_in_a_database_using_a_high_level_language() {
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
                                Accessing data in a database&nbsp;using a high
                                level language
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Databases are not much use unless you can get
                                access to the data in them. If you are working
                                solely on a DBMS on an organisation's database,
                                then you will probably have all the tools you
                                need to access the data in the database. You
                                will be able to run queries, generate reports,
                                retrieve, amend, delete and add data and other
                                things besides. There will be times, however,
                                when you are writing an application, and that
                                application needs access to some data in a
                                database.
                              </p>

                              <p>
                                <strong>
                                  High level language access to data in a
                                  database
                                </strong>
                                <br />
                                All high level languages have instructions that
                                allow them to connect to an external data source
                                such as a database. Once connected, they can
                                then carry out the usual types of activities.
                                These include:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      searching through data for a specific
                                      piece of data
                                    </li>
                                    <li>sorting data into an order</li>
                                    <li>adding new data</li>
                                    <li>deleting data</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  <img
                                    style="margin: 20px; float: left"
                                    src="images/5ba7e386-466d-4348-952c-56cb86ab3081buffer.GIF"
                                    alt="buffer"
                                  />
                                  Security
                                </strong>
                                <br />
                                For reasons of security, it is not a good idea
                                to connect an application directly to an
                                external database. It would be possible to
                                corrupt the database accidently. More commonly,
                                an application would connect to a third party
                                piece of software and give any instructions to
                                that software. That software then communicates
                                with the external database that uses SQL,
                                retrieves any data requested and then passes it
                                back to the application.
                                <span style="line-height: 16.3636360168457px">
                                  Structured Query Language is just the software
                                  that actually interrogates the data in a
                                  database.&nbsp;
                                </span>
                              </p>
                              <p>
                                By having this 'buffer' program between your
                                application and the external database, you can't
                                accidently mess up the database! Typically, you
                                will know because it is in the public domain, or
                                you will be given the details that allow you to
                                communicate with this third party software so
                                all you have to do is to write the instructions
                                that you need to get back whatever data you
                                want.&nbsp;
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

export default Accessing_data_in_a_database_using_a_high_level_language;