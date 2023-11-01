import React from "react";

function intro_to_databases_improving_the_design() {
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
                              <p>&nbsp;</p>
                              <h1 style="text-align: center">
                                Improving the design of a flat file
                              </h1>
                              <p>
                                <strong>Improving the flat file design</strong>
                                <br />
                                Clearly, there are problems with flat file
                                databases. However, there is something that can
                                be done about it!&nbsp;Having two smaller tables
                                is no different to having one big table, as long
                                as we link them (or ‘relate’ them - hence the
                                term ‘relational database’). Consider one record
                                in a table. We can have one big record in one
                                table, or split the big record into two parts
                                and link them together (using a special link
                                called a 'foreign key'). One obvious way to
                                split the table is to have a table for members
                                and a table for dogs. We can draw a diagram of
                                this (called an E-R diagram, or
                                Entity-Relationship diagram). ‘Entity’ is just a
                                fancy name for a table, so this diagram shows
                                the relationship between entities, or tables.
                                <strong>&nbsp;</strong>
                              </p>

                              <p>
                                <strong>
                                  <img
                                    style="
                                  vertical-align: middle;
                                  display: block;
                                  margin-left: auto;
                                  margin-right: auto;
                                "
                                    src="images/4c6430c9-cc14-4754-8a4d-b329cbbb95eaer1.JPG"
                                    alt="er1"
                                  />
                                </strong>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  It is a very good idea to put some real or
                                  made-up records into the tables you have
                                  identified as part of your E-R analysis. It
                                  really helps you to ‘visualise’ the problem.
                                  Note that when you split up a table into two
                                  or more smaller tables, the first thing you
                                  have to do is to check that each of the tables
                                  you have got has a primary key, a field whose
                                  value for every single record (i.e. every
                                  single row) will be unique - no other record
                                  will have the same value. The members’ table
                                  has such a field (ID) but the dogs’ table
                                  doesn’t have a suitable one. One simple
                                  solution (but not the only one) is to add an
                                  ID attribute to the dogs’ table and make this
                                  the primary key. We will call this new added
                                  field ‘DogID’.
                                </span>
                              </p>
                              <p>
                                The second thing we need to do is to check that
                                each record in one table is related to a record
                                in the other table. We can do this by using a
                                ‘foreign key’; we copy the primary key from the
                                one side (members) and put it in the many side
                                (dogs). In other words, we copy the relevant ID
                                from the member’s table and put in the relevant
                                record for each dog. We now can view our
                                improved database design:
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/cf8181ee-3b47-4a7a-bc5d-2856eae5846btable2.JPG"
                                  alt="table2"
                                />
                              </p>
                              <p>
                                How is the relational database an improvement
                                over the flat file design?
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Each member’s details are now only stored
                                      once.
                                    </li>
                                    <li>
                                      Each dog is now identified by their own
                                      unique identity number.
                                    </li>
                                    <li>
                                      A new member now has their details entered
                                      into only one record, not multiple
                                      records.
                                    </li>
                                    <li>
                                      Changes to records need only be made in
                                      one place.
                                    </li>
                                    <li>
                                      Details that are to be deleted only need
                                      to be deleted from one record.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>&nbsp;</p>
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

export default intro_to_databases_improving_the_design;